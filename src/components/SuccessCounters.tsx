import { useEffect, useState } from "react";
import { Users, Award, Calendar, ThumbsUp } from "lucide-react";

interface CounterItem {
  id: string;
  label: string;
  target: number;
  suffix: string;
  icon: any;
  sub: string;
}

export default function SuccessCounters() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    members: 0,
    years: 0,
    classes: 0,
    reviews: 0
  });

  const stats: CounterItem[] = [
    {
      id: "members",
      label: "MEMBERS TRAINED",
      target: 3420,
      suffix: "+",
      icon: Users,
      sub: "Active local East London community"
    },
    {
      id: "years",
      label: "YEARS COACHING",
      target: 25,
      suffix: "+",
      icon: Award,
      sub: "With elite England Boxing certifications"
    },
    {
      id: "classes",
      label: "CLASSES DELIVERED",
      target: 12500,
      suffix: "+",
      icon: Calendar,
      sub: "Bag, pad, conditioning and sparring hours"
    },
    {
      id: "reviews",
      label: "POSITIVE REVIEWS",
      target: 450,
      suffix: "+",
      icon: ThumbsUp,
      sub: "5.0 Rated Google Reviews profile"
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const steps = 40;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts(prev => {
        const next = { ...prev };
        stats.forEach(s => {
          const increment = s.target / steps;
          const val = Math.min(Math.round(increment * step), s.target);
          next[s.id] = val;
        });
        return next;
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="success-counter-cards-grid" className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            id={`counter-box-${stat.id}`}
            className="bg-brand-black/40 border border-zinc-900 rounded-lg p-5 sm:p-6 text-center hover:border-brand-red/30 hover:bg-brand-black/70 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Decorative red gradient ring on hover */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-brand-red/10 rounded-bl-full border-t border-r border-brand-red/10 group-hover:bg-brand-red/20 group-hover:border-brand-red/30 transition-all duration-300 pointer-events-none" />

            <div className="w-10 h-10 rounded-md bg-brand-red/10 border border-brand-red/20 text-brand-red flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-5 h-5" />
            </div>

            <div className="font-mono text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2 shrink-0">
              {counts[stat.id] ? counts[stat.id].toLocaleString() : 0}
              <span className="text-brand-red">{stat.suffix}</span>
            </div>

            <div className="font-display text-xs sm:text-sm font-bold tracking-widest text-zinc-300 uppercase mb-1">
              {stat.label}
            </div>

            <p className="text-[10px] text-gray-500 leading-normal max-w-[200px] mx-auto">
              {stat.sub}
            </p>
          </div>
        );
      })}
    </div>
  );
}
