import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import fs from "fs";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  experienceLevel: string;
  goal: string;
  message?: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'booked' | 'archived';
}

interface Alert {
  id: string;
  title: string;
  message: string;
  createdAt: string;
  isRead: boolean;
}

// In-memory databases
let enquiries: Lead[] = [
  {
    id: "lead-1",
    name: "Alex Mercer",
    phone: "+44 7721 983241",
    email: "alex.mercer@gmail.com",
    experienceLevel: "Beginner",
    goal: "Weight Loss & Tech",
    message: "Hoping to do my free trial tomorrow evening. No prior experience.",
    createdAt: new Date(Date.now() - 3 * 3600 * 1000).toISOString(), // 3 hours ago
    status: "new"
  },
  {
    id: "lead-2",
    name: "Sonia Patel",
    phone: "+44 7911 345678",
    email: "sonia.patel@hotmail.com",
    experienceLevel: "Intermediate",
    goal: "Boxing Technique",
    message: "Looking for adult boxing classes to improve my sparring technique.",
    createdAt: new Date(Date.now() - 1 * 24 * 3600 * 1000).toISOString(), // 1 day ago
    status: "contacted"
  },
  {
    id: "lead-3",
    name: "Marcus Rashford",
    phone: "+44 7888 123456",
    email: "marcus.rash@outlook.com",
    experienceLevel: "Competitive",
    goal: "Competitions",
    message: "Interested in competing under the academy card. Have registered with England Boxing.",
    createdAt: new Date(Date.now() - 3 * 24 * 3600 * 1000).toISOString(), // 3 days ago
    status: "booked"
  }
];

let alerts: Alert[] = [
  {
    id: "alert-1",
    title: "New Enquiry Recieved",
    message: "Alex Mercer submitted a Free Trial Booking",
    createdAt: new Date(Date.now() - 3 * 3600 * 1000).toISOString(),
    isRead: false
  }
];

// Helper to save to local backup file if permitted
const DATA_DIR = path.join(process.cwd(), "data");
const DE_FILE = path.join(DATA_DIR, "enquiries.json");

function ensureDataDirectory() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(DE_FILE)) {
      const data = fs.readFileSync(DE_FILE, "utf-8");
      enquiries = JSON.parse(data);
    } else {
      fs.writeFileSync(DE_FILE, JSON.stringify(enquiries, null, 2));
    }
  } catch (error) {
    console.log("Persistence directory setup warning (running strictly in-memory):", error);
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  ensureDataDirectory();

  app.use(express.json());

  // API - Get all leads
  app.get("/api/enquiries", (req, res) => {
    res.json(enquiries);
  });

  // API - Submit an enquiry (Lead Gen Form)
  app.post("/api/enquiries", (req, res) => {
    const { name, phone, email, experienceLevel, goal, message } = req.body;

    if (!name || !phone || !email) {
      return res.status(400).json({ error: "Name, email and phone number are required." });
    }

    const newLead: Lead = {
      id: "lead_" + Math.random().toString(36).substr(2, 9),
      name,
      phone,
      email,
      experienceLevel: experienceLevel || "Beginner",
      goal: goal || "General Fitness",
      message: message || "",
      createdAt: new Date().toISOString(),
      status: "new"
    };

    enquiries.unshift(newLead);

    // Save to backup
    try {
      if (fs.existsSync(DATA_DIR)) {
        fs.writeFileSync(DE_FILE, JSON.stringify(enquiries, null, 2));
      }
    } catch (e) {
      console.log("Error saving leads backup", e);
    }

    // Add administrative alert
    const newAlert: Alert = {
      id: "alert_" + Math.random().toString(36).substr(2, 9),
      title: "🔥 New Trial Registration",
      message: `${name} has registered for a free trial (${experienceLevel})`,
      createdAt: new Date().toISOString(),
      isRead: false
    };
    alerts.unshift(newAlert);

    // Simulated email / admin notification log
    console.log(`[EMAIL DISPATCH] To: admin@limehouseboxingacademy.co.uk`);
    console.log(`[EMAIL DISPATCH] Subject: New Lead Generated: ${name}`);
    console.log(`[EMAIL DISPATCH] Details: ${JSON.stringify(newLead, null, 2)}`);

    res.status(201).json({ success: true, lead: newLead });
  });

  // API - Update Lead Status (FUNNEL CRM)
  app.put("/api/enquiries/:id", (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const leadIndex = enquiries.findIndex(e => e.id === id);
    if (leadIndex === -1) {
      return res.status(404).json({ error: "Lead not found" });
    }

    enquiries[leadIndex].status = status;

    // Save to backup
    try {
      if (fs.existsSync(DATA_DIR)) {
        fs.writeFileSync(DE_FILE, JSON.stringify(enquiries, null, 2));
      }
    } catch (e) {
      // ignore
    }

    res.json(enquiries[leadIndex]);
  });

  // API - Delete Lead
  app.delete("/api/enquiries/:id", (req, res) => {
    const { id } = req.params;
    enquiries = enquiries.filter(e => e.id !== id);

    // Save to backup
    try {
      if (fs.existsSync(DATA_DIR)) {
        fs.writeFileSync(DE_FILE, JSON.stringify(enquiries, null, 2));
      }
    } catch (e) {
      // ignore
    }

    res.json({ success: true });
  });

  // API - Get admin alerts
  app.get("/api/alerts", (req, res) => {
    res.json(alerts);
  });

  // API - Mark alerts as read
  app.post("/api/alerts/read", (req, res) => {
    alerts = alerts.map(a => ({ ...a, isRead: true }));
    res.json({ success: true });
  });

  // Serve static assets out of output and setup Vite development server
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
    console.log(`Email Service Simulated: Active`);
    console.log(`Database (leads.json Backup): Active`);
  });
}

startServer();
