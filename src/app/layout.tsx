import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const baseUrl = "https://xn--9dbgcll6azah.xn--4dbrk0ce";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "פולימרקט ישראל - שוק הניבויים המוביל בעולם",
    template: "%s | פולימרקט ישראל",
  },
  description: "למד על פולימרקט - פלטפורמת שוק הניבויים הגדולה בעולם. סחר על תוצאות אירועים אמיתיים בצורה פשוטה ושקופה.",
  keywords: ["פולימרקט", "polymarket", "שוק ניבויים", "prediction market", "crypto", "קריפטו", "שוקי ניבויים", "מסחר קריפטו"],
  authors: [{ name: "Polymarket Israel" }],
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "פולימרקט ישראל - שוק הניבויים המוביל בעולם",
    description: "למד על פולימרקט - פלטפורמת שוק הניבויים הגדולה בעולם",
    url: baseUrl,
    siteName: "פולימרקט ישראל",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "פולימרקט ישראל - שוק הניבויים המוביל בעולם",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "פולימרקט ישראל - שוק הניבויים המוביל בעולם",
    description: "למד על פולימרקט - פלטפורמת שוק הניבויים הגדולה בעולם",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "פולימרקט ישראל",
  alternateName: "Polymarket Israel",
  url: baseUrl,
  logo: `${baseUrl}/og-image.svg`,
  description: "מדריך ישראלי לפולימרקט - פלטפורמת שוק הניבויים המובילה בעולם",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "פולימרקט ישראל",
  alternateName: "Polymarket Israel",
  url: baseUrl,
  inLanguage: "he-IL",
  description: "למד על פולימרקט - פלטפורמת שוק הניבויים הגדולה בעולם",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${baseUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${heebo.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)]`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
