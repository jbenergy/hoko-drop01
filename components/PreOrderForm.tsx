"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PRICE_PER_BOX, MAX_BOXES_PER_ORDER, TOTAL_BOXES } from "@/lib/constants";
import RevealBlock from "./RevealBlock";

const schema = z.object({
  firstName: z.string().min(1, "Vorname erforderlich"),
  email: z.string().email("Bitte eine gültige Email-Adresse eingeben"),
  phone: z.string().optional(),
  quantity: z.number().min(1).max(MAX_BOXES_PER_ORDER),
});

type FormData = z.infer<typeof schema>;

interface PreOrderFormProps {
  soldBoxes?: number;
}

export default function PreOrderForm({ soldBoxes = 0 }: PreOrderFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const available = TOTAL_BOXES - soldBoxes;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { quantity: 1 },
  });

  const quantity = watch("quantity");
  const total = quantity * PRICE_PER_BOX;

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.url) {
        window.location.href = json.url;
      } else {
        setError(json.error ?? "Etwas ist schiefgelaufen. Versuch es nochmal.");
      }
    } catch {
      setError("Verbindungsfehler. Bitte nochmal versuchen.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="pre-order" className="w-full bg-background border-b border-foreground py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-14 lg:px-20">

        <RevealBlock>
          <p className="text-[11px] font-bold tracking-[0.22em] text-muted-foreground uppercase mb-12">
            Pre-Order
          </p>
        </RevealBlock>

        <div className="flex flex-col md:flex-row gap-16 md:gap-20 items-start">

          {/* Left: heading + trust signals */}
          <RevealBlock className="md:w-[38%] shrink-0">
            <h2
              className="font-bold text-foreground leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            >
              Box sichern.
            </h2>
            <p className="text-[16px] text-[#3a3a3a] leading-relaxed mb-10">
              50 Boxen total. Bezahlung jetzt,
              <br />Pickup am 30.05.
            </p>

            {/* Urgency signal */}
            {available <= 20 && available > 0 && (
              <div className="border border-accent bg-accent/5 px-5 py-4 mb-8">
                <p className="text-[13px] font-bold text-accent tracking-wide">
                  Nur noch {available} Boxen verfügbar.
                </p>
              </div>
            )}

            <div className="space-y-3 text-[14px] text-[#3a3a3a]">
              <p className="flex items-center gap-3">
                <span className="text-accent font-bold">✓</span>
                Sichere Zahlung via Stripe
              </p>
              <p className="flex items-center gap-3">
                <span className="text-accent font-bold">✓</span>
                Geld-zurück, wenn nicht begeistert
              </p>
              <p className="flex items-center gap-3">
                <span className="text-accent font-bold">✓</span>
                Sofortige Bestätigungs-Email
              </p>
              <p className="flex items-center gap-3">
                <span className="text-accent font-bold">✓</span>
                Pickup-Reminder 24h vor Drop
              </p>
            </div>
          </RevealBlock>

          {/* Right: form */}
          <RevealBlock delay={120} className="flex-1">
            <div className="border border-foreground p-8 md:p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                {/* Vorname */}
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.14em] uppercase text-foreground mb-2">
                    Vorname *
                  </label>
                  <input
                    {...register("firstName")}
                    placeholder="Dein Vorname"
                    className="w-full h-[48px] border border-foreground/30 bg-transparent px-4 text-[15px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-[12px] text-red-600">{errors.firstName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.14em] uppercase text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="deine@email.de"
                    className="w-full h-[48px] border border-foreground/30 bg-transparent px-4 text-[15px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                  {errors.email && (
                    <p className="mt-1 text-[12px] text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Telefon */}
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.14em] uppercase text-foreground mb-2">
                    Telefon{" "}
                    <span className="font-normal text-muted-foreground normal-case tracking-normal text-[12px]">
                      (optional, für Pickup-Reminder)
                    </span>
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="+49 ..."
                    className="w-full h-[48px] border border-foreground/30 bg-transparent px-4 text-[15px] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>

                {/* Anzahl */}
                <div>
                  <label className="block text-[11px] font-bold tracking-[0.14em] uppercase text-foreground mb-2">
                    Anzahl Boxen *
                  </label>
                  <div className="flex items-center border border-foreground/30 h-[48px] focus-within:border-accent transition-colors duration-200">
                    <button
                      type="button"
                      onClick={() => setValue("quantity", Math.max(1, quantity - 1))}
                      className="w-[48px] h-full flex items-center justify-center text-[20px] font-bold border-r border-foreground/30 hover:bg-foreground hover:text-background transition-colors duration-150 shrink-0"
                    >
                      −
                    </button>
                    <span className="flex-1 text-center text-[16px] font-bold">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setValue("quantity", Math.min(MAX_BOXES_PER_ORDER, quantity + 1))}
                      className="w-[48px] h-full flex items-center justify-center text-[20px] font-bold border-l border-foreground/30 hover:bg-foreground hover:text-background transition-colors duration-150 shrink-0"
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-1 text-[12px] text-muted-foreground">
                    Maximal {MAX_BOXES_PER_ORDER} Boxen pro Bestellung.
                  </p>
                </div>

                {/* Total */}
                <div className="border-t border-foreground/15 pt-5 flex justify-between items-center">
                  <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-muted-foreground">
                    Total
                  </span>
                  <span className="text-[24px] font-bold text-foreground">{total} Euro</span>
                </div>

                {/* Error */}
                {error && (
                  <p className="text-[13px] text-red-600 border border-red-200 bg-red-50 px-4 py-3">
                    {error}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group w-full flex items-center justify-between bg-accent text-background font-bold text-[16px] h-[60px] px-8 hover:bg-foreground transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>{isLoading ? "Weiterleitung..." : "Jetzt bezahlen und Box sichern"}</span>
                  {!isLoading && (
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  )}
                </button>

                <p className="text-[12px] text-muted-foreground text-center leading-relaxed">
                  Sichere Zahlung via Stripe.
                  <br />
                  Geld-zurück-Garantie, wenn du beim Bissen nicht begeistert bist.
                </p>
              </form>
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
