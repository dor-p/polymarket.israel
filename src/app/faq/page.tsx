"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "מה זה שוק ניבויים?",
    answer: "שוק ניבויים הוא פלטפורמה שבה אנשים יכולים לסחור על תוצאות של אירועים עתידיים. המחירים משקפים את ההסתברות הקולקטיבית שהקהילה מעריכה לכל תוצאה אפשרית. למשל, אם מניית \"כן\" על שאלה מסוימת נסחרת ב-70 סנט, זה אומר שהשוק מעריך סיכוי של 70% שהתוצאה תתרחש.",
  },
  {
    question: "מה זה פולימרקט (Polymarket)?",
    answer: "פולימרקט היא פלטפורמת שוקי ניבויים מבוזרת שנוסדה ב-2020. היא מאפשרת למשתמשים לסחור על תוצאות של אירועים בעולם האמיתי - מבחירות נשיאותיות ועד משחקי ספורט. הפלטפורמה בנויה על טכנולוגיית בלוקצ׳יין ומתפעלת נפח מסחר של מיליארדי דולרים.",
  },
  {
    question: "איך אפשר להרוויח בפולימרקט?",
    answer: "אתם קונים מניות על תוצאה מסוימת במחיר הנוכחי. אם התוצאה מתרחשת, כל מניה שווה $1. אם לא - היא שווה $0. ההבדל בין מחיר הקנייה למחיר הסופי הוא הרווח או ההפסד שלכם. לדוגמה: אם קניתם מניית \"כן\" ב-40 סנט והתוצאה התרחשה, הרווחתם 60 סנט למניה.",
  },
  {
    question: "האם פולימרקט בטוח?",
    answer: "פולימרקט בנוי על טכנולוגיית בלוקצ׳יין (רשת Polygon) המבטיחה שקיפות מלאה. כל העסקאות מתועדות באופן ציבורי ולא ניתן לשנות אותן. הפלטפורמה משתמשת בחוזים חכמים לניהול הכספים, מה שמפחית את הסיכון של צד שלישי.",
  },
  {
    question: "איזה סוגי שווקים קיימים בפולימרקט?",
    answer: "בפולימרקט תמצאו שווקים על מגוון נושאים: בחירות ופוליטיקה (בחירות לנשיאות, מדיניות), ספורט (תוצאות משחקים, אליפויות), כלכלה ופיננסים (החלטות ריבית, נתונים כלכליים), טכנולוגיה (השקות מוצרים, מיזוגים), בידור (פרסים, תוצאות תוכניות) ועוד.",
  },
  {
    question: "מה המינימום להתחיל לסחור?",
    answer: "אין מינימום קבוע בפולימרקט. אתם יכולים להתחיל עם כל סכום שתרצו ולקנות חלקי מניות. זה מאפשר לכל אחד להשתתף, גם עם סכומים קטנים.",
  },
  {
    question: "איך מפקידים כסף לפולימרקט?",
    answer: "פולימרקט תומך במגוון שיטות תשלום: כרטיסי אשראי (ויזה, מאסטרקארד), העברות בנקאיות, ומטבעות קריפטוגרפיים (USDC על רשת Polygon). הפקדות בקריפטו הן המהירות ביותר וללא עמלות.",
  },
  {
    question: "איך מושכים רווחים מפולימרקט?",
    answer: "ניתן למשוך רווחים בכל עת לארנק קריפטו או להמיר לכסף רגיל דרך שירותי החלפה. המשיכה לארנק קריפטו היא מיידית, בעוד משיכה לחשבון בנק יכולה לקחת מספר ימי עסקים.",
  },
  {
    question: "האם פולימרקט חוקי בישראל?",
    answer: "פולימרקט פועל כפלטפורמה בינלאומית מבוזרת. הרגולציה על שוקי ניבויים משתנה בין מדינות. מומלץ להתייעץ עם יועץ משפטי לגבי המצב הספציפי במדינת מגוריכם.",
  },
  {
    question: "מה ההבדל בין פולימרקט להימורים?",
    answer: "בעוד שניהם כרוכים בחיזוי תוצאות, שוקי ניבויים שונים מהימורים בכמה היבטים: המחירים נקבעים על ידי היצע וביקוש ולא על ידי ספר הימורים, ניתן למכור עמדות בכל עת לפני סיום האירוע, והמערכת מבוססת על \"חוכמת ההמונים\" - מנגנון שמייצר תחזיות מדויקות יותר.",
  },
  {
    question: "איך פולימרקט קובע את התוצאה הסופית?",
    answer: "פולימרקט משתמש במנגנון אורקל (Oracle) - מערכת מבוזרת שמאמתת את התוצאות על בסיס מקורות מידע אמינים ומוסכמים מראש. כללי ההכרעה מוגדרים בבירור עבור כל שוק לפני תחילת המסחר.",
  },
  {
    question: "האם אפשר להפסיד יותר ממה שהשקעתי?",
    answer: "לא. בפולימרקט ההפסד המקסימלי מוגבל לסכום שהשקעתם. אם קניתם מניות ב-50$ והתוצאה לא התרחשה, ההפסד המקסימלי הוא 50$. אין מנוף ואין חוב.",
  },
  {
    question: "מה זה USDC ואיך משתמשים בו?",
    answer: "USDC (USD Coin) הוא מטבע יציב (stablecoin) שערכו צמוד לדולר אמריקאי ביחס של 1:1. בפולימרקט, כל המסחר מתבצע ב-USDC על רשת Polygon. ניתן לרכוש USDC בבורסות קריפטו או ישירות בפולימרקט באמצעות כרטיס אשראי.",
  },
  {
    question: "כמה זמן לוקח עד שהשוק נסגר?",
    answer: "כל שוק בפולימרקט מוגדר עם תאריך סיום ותנאי הכרעה מראש. חלק מהשווקים נסגרים תוך ימים (משחקי ספורט), בעוד אחרים יכולים להישאר פתוחים חודשים ואף שנים (בחירות עתידיות). ניתן למכור את העמדות שלכם בכל עת לפני סגירת השוק.",
  },
  {
    question: "יש אפליקציה לנייד?",
    answer: "פולימרקט פועל כאתר מותאם לנייד (Progressive Web App) ואפשר להוסיף אותו למסך הבית. בנוסף, קיימת אפליקציית iOS רשמית. האתר עובד מצוין גם בדפדפן הנייד.",
  },
];

// FAQPage structured data
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-4">
              שאלות נפוצות על פולימרקט
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              תשובות מקיפות לכל השאלות הנפוצות על פולימרקט ושוקי ניבויים
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[var(--background)] rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-right flex justify-between items-center hover:bg-gray-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium text-[var(--secondary)] text-lg">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 mr-4 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-[var(--background)] rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4">
              מוכנים להתחיל?
            </h2>
            <p className="text-gray-600 mb-6">
              הצטרפו למיליוני סוחרים בפלטפורמת שוקי הניבויים הגדולה בעולם
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://polymarket.com?via=israel"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--primary)] text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all"
              >
                התחל לסחור עכשיו
              </a>
              <Link
                href="/guide"
                className="border border-[var(--primary)] text-[var(--primary)] px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all"
              >
                מדריך למתחילים
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
