import { Metadata } from "next";

export const metadata: Metadata = {
  title: "שאלות נפוצות על פולימרקט",
  description: "תשובות לכל השאלות הנפוצות על פולימרקט - איך להתחיל, איך להרוויח, שיטות תשלום, אבטחה ועוד. מדריך מקיף בעברית.",
  keywords: ["פולימרקט שאלות נפוצות", "polymarket faq", "שאלות על שוקי ניבויים", "איך עובד פולימרקט"],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "שאלות נפוצות על פולימרקט | פולימרקט ישראל",
    description: "תשובות לכל השאלות הנפוצות על פולימרקט - מדריך מקיף בעברית",
    url: "/faq",
    images: ["/og-image.svg"],
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
