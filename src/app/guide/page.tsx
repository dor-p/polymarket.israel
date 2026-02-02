import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "מדריך למתחילים - איך להתחיל בפולימרקט",
  description: "מדריך מקיף בעברית להתחלת מסחר בפולימרקט. שלב אחר שלב: יצירת חשבון, הפקדת כסף, ביצוע עסקה ראשונה ומשיכת רווחים.",
  keywords: ["איך להתחיל בפולימרקט", "מדריך פולימרקט", "פולימרקט למתחילים", "איך לסחור בפולימרקט"],
  alternates: {
    canonical: "/guide",
  },
  openGraph: {
    title: "מדריך למתחילים - איך להתחיל בפולימרקט | פולימרקט ישראל",
    description: "מדריך מקיף בעברית להתחלת מסחר בפולימרקט - שלב אחר שלב",
    url: "/guide",
    images: ["/og-image.svg"],
  },
};

const steps = [
  {
    number: 1,
    title: "צרו חשבון בפולימרקט",
    description: "היכנסו לאתר פולימרקט והירשמו עם כתובת אימייל או ארנק קריפטו. תהליך ההרשמה פשוט ולוקח פחות מדקה.",
    tips: [
      "ניתן להירשם עם Google, Apple או כתובת אימייל",
      "אימות זהות (KYC) נדרש להפקדות גדולות",
      "שמרו את פרטי הגישה במקום בטוח",
    ],
  },
  {
    number: 2,
    title: "הפקידו כספים לחשבון",
    description: "בחרו את שיטת ההפקדה המועדפת עליכם. פולימרקט תומך במגוון אפשרויות תשלום.",
    tips: [
      "כרטיס אשראי - הדרך הפשוטה ביותר למתחילים",
      "העברת USDC - ללא עמלות, מהיר יותר",
      "התחילו עם סכום קטן ללמידה",
    ],
  },
  {
    number: 3,
    title: "בחרו שוק למסחר",
    description: "עיינו בשווקים הפתוחים ובחרו אירוע שמעניין אתכם ושאתם מבינים בו. קראו את כללי השוק בקפידה.",
    tips: [
      "התחילו עם שווקים פשוטים (כן/לא)",
      "קראו את תנאי ההכרעה לפני הקנייה",
      "בדקו את נפח המסחר - נפח גבוה = נזילות טובה",
    ],
  },
  {
    number: 4,
    title: "בצעו את העסקה הראשונה",
    description: "בחרו את התוצאה שלדעתכם תתרחש והזינו את הסכום שברצונכם להשקיע. בדקו את המחיר והאישורו את העסקה.",
    tips: [
      'מחיר של 60¢ = הערכת סיכוי של 60%',
      "ניתן לקנות כל כמות, גם חלקי מניות",
      'אם אתם בטוחים בתוצאה, קנו "כן". אם לא - קנו "לא"',
    ],
  },
  {
    number: 5,
    title: "עקבו אחרי העמדות שלכם",
    description: "צפו בעמדות הפתוחות שלכם ועקבו אחרי שינויי המחירים. ניתן למכור בכל עת לפני סגירת השוק.",
    tips: [
      "מחירים משתנים בהתאם למידע חדש",
      "ניתן למכור ברווח גם לפני סיום האירוע",
      "הגדירו לעצמכם גבולות רווח/הפסד",
    ],
  },
  {
    number: 6,
    title: "משכו את הרווחים",
    description: "לאחר שהשוק נסגר והתוצאה נקבעה, המניות הזוכות יומרו ל-$1. ניתן למשוך את הכספים לחשבון הבנק או לארנק קריפטו.",
    tips: [
      "משיכה לארנק קריפטו - מיידית",
      "משיכה לבנק - 3-5 ימי עסקים",
      "אין מינימום למשיכה",
    ],
  },
];

// HowTo structured data
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "איך להתחיל לסחור בפולימרקט",
  description: "מדריך מקיף להתחלת מסחר בפולימרקט - שוק הניבויים המוביל בעולם",
  totalTime: "PT15M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "10",
  },
  step: steps.map((step) => ({
    "@type": "HowToStep",
    name: step.title,
    text: step.description,
    position: step.number,
  })),
};

export default function GuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-4">
              מדריך למתחילים
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              איך להתחיל לסחור בפולימרקט - שלב אחר שלב
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-[var(--background)] rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4">
              מה תלמדו במדריך הזה?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              פולימרקט היא פלטפורמת שוקי ניבויים המאפשרת לכם לסחור על תוצאות של אירועים אמיתיים.
              במדריך זה תלמדו איך לפתוח חשבון, להפקיד כספים, לבצע עסקאות ולמשוך רווחים.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-500">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>זמן קריאה: 5 דקות</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>מתאים למתחילים</span>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="bg-[var(--background)] rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--primary)] text-white rounded-xl flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--secondary)] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-[var(--secondary)] mb-2">טיפים:</p>
                      <ul className="space-y-2">
                        {step.tips.map((tip, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <svg className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Warning Box */}
          <div className="mt-12 bg-yellow-50 border-r-4 border-yellow-500 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[var(--secondary)] mb-2">
              חשוב לדעת
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• מסחר בשוקי ניבויים כרוך בסיכון - אל תשקיעו כסף שאתם לא יכולים להרשות לעצמכם להפסיד</li>
              <li>• עשו מחקר לפני כל עסקה והבינו את כללי השוק</li>
              <li>• זה אתר מידע בלבד - אנחנו לא מספקים ייעוץ פיננסי</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://polymarket.com?via=israel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--primary)] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              פתח חשבון בפולימרקט
            </a>
            <p className="text-gray-500 text-sm mt-4">
              ההרשמה חינם • התחל לסחור תוך דקות
            </p>
          </div>

          {/* Related Links */}
          <div className="mt-16 border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-[var(--secondary)] mb-4">
              קישורים נוספים
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/faq"
                className="text-[var(--primary)] hover:underline"
              >
                שאלות נפוצות
              </Link>
              <Link
                href="/prediction-markets"
                className="text-[var(--primary)] hover:underline"
              >
                מה זה שוק ניבויים?
              </Link>
              <Link
                href="/about"
                className="text-[var(--primary)] hover:underline"
              >
                אודות פולימרקט
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
