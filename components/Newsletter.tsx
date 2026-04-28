"use client";

import { useState } from "react";
import RevealBlock from "./RevealBlock";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="newsletter" className="w-full bg-foreground border-b border-foreground py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-14 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">

          <div className="md:w-[50%]">
            <RevealBlock>
              <p className="text-[11px] font-bold tracking-[0.22em] text-background/40 uppercase mb-8">
                Newsletter
              </p>
              <h2
                className="font-bold text-background leading-tight tracking-tight mb-5"
                style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
              >
                Drop verpasst?
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#ccc] leading-relaxed">
                Drop 02 kommt. Newsletter-Insider erfahren es zuerst.
                <br />
                Plus Behind-the-Scenes-Material und Drop-Reminder.
              </p>
            </RevealBlock>
          </div>

          <RevealBlock delay={120} className="md:w-[45%] shrink-0">
            {status === "success" ? (
              <div className="border border-background/20 px-6 py-5">
                <p className="text-[16px] font-bold text-accent">Du bist drin.</p>
                <p className="text-[14px] text-background/60 mt-1">
                  Drop 02 hörst du zuerst.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row border border-background/30">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="deine@email.de"
                    className="flex-1 h-[52px] bg-transparent px-5 text-[15px] text-background placeholder:text-background/30 focus:outline-none border-b sm:border-b-0 sm:border-r border-background/30"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="h-[52px] px-7 bg-accent text-background font-bold text-[14px] tracking-wide hover:bg-background hover:text-foreground transition-colors duration-200 shrink-0 disabled:opacity-60"
                  >
                    {status === "loading" ? "..." : "Anmelden →"}
                  </button>
                </div>
                {status === "error" && (
                  <p className="mt-2 text-[12px] text-red-400">
                    Fehler. Bitte nochmal versuchen.
                  </p>
                )}
                <p className="mt-3 text-[12px] text-background/40 leading-relaxed">
                  Kein Spam. Nur Drop-Ankündigungen und Foodie-Content. Abmelden mit einem Klick.
                </p>
              </form>
            )}
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
