import { useState, useEffect } from "react";
import { Lead } from "../types";
import { Search, Trash2, CheckCircle2, PhoneCall, Archive, Download, RefreshCw, Calendar, Sparkles, Filter, ShieldAlert } from "lucide-react";

interface AdminDashboardProps {
  onMutationTrigger: () => void;
}

export default function AdminDashboard({ onMutationTrigger }: AdminDashboardProps) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [experienceFilter, setExperienceFilter] = useState<string>("all");
  const [actionSuccessMsg, setActionSuccessMsg] = useState("");

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/enquiries");
      if (res.ok) {
        const data = await res.json();
        setLeads(data);
      }
    } catch (e) {
      console.log("Error loading leads in dashboard", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/enquiries/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setActionSuccessMsg(`Updated status successfully!`);
        fetchLeads();
        onMutationTrigger();
        setTimeout(() => setActionSuccessMsg(""), 3000);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!window.confirm("Are you sure you want to permanently delete this lead?")) {
      return;
    }
    try {
      const res = await fetch(`/api/enquiries/${id}`, {
        method: "DELETE"
      });
      if (res.ok) {
        setActionSuccessMsg(`Lead deleted!`);
        fetchLeads();
        onMutationTrigger();
        setTimeout(() => setActionSuccessMsg(""), 3000);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // Filter leads
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm);
    
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    const matchesExperience = experienceFilter === "all" || lead.experienceLevel.toLowerCase() === experienceFilter.toLowerCase();

    return matchesSearch && matchesStatus && matchesExperience;
  });

  // Stats calculation
  const totalLeads = leads.length;
  const newLeads = leads.filter(l => l.status === "new").length;
  const bookedLeads = leads.filter(l => l.status === "booked").length;
  const conversionRate = totalLeads > 0 ? Math.round((bookedLeads / totalLeads) * 100) : 0;

  // Export to simple CSV file
  const handleExportCSV = () => {
    if (leads.length === 0) return;
    
    const h = ["ID", "Name", "Phone", "Email", "Experience", "Goal", "Message", "Created At", "Status"];
    const rows = leads.map(l => [
      l.id,
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.experienceLevel}"`,
      `"${l.goal}"`,
      `"${(l.message || "").replace(/"/g, '""')}"`,
      l.createdAt,
      l.status
    ]);
    
    const csvContent = "data:text/csv;charset=utf-8," 
      + h.join(",") + "\n" 
      + rows.map(r => r.join(",")).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `limehouse_leads_registry_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="admin-dashboard-container" className="space-y-8 max-w-7xl mx-auto py-4">
      
      {/* Admin Title Block */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-zinc-900 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-red-950/30 border border-brand-red/30 rounded text-brand-red text-xs font-mono font-bold uppercase mb-2">
            <ShieldAlert className="w-4 h-4 text-brand-red shrink-0" />
            LIMEHOUSE SQUAD LEADERSHIP CONTROL CRM
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
            COMMERCIAL DESPATCH & SECURE LEADS
          </h1>
          <p className="text-gray-400 text-sm mt-1 max-w-2xl">
            Live database dashboard captures trial session bookings and contact form submissions. Modify call-backs status here directly to manage member conversions.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={fetchLeads}
            id="refresh-crm-btn"
            className="px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-gray-300 hover:text-white border border-zinc-800 rounded font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            REFRESH
          </button>
          <button
            onClick={handleExportCSV}
            id="export-crm-btn"
            disabled={leads.length === 0}
            className="px-4 py-2.5 bg-brand-red hover:bg-brand-red-light disabled:bg-zinc-900 disabled:text-gray-600 disabled:border-zinc-950 text-white border border-brand-red/10 rounded font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            EXPORT CSV
          </button>
        </div>
      </div>

      {actionSuccessMsg && (
        <div className="p-3 bg-green-950/40 border border-green-800 rounded font-mono text-xs text-green-400 animate-pulse">
          ✓ {actionSuccessMsg}
        </div>
      )}

      {/* Grid statistics summaries */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-zinc-950 border border-zinc-900 rounded p-4 relative overflow-hidden">
          <div className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">TOTAL REGISTRATIONS</div>
          <div className="font-mono text-3xl font-extrabold text-white mt-1 shrink-0">{totalLeads} Member Leads</div>
          <p className="text-[10px] text-gray-400 font-mono mt-1">Live submissions count</p>
        </div>

        <div className="bg-zinc-950 border border-zinc-900 rounded p-4 relative overflow-hidden">
          <div className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-widest">🚨 NEW UNATTENDED LEADS</div>
          <div className="font-mono text-3xl font-extrabold text-brand-red mt-1 shrink-0">{newLeads} Pending</div>
          <p className="text-[10px] text-gray-400 font-mono mt-1">Awaiting immediate call-back</p>
        </div>

        <div className="bg-zinc-950 border border-zinc-900 rounded p-4 relative overflow-hidden">
          <div className="text-[10px] font-mono font-bold text-green-500 uppercase tracking-widest">✓ BOOKED TRIAL SLOTS</div>
          <div className="font-mono text-3xl font-extrabold text-green-500 mt-1 shrink-0">{bookedLeads} Attending</div>
          <p className="text-[10px] text-gray-400 font-mono mt-1">Scheduled for training wraps</p>
        </div>

        <div className="bg-zinc-950 border border-zinc-900 rounded p-4 relative overflow-hidden font-display">
          <div className="text-[10px] font-mono font-bold text-yellow-500 uppercase tracking-widest">CONVERSION RATINGS</div>
          <div className="font-mono text-3xl font-extrabold text-yellow-500 mt-1 shrink-0">{conversionRate}% Rates</div>
          <p className="text-[10px] text-gray-400 font-mono mt-1">Fighters attending vs leads</p>
        </div>

      </div>

      {/* Form Filtering Search toolbar */}
      <div className="bg-zinc-950 border border-zinc-900 p-4 rounded flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 text-gray-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search registrations by name, email, or phone..."
            className="w-full bg-zinc-900 border border-zinc-800 text-white text-xs rounded pl-9 pr-4 py-2.5 outline-none focus:border-brand-red transition-all"
          />
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          {/* Status filter */}
          <div className="flex items-center gap-1.5 w-full md:w-auto">
            <Filter className="w-3.5 h-3.5 text-gray-500 shrink-0" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 text-gray-300 text-xs py-2 px-3 rounded cursor-pointer outline-none font-mono uppercase"
            >
              <option value="all">ALL STATUSES</option>
              <option value="new">🆕 NEW / UNREAD</option>
              <option value="contacted">📞 CONTACT DISPATCHED</option>
              <option value="booked">📅 TRIAL BOOKED</option>
              <option value="archived">📦 ARCHIVED</option>
            </select>
          </div>

          {/* Exp filter */}
          <select
            value={experienceFilter}
            onChange={(e) => setExperienceFilter(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 text-gray-300 text-xs py-2 px-3 rounded cursor-pointer outline-none font-mono uppercase"
          >
            <option value="all">SQUAD LEVELS</option>
            <option value="beginner">BEGINNERS</option>
            <option value="intermediate">INTERMEDIATES</option>
            <option value="competitive">COMPETITORS</option>
          </select>
        </div>
      </div>

      {/* Leads Table panel */}
      {loading ? (
        <div className="text-center py-12 bg-zinc-950 border border-zinc-900 rounded">
          <RefreshCw className="w-8 h-8 text-brand-red animate-spin mx-auto mb-4" />
          <div className="font-mono text-xs text-gray-400">LOADING DATABASE SQUAD RECORDS...</div>
        </div>
      ) : filteredLeads.length === 0 ? (
        <div className="text-center py-12 bg-zinc-950 border border-zinc-900 rounded">
          <p className="font-mono text-xs text-gray-500 mb-2">// DATA OVERLAY REGISTER IS EMPTY</p>
          <p className="text-gray-400 text-sm">No enquiries matched your search parameters.</p>
        </div>
      ) : (
        <div className="bg-zinc-950 border border-zinc-900 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-zinc-100 font-mono text-[10px] text-gray-500 tracking-widest uppercase border-b border-zinc-900">
                <tr>
                  <th className="py-4 px-4 font-semibold">GUEST DETAILS</th>
                  <th className="py-4 px-4 font-semibold">EXPERIENCE & PROGRAM</th>
                  <th className="py-4 px-4 font-semibold">MESSAGE DRAFT</th>
                  <th className="py-4 px-4 font-semibold">SUBMITTED ON</th>
                  <th className="py-4 px-4 font-semibold">CRM FUNNEL</th>
                  <th className="py-4 px-4 font-semibold text-right">CONTROLS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900/60 font-sans">
                {filteredLeads.map((lead) => (
                  <tr 
                    key={lead.id}
                    className={`hover:bg-white/[0.01] transition-colors ${
                      lead.status === "new" ? "border-l-4 border-l-brand-red font-semibold text-white" : ""
                    }`}
                  >
                    {/* Contacts info */}
                    <td className="py-4 px-4">
                      <div className="font-bold text-white text-sm">{lead.name}</div>
                      <div className="font-mono text-[10px] text-gray-400 mt-0.5">{lead.email}</div>
                      <div className="font-mono text-[10px] text-brand-red mt-0.5 font-bold">{lead.phone}</div>
                    </td>

                    {/* Exp/Goals */}
                    <td className="py-4 px-4 space-y-1">
                      <span className={`inline-block text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded uppercase ${
                        lead.experienceLevel === "Competitive" 
                          ? "bg-red-950 text-brand-red border border-brand-red/30"
                          : lead.experienceLevel === "Beginner"
                            ? "bg-zinc-900 text-gray-300"
                            : "bg-amber-950 text-amber-500"
                      }`}>
                        {lead.experienceLevel}
                      </span>
                      <div className="text-gray-300 text-xs uppercase font-mono tracking-tight">{lead.goal}</div>
                    </td>

                    {/* Guest Note */}
                    <td className="py-4 px-4 max-w-xs text-zinc-400">
                      <p className="line-clamp-2 italic">
                        {lead.message ? `"${lead.message}"` : "-- No special objectives submitted --"}
                      </p>
                    </td>

                    {/* Date */}
                    <td className="py-4 px-4 font-mono text-[10px] text-gray-400">
                      <div>{new Date(lead.createdAt).toLocaleDateString("en-GB", { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                      <div>{new Date(lead.createdAt).toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit' })}</div>
                    </td>

                    {/* Status Funnel */}
                    <td className="py-4 px-4">
                      <select
                        value={lead.status}
                        onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                        className={`text-[10px] font-mono font-bold py-1.5 px-2.5 rounded border cursor-pointer outline-none focus:border-brand-red uppercase ${
                          lead.status === 'new'
                            ? "bg-brand-red/10 border-brand-red/30 text-brand-red font-black"
                            : lead.status === 'contacted'
                              ? "bg-blue-950/20 border-blue-800/30 text-blue-400"
                              : lead.status === 'booked'
                                ? "bg-green-950/20 border-green-800/30 text-green-400"
                                : "bg-zinc-900 border-zinc-800 text-zinc-500"
                        }`}
                      >
                        <option value="new">🆕 Lead: Pending</option>
                        <option value="contacted">📞 Call dispatched</option>
                        <option value="booked">📅 Trial scheduled</option>
                        <option value="archived">📦 Lead archived</option>
                      </select>
                    </td>

                    {/* Actions controls */}
                    <td className="py-4 px-4 text-right">
                      <div className="flex justify-end gap-2">
                        {lead.status === 'new' && (
                          <button
                            onClick={() => handleUpdateStatus(lead.id, 'contacted')}
                            className="p-1 px-2.5 bg-blue-950/20 hover:bg-blue-950 text-blue-400 text-[10px] font-mono border border-blue-900 rounded cursor-pointer transition-all flex items-center gap-1 uppercase"
                            title="Log Call Dispatched"
                          >
                            <PhoneCall className="w-3.5 h-3.5" />
                            CALL
                          </button>
                        )}
                        {lead.status === 'contacted' && (
                          <button
                            onClick={() => handleUpdateStatus(lead.id, 'booked')}
                            className="p-1 px-2.5 bg-green-950/20 hover:bg-green-950 text-green-400 text-[10px] font-mono border border-green-900 rounded cursor-pointer transition-all flex items-center gap-1 uppercase"
                            title="Schedule Trial Attend"
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            BOOK
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteLead(lead.id)}
                          className="p-2 text-zinc-500 hover:text-brand-red bg-zinc-900/40 hover:bg-zinc-900 rounded transition-all cursor-pointer"
                          title="Purge Lead Permanently"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Security notice banner */}
      <div className="bg-zinc-950 border border-zinc-900 rounded p-4 flex items-center gap-3.5">
        <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
          <Calendar className="w-4 h-4" />
        </div>
        <p className="text-xs text-gray-400 leading-relaxed max-w-5xl">
          <strong className="text-white">UK Data Privacy Enforcement:</strong> Lead listings display raw contact entries submitted by public site visitors. For compliance, ensure that call back dispatches are executed respectfully, and remove any lead entries from the memory table that request local dataset purge.
        </p>
      </div>

    </div>
  );
}
