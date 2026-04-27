import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate-Hinweis | Lumina Beauty",
  description: "Transparenz-Hinweis zum Amazon Partnerprogramm",
  robots: { index: false },
};

export default function AffiliateHinweis() {
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
          Affiliate-Hinweis
        </h1>
        <p className="text-sm mb-10" style={{ color: "#8B7B78" }}>
          Transparenz-Hinweis gemäß § 6 Abs. 1 Nr. 1 UWG und FTC-Richtlinien
        </p>

        {/* Hero box */}
        <div
          className="rounded-3xl p-8 mb-10 text-center"
          style={{ background: "linear-gradient(135deg, #EDD5D8, #EBD9B4)" }}
        >
          <div className="text-4xl mb-3">🤝</div>
          <p className="font-semibold text-base" style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#2C1A1A" }}>
            Diese Website ist Teilnehmerin des Amazon Partnerprogramms.
          </p>
          <p className="text-sm mt-2" style={{ color: "#8B7B78" }}>
            Für dich entstehen dabei keinerlei Mehrkosten.
          </p>
        </div>

        <div className="space-y-8 text-sm" style={{ color: "#2C1A1A" }}>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Was ist das Amazon Partnerprogramm?
            </h2>
            <div className="rounded-2xl p-6 leading-relaxed" style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}>
              <p>
                Das Amazon PartnerNet (Amazon Associates) ist ein Affiliate-Programm, das es
                Website-Betreibern ermöglicht, durch das Verlinken von Amazon-Produkten eine
                Provision zu verdienen. Wenn du auf einen solchen Link klickst und auf Amazon
                etwas kaufst, erhalte ich eine kleine Provision — unabhängig davon, ob es das
                verlinkte Produkt ist oder ein anderes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Wie erkenne ich Affiliate-Links?
            </h2>
            <div className="rounded-2xl p-6 leading-relaxed space-y-3" style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}>
              <p>Affiliate-Links auf dieser Seite sind gekennzeichnet durch:</p>
              <ul className="space-y-2 ml-2">
                <li className="flex gap-2">
                  <span style={{ color: "#C4838A" }}>✦</span>
                  <span>Einen <strong>„Shop auf Amazon"</strong>- oder <strong>„Amazon"</strong>-Button auf den Produktkarten</span>
                </li>
                <li className="flex gap-2">
                  <span style={{ color: "#C4838A" }}>✦</span>
                  <span>Den Hinweis <strong>„*"</strong> oder <strong>„Affiliate-Link"</strong> im Text</span>
                </li>
                <li className="flex gap-2">
                  <span style={{ color: "#C4838A" }}>✦</span>
                  <span>Den Satz <em>„Als Amazon-Partnerin verdiene ich an qualifizierten Verkäufen"</em> im Footer und in Produktbereichen</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Meine Empfehlungen sind unabhängig
            </h2>
            <div className="rounded-2xl p-6 leading-relaxed" style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}>
              <p>
                Alle Produktempfehlungen auf dieser Website basieren auf meiner eigenen Erfahrung
                und ehrlichen Meinung. Ich empfehle ausschließlich Produkte, die ich selbst getestet
                habe und von denen ich überzeugt bin. Die mögliche Provision beeinflusst meine
                Empfehlungen nicht.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Keine Mehrkosten für dich
            </h2>
            <div className="rounded-2xl p-6 leading-relaxed" style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}>
              <p>
                Wenn du über einen Affiliate-Link auf dieser Seite einkaufst, zahlst du den
                gleichen Preis wie bei einem direkten Kauf auf Amazon. Die Provision, die ich
                erhalte, kommt nicht von dir, sondern von Amazon aus dem eigenen Budget.
                Du unterstützt mich dadurch, ohne selbst mehr zu bezahlen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Rechtliche Grundlagen
            </h2>
            <div className="rounded-2xl p-6 leading-relaxed space-y-2" style={{ background: "#FFFBF8", border: "1px solid #F0E6DC" }}>
              <p>
                Diese Kennzeichnung erfolgt gemäß:
              </p>
              <ul className="space-y-1.5 ml-2">
                <li className="flex gap-2">
                  <span style={{ color: "#C9A96E" }}>→</span>
                  <span>§ 6 Abs. 1 Nr. 1 UWG (Gesetz gegen den unlauteren Wettbewerb)</span>
                </li>
                <li className="flex gap-2">
                  <span style={{ color: "#C9A96E" }}>→</span>
                  <span>§ 5a Abs. 4 UWG (Informationspflichten bei kommerzieller Kommunikation)</span>
                </li>
                <li className="flex gap-2">
                  <span style={{ color: "#C9A96E" }}>→</span>
                  <span>FTC Endorsement Guides (für internationales Publikum)</span>
                </li>
                <li className="flex gap-2">
                  <span style={{ color: "#C9A96E" }}>→</span>
                  <span>Amazon Associates Program Operating Agreement</span>
                </li>
              </ul>
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
