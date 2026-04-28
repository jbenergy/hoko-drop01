import { CONTACT_EMAIL, INSTAGRAM_HANDLE, TIKTOK_HANDLE, PICKUP_DATE, DROP_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-background">

      {/* Main footer */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-14 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-foreground pt-12">

          {/* Column 1: Brand */}
          <div>
            <p className="text-[22px] font-bold text-foreground tracking-tight mb-1">HOKO</p>
            <p className="text-[13px] text-muted-foreground leading-relaxed">
              Hokkaido Cheese Tart
              <br />
              Berlin
            </p>
          </div>

          {/* Column 2: Brand sub-lockup */}
          <div>
            <p className="text-[12px] font-bold tracking-[0.14em] text-muted-foreground uppercase mb-4">
              {DROP_NAME} · Berlin · {PICKUP_DATE}
            </p>
            <p className="text-[14px] text-[#3a3a3a] leading-[1.8]">
              Frisch ist nicht verhandelbar.
              <br />
              Knappheit ist Ehrlichkeit.
              <br />
              Der Anschnitt ist der Moment.
            </p>
          </div>

          {/* Column 3: Links */}
          <div>
            <p className="text-[12px] font-bold tracking-[0.14em] text-muted-foreground uppercase mb-4">
              Links
            </p>
            <div className="space-y-2 text-[14px]">
              <p>
                <a
                  href={`https://instagram.com/eathoko`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors duration-150"
                >
                  Folge {INSTAGRAM_HANDLE} auf Instagram →
                </a>
              </p>
              <p>
                <a
                  href={`https://tiktok.com/@eathoko`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors duration-150"
                >
                  Folge {TIKTOK_HANDLE} auf TikTok →
                </a>
              </p>
              <div className="pt-4 space-y-2 text-muted-foreground">
                <p>
                  <a href="/impressum" className="hover:text-foreground transition-colors duration-150">
                    Impressum
                  </a>
                </p>
                <p>
                  <a href="/datenschutz" className="hover:text-foreground transition-colors duration-150">
                    Datenschutz
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="hover:text-foreground transition-colors duration-150"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-foreground/15 px-8 md:px-14 lg:px-20 py-5">
        <p className="text-[12px] text-muted-foreground">
          © 2026 HOKO Drop Bakery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
