import { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "אודות פולימרקט",
  description: "למדו על פולימרקט - הפלטפורמה המובילה בעולם לשוקי ניבויים מבוססי בלוקצ׳יין. מידע על הטכנולוגיה, איך זה עובד ולמה שוקי ניבויים מדויקים יותר.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "אודות פולימרקט | פולימרקט ישראל",
    description: "למדו על פולימרקט - הפלטפורמה המובילה בעולם לשוקי ניבויים מבוססי בלוקצ׳יין.",
    url: "/about",
    images: ["/og-image.svg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-8 text-center">
            אודות פולימרקט
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
            <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">מה זה פולימרקט?</h2>
            <p>
              פולימרקט (Polymarket) היא פלטפורמת שוקי ניבויים מבוזרת שנוסדה ב-2020. הפלטפורמה מאפשרת למשתמשים לסחור על תוצאות של אירועים בעולם האמיתי, מבחירות נשיאותיות ועד משחקי ספורט.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">איך זה עובד?</h2>
            <p>
              בפולימרקט, משתמשים קונים ומוכרים &quot;מניות&quot; על תוצאות אפשריות של אירועים. אם האירוע מתרחש, כל מניה שווה $1. אם לא - היא שווה $0. המחירים נקבעים על ידי היצע וביקוש, ומשקפים את ההסתברות שהקהילה מעריכה לכל תוצאה.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">טכנולוגיה</h2>
            <p>
              הפלטפורמה בנויה על רשת Polygon, פתרון שכבה שנייה של Ethereum המאפשר עסקאות מהירות ובעלות נמוכה. כל העסקאות שקופות ומתועדות על הבלוקצ׳יין.
            </p>

            <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">למה שוקי ניבויים?</h2>
            <p>
              מחקרים מראים ששוקי ניבויים נוטים לספק תחזיות מדויקות יותר מסקרים מסורתיים או מומחים בודדים. &quot;חוכמת ההמונים&quot; - כאשר אנשים משקיעים כסף אמיתי בתחזיות שלהם - מובילה להערכות מאוזנות ומדויקות יותר.
            </p>

            <div className="bg-blue-50 border-r-4 border-[var(--primary)] p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-[var(--secondary)] mb-2">גילוי נאות</h3>
              <p className="text-sm text-gray-600">
                אתר זה הוא אתר מידע בלבד ואינו מפעיל או קשור ישירות לפולימרקט. אנו מספקים מידע חינוכי על הפלטפורמה ומכילים קישורי שותפים. המסחר בשוקי ניבויים כרוך בסיכון - אנא סחרו באחריות.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
