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

export const metadata: Metadata = {
  title: "פולימרקט ישראל - שוק הניבויים המוביל בעולם",
  description: "למד על פולימרקט - פלטפורמת שוק הניבויים הגדולה בעולם. סחר על תוצאות אירועים אמיתיים בצורה פשוטה ושקופה.",
  keywords: ["פולימרקט", "polymarket", "שוק ניבויים", "prediction market", "crypto", "קריפטו"],
  authors: [{ name: "Polymarket Israel" }],
  openGraph: {
    title: "פולימרקט ישראל - שוק הניבויים המוביל בעולם",
    description: "למד על פולימרקט - פלטפורמת שוק הניבויים הגדולה בעולם",
    url: "https://xn--9dbgcll6azah.xn--4dbrk0ce",
    siteName: "פולימרקט ישראל",
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "פולימרקט ישראל - שוק הניבויים המוביל בעולם",
    description: "למד על פולימרקט - פלטפורמת שוק הניבויים הגדולה בעולם",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
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
