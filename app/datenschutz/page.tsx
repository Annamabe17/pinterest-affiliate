import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Lumina Beauty",
  description: "Datenschutzerklärung gemäß DSGVO",
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <main className="min-h-screen py-24 px-6" style={{ background: "#FDF8F3" }}>
      <div className="max-w-2xl mx-auto">
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
          Datenschutzerklärung
        </h1>
        <p className="text-sm mb-10" style={{ color: "#8B7B78" }}>
          Gemäß Art. 13, 14 DSGVO — Stand: April 2026
        </p>

        <div className="space-y-8 text-sm" style={{ color: "#2C1A1A" }}>

          {/* 1 Verantwortliche */}
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              1. Verantwortliche Person
            </h2>
            <div className="rounded-2xl p-6 leading-relaxed space-y-1" style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}>
              <p className="font-semibold">Anna-Maria Beckmann</p>
              <p>Meisenweg 17, 86916 Kaufering</p>
              <p>
                E-Mail:{" "}
                <a href="mailto:business@lumina-vl.com" style={{ color: "#C4838A" }}>
                  business@lumina-vl.com
                </a>
              </p>
            </div>
          </section>

          {/* 2 Allgemeines */}
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <div className="rounded-2xl p-6 leading-relaxed" style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}>
              <p>
                Ich nehme den Schutz deiner persönlichen Daten sehr ernst. Diese Datenschutzerklärung
                erläutert, welche Daten auf dieser Website erhoben werden, wie sie verwendet werden
                und welche Rechte du hast. Die Verarbeitung personenbezogener Daten erfolgt stets im
                Einklang mit der Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG).
              </p>
            </div>
          </section>

          {/* 3 Hosting Vercel */}
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              3. Hosting (Vercel)
            </h2>
            <div className="rounded-2xl p-6 leading-relaxed space-y-3" style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}>
              <p>
                Diese Website wird gehostet bei <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133,
                Covina, CA 91723, USA. Beim Aufruf der Website werden automatisch technische Zugriffsdaten
                gespeichert, insbesondere:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2" style={{ color: "#8B7B78" }}>
                <li>IP-Adresse des anfragenden Geräts (anonymisiert)</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Aufgerufene Seite / URL</li>
                <li>Browsertyp und Betriebssystem</li>
                <li>HTTP-Statuscode</li>
              </ul>
              <p>
                Die Daten werden zur Sicherstellung des technischen Betriebs benötigt (Art. 6 Abs. 1 lit. f DSGVO).
                Da Vercel in den USA ansässig ist, erfolgt eine Datenübermittlung in ein Drittland.
                Vercel hat sich zur Einhaltung der EU-Standardvertragsklauseln (SCC) verpflichtet.
                Weitere Informationen:{" "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "#C4838A" }}>
                  Vercel Datenschutzerklärung
                </a>.
              </p>
            </div>
          </section>

          {/* 4 Cookies */}
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              4. Cookies
            </h2>
            <div className="rounded-2xl p-6 leading-relaxed" style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}>
              <p className="mb-3">
                Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den
                Betrieb der Website erforderlich sind. Es werden keine Marketing- oder
                Tracking-Cookies eingesetzt. Eine Einwilligung ist für technisch notwendige
                Cookies nicht erforderlich (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p>
                Du kannst Cookies jederzeit in den Einstellungen deines Browsers deaktivieren
                oder löschen. Bitte beachte, dass dadurch die Funktionalität der Website
                eingeschränkt sein kann.
              </p>
            </div>
          </section>

          {/* 5 Amazon Partnerprogramm */}
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              5. Amazon Partnerprogramm
            </h2>
            <div className="rounded-2xl p-6 leading-relaxed space-y-3" style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}>
              <p>
                Diese Website nimmt am Amazon EU-Partnerprogramm teil, einem
                Affiliate-Marketing-Programm der <strong>Amazon Europe Core S.à r.l.</strong>,
                5 Rue Plaetis, L-2338 Luxemburg. Die mit „*" oder „(Affiliate-Link)"
                gekennzeichneten Links sind Affiliate-Links zu amazon.de.
              </p>
              <p>
                Beim Klick auf einen solchen Link und einem anschließenden Kauf erhalte ich
                eine Provision. Für dich als Käufer entstehen dabei keine Mehrkosten. Amazon
                setzt bei Klick auf den Link Cookies, um die Vermittlung nachzuverfolgen.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
                der Monetarisierung).
              </p>
              <p>
                Weitere Informationen zur Datenverarbeitung durch Amazon:{" "}
                <a href="https://www.amazon.de/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ" target="_blank" rel="noopener noreferrer" style={{ color: "#C4838A" }}>
                  Amazon Datenschutzerklärung
                </a>.
              </p>
            </div>
          </section>

          {/* 6 Newsletter */}
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              6. Newsletter / E-Mail-Kontakt
            </h2>
            <div className="rounded-2xl p-6 leading-relaxed" style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}>
              <p className="mb-3">
                Wenn du dich für den Newsletter anmeldest, gibst du freiwillig deine
                E-Mail-Adresse an. Diese wird ausschließlich zum Versand des Newsletters
                verwendet und nicht an Dritte weitergegeben.
              </p>
              <p className="mb-3">
                Rechtsgrundlage ist deine Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
                Du kannst deine Einwilligung jederzeit widerrufen (Abmeldelink im Newsletter
                oder per E-Mail an business@lumina-vl.com).
              </p>
              <p>
                <strong>Hinweis:</strong> Der Newsletter-Versand befindet sich derzeit im Aufbau.
                Aktuell werden eingetragene E-Mail-Adressen gespeichert, aber noch kein
                Newsletter verschickt.
              </p>
            </div>
          </section>

          {/* 7 Kontaktaufnahme */}
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              7. Kontaktaufnahme per E-Mail
            </h2>
            <div className="rounded-2xl p-6 leading-relaxed" style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}>
              <p>
                Wenn du mir per E-Mail schreibst, werden die von dir übermittelten Daten
                (E-Mail-Adresse, Name, Nachricht) zur Bearbeitung deiner Anfrage gespeichert.
                Diese Daten werden nicht ohne deine Einwilligung weitergegeben. Rechtsgrundlage
                ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </div>
          </section>

          {/* 8 Deine Rechte */}
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              8. Deine Rechte
            </h2>
            <div className="rounded-2xl p-6 leading-relaxed space-y-3" style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}>
              <p>Du hast jederzeit das Recht auf:</p>
              <ul className="space-y-2 ml-2">
                {[
                  ["Auskunft", "Art. 15 DSGVO — welche Daten über dich gespeichert sind"],
                  ["Berichtigung", "Art. 16 DSGVO — unrichtige Daten korrigieren"],
                  ["Löschung", "Art. 17 DSGVO — Löschung deiner Daten"],
                  ["Einschränkung", "Art. 18 DSGVO — Verarbeitung einschränken"],
                  ["Datenübertragbarkeit", "Art. 20 DSGVO — Daten in maschinenlesbarem Format erhalten"],
                  ["Widerspruch", "Art. 21 DSGVO — Verarbeitung auf Basis berechtigter Interessen widersprechen"],
                  ["Beschwerde", "Art. 77 DSGVO — bei der Datenschutzbehörde beschweren"],
                ].map(([right, desc]) => (
                  <li key={right} className="flex gap-2">
                    <span className="shrink-0" style={{ color: "#C4838A" }}>✦</span>
                    <span>
                      <strong>{right}:</strong> {desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                Zur Ausübung deiner Rechte wende dich an:{" "}
                <a href="mailto:business@lumina-vl.com" style={{ color: "#C4838A" }}>
                  business@lumina-vl.com
                </a>
              </p>
            </div>
          </section>

          {/* 9 Speicherdauer */}
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              9. Speicherdauer
            </h2>
            <div className="rounded-2xl p-6 leading-relaxed" style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}>
              <p>
                Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen
                Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. E-Mail-Adressen
                für den Newsletter werden bis zum Widerruf der Einwilligung gespeichert.
              </p>
            </div>
          </section>

          {/* 10 Aufsichtsbehörde */}
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              10. Zuständige Aufsichtsbehörde
            </h2>
            <div className="rounded-2xl p-6 leading-relaxed" style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}>
              <p>
                Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)
                <br />
                Promenade 27, 91522 Ansbach
                <br />
                <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" style={{ color: "#C4838A" }}>
                  www.lda.bayern.de
                </a>
              </p>
            </div>
          </section>

        </div>

        <p className="text-xs mt-10" style={{ color: "#8B7B78" }}>
          Stand: April 2026 — Diese Datenschutzerklärung wird bei Bedarf aktualisiert.
        </p>
      </div>
    </main>
  );
}
