import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | Lumina Beauty",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 TMG",
  robots: { index: false },
};

export default function Impressum() {
  return (
    <main className="min-h-screen py-24 px-6" style={{ background: "#FDF8F3" }}>
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors hover:opacity-70"
          style={{ color: "#C4838A" }}
        >
          ← Zurück zur Startseite
        </Link>

        <h1
          className="text-4xl font-bold mb-2"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#2C1A1A" }}
        >
          Impressum
        </h1>
        <p className="text-sm mb-10" style={{ color: "#8B7B78" }}>
          Anbieterkennzeichnung gemäß § 5 TMG
        </p>

        <div className="space-y-8" style={{ color: "#2C1A1A" }}>

          {/* Anbieter */}
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Angaben gemäß § 5 TMG
            </h2>
            <div
              className="rounded-2xl p-6 text-sm leading-relaxed space-y-1"
              style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}
            >
              <p className="font-semibold">Anna-Maria Beckmann</p>
              <p>Meisenweg 17</p>
              <p>86916 Kaufering</p>
              <p>Deutschland</p>
            </div>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Kontakt
            </h2>
            <div
              className="rounded-2xl p-6 text-sm leading-relaxed space-y-2"
              style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}
            >
              <p>
                <span className="font-medium">E-Mail:</span>{" "}
                <a
                  href="mailto:business@lumina-vl.com"
                  className="transition-colors hover:opacity-70"
                  style={{ color: "#C4838A" }}
                >
                  business@lumina-vl.com
                </a>
              </p>
            </div>
          </section>

          {/* Steuer */}
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Steuerliche Angaben
            </h2>
            <div
              className="rounded-2xl p-6 text-sm leading-relaxed"
              style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}
            >
              <p>
                Kleinunternehmerin gemäß § 19 UStG. Es wird keine Umsatzsteuer berechnet
                und keine Umsatzsteuer-Identifikationsnummer ausgewiesen.
              </p>
            </div>
          </section>

          {/* Affiliate */}
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Hinweis zum Partnerprogramm
            </h2>
            <div
              className="rounded-2xl p-6 text-sm leading-relaxed"
              style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}
            >
              <p>
                Diese Website ist Teilnehmerin des Amazon Partnerprogramms, einem Partnerwerbeprogramm,
                das zur Bereitstellung eines Mediums für Websites konzipiert wurde, mittels dessen durch
                die Platzierung von Werbeanzeigen und Links zu amazon.de Werbekostenerstattungen verdient
                werden können. Als Amazon-Partnerin verdiene ich an qualifizierten Verkäufen. Für den
                Käufer entstehen dabei keine Mehrkosten.
              </p>
            </div>
          </section>

          {/* Haftung Inhalte */}
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Haftung für Inhalte
            </h2>
            <div
              className="rounded-2xl p-6 text-sm leading-relaxed"
              style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}
            >
              <p>
                Als Dienstanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
                den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Dienstanbieter
                jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
                oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend
                entfernen.
              </p>
            </div>
          </section>

          {/* Haftung Links */}
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Haftung für Links
            </h2>
            <div
              className="rounded-2xl p-6 text-sm leading-relaxed"
              style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}
            >
              <p>
                Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.
                Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
            </div>
          </section>

          {/* Urheberrecht */}
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Urheberrecht
            </h2>
            <div
              className="rounded-2xl p-6 text-sm leading-relaxed"
              style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}
            >
              <p>
                Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
                der jeweiligen Autorin bzw. Erstellerin. Downloads und Kopien dieser Seite sind nur für den
                privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </div>
          </section>

        </div>

        <p className="text-xs mt-10" style={{ color: "#8B7B78" }}>
          Stand: April 2026
        </p>
      </div>
    </main>
  );
}
