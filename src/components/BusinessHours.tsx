"use client";

import React from "react";
import { Clock } from "lucide-react";

export default function BusinessHours() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      // Adjust for Indian Standard Time if needed, but Date() usually follows system time
      // For this demo, we'll assume system time is correct for the user's location
      const day = now.getDay(); // 0 is Sunday, 1-6 is Mon-Sat
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTimeInMinutes = hours * 60 + minutes;

      // Monday to Saturday (1-6)
      if (day >= 1 && day <= 6) {
        const morningStart = 9 * 60; // 9:00 AM
        const morningEnd = 13 * 60;   // 1:00 PM
        const eveningStart = 15 * 60; // 3:00 PM
        const eveningEnd = 20 * 60;   // 8:00 PM

        if (
          (currentTimeInMinutes >= morningStart && currentTimeInMinutes < morningEnd) ||
          (currentTimeInMinutes >= eveningStart && currentTimeInMinutes < eveningEnd)
        ) {
          setIsOpen(true);
          return;
        }
      }
      setIsOpen(false);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4 border-b border-outline-variant/20 pb-4">
        <div className="p-2 bg-primary/10 rounded border border-primary/20">
          <Clock size={18} className="text-primary" />
        </div>
        <h3 className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">
          Operational Hours
        </h3>
      </div>
      
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center group">
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
              Monday — Saturday
            </span>
            <div className="h-px flex-grow mx-4 bg-outline-variant/10 group-hover:bg-primary/20 transition-colors" />
          </div>
          <div className="flex flex-col gap-1 pl-4 border-l-2 border-primary/20">
            <span className="font-sora text-sm font-bold text-foreground uppercase tracking-tight">
              09:00 AM — 01:00 PM
            </span>
            <span className="font-sora text-sm font-bold text-foreground uppercase tracking-tight">
              03:00 PM — 08:00 PM
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center group opacity-60">
          <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
            Sunday
          </span>
          <div className="h-px flex-grow mx-4 bg-outline-variant/10" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-error font-black">
            Closed
          </span>
        </div>
      </div>
      
      <div className={`mt-2 flex items-center gap-3 py-3 px-4 rounded border transition-all duration-500 ${
        isOpen 
          ? "bg-primary/5 border-primary/20" 
          : "bg-error/5 border-error/20"
      }`}>
        <div className={`w-2 h-2 rounded-full animate-pulse ${
          isOpen ? "bg-green-500" : "bg-error"
        }`} />
        <span className={`font-inter text-[10px] font-bold uppercase tracking-widest ${
          isOpen ? "text-primary" : "text-error"
        }`}>
          Live Status: {isOpen ? "Currently Operational" : "Currently Closed"}
        </span>
      </div>
    </div>
  );
}
