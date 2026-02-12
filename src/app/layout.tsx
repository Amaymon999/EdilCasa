import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { jsonLdLocalBusiness } from "@/components/SEO";

export const metadata: Metadata = {
  title: `${site.brand} — Ristrutturazioni e showroom materiali`,
  description: site.description,
  openGraph: {
    title: `${site.brand} — Ristrutturazioni e showroom`,
    description: site.description,
    type: "website",
  },
  icons: [{ rel: "icon", url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='%23070A08'/><text x='50' y='58' text-anchor='middle' font-size='42' font-family='Arial' fill='%235CFF7A'>EC</text></svg>" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
      </body>
    </html>
  );
}
