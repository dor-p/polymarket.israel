import { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "פולימרקט ישראל - שוק הניבויים המוביל בעולם",
  description: "למד על פולימרקט - פלטפורמת שוק הניבויים הגדולה בעולם. סחר על תוצאות אירועים אמיתיים בצורה פשוטה ושקופה.",
  alternates: {
    canonical: "/",
  },
};

// FAQPage structured data for the FAQ section
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "מה זה שוק ניבויים?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "שוק ניבויים הוא פלטפורמה שבה אנשים יכולים לסחור על תוצאות של אירועים עתידיים. המחירים משקפים את ההסתברות הקולקטיבית שהקהילה מעריכה לכל תוצאה אפשרית.",
      },
    },
    {
      "@type": "Question",
      name: "איך אפשר להרוויח בפולימרקט?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "אתם קונים מניות על תוצאה מסוימת. אם התוצאה מתרחשת, כל מניה שווה $1. אם לא - היא שווה $0. ההבדל בין מחיר הקנייה למחיר הסופי הוא הרווח או ההפסד שלכם.",
      },
    },
    {
      "@type": "Question",
      name: "האם פולימרקט בטוח?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "פולימרקט בנוי על טכנולוגיית בלוקצ׳יין (Polygon) המבטיחה שקיפות מלאה. כל העסקאות מתועדות באופן ציבורי ולא ניתן לשנות אותן.",
      },
    },
    {
      "@type": "Question",
      name: "איזה סוגי שווקים קיימים?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "בפולימרקט תמצאו שווקים על מגוון נושאים: בחירות ופוליטיקה, ספורט, כלכלה ופיננסים, טכנולוגיה, בידור ועוד.",
      },
    },
    {
      "@type": "Question",
      name: "מה המינימום להתחיל לסחור?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "אין מינימום קבוע. אתם יכולים להתחיל עם כל סכום שתרצו ולקנות חלקי מניות.",
      },
    },
    {
      "@type": "Question",
      name: "איך מפקידים ומושכים כסף?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "פולימרקט תומך במגוון שיטות תשלום כולל כרטיסי אשראי, העברות בנקאיות ומטבעות קריפטוגרפיים.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />

      {/* What is Polymarket Section */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-6 text-center">
            מה זה פולימרקט?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              <strong className="text-[var(--secondary)]">פולימרקט (Polymarket)</strong> היא פלטפורמת שוקי ניבויים מבוססת בלוקצ׳יין המאפשרת לכם לסחור על תוצאות של אירועים אמיתיים בעולם.
            </p>
            <p>
              בניגוד להימורים מסורתיים, שוקי ניבויים משקפים את &quot;חוכמת ההמונים&quot; - המחיר של כל תוצאה אפשרית מייצג את ההסתברות שהקהילה מעריכה. זה הופך את פולימרקט לא רק לפלטפורמת מסחר, אלא גם למקור מידע אמין על הסתברויות של אירועים עתידיים.
            </p>
            <p>
              הפלטפורמה מפעילה מאות שווקים פעילים בתחומים מגוונים: בחירות נשיאותיות, משחקי ספורט, החלטות של בנקים מרכזיים, השקות טכנולוגיות ועוד. עם נפח מסחר של מיליארדי דולרים, פולימרקט היא שוק הניבויים הגדול והמשפיע ביותר בעולם.
            </p>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Features />
      <FAQ />
      <CTA />
    </>
  );
}
