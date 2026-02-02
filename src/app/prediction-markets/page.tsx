import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "מה זה שוק ניבויים? - מדריך מקיף",
  description: "למדו מה זה שוק ניבויים, איך הוא עובד, למה הוא מדויק יותר מסקרים, וההיסטוריה של שוקי ניבויים. מדריך מקיף בעברית.",
  keywords: ["מה זה שוק ניבויים", "שוקי ניבויים", "prediction markets", "חוכמת ההמונים", "שוק ניבויים הסבר"],
  alternates: {
    canonical: "/prediction-markets",
  },
  openGraph: {
    title: "מה זה שוק ניבויים? - מדריך מקיף | פולימרקט ישראל",
    description: "למדו מה זה שוק ניבויים, איך הוא עובד ולמה הוא מדויק יותר מסקרים",
    url: "/prediction-markets",
    images: ["/og-image.svg"],
  },
};

// Article structured data
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "מה זה שוק ניבויים? - מדריך מקיף",
  description: "למדו מה זה שוק ניבויים, איך הוא עובד, למה הוא מדויק יותר מסקרים, וההיסטוריה של שוקי ניבויים",
  author: {
    "@type": "Organization",
    name: "פולימרקט ישראל",
  },
  publisher: {
    "@type": "Organization",
    name: "פולימרקט ישראל",
  },
  inLanguage: "he-IL",
};

export default function PredictionMarketsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="py-20 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-4">
              מה זה שוק ניבויים?
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              הכירו את הכלי שמשנה את האופן שבו העולם חוזה אירועים עתידיים
            </p>
          </header>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            {/* Definition Section */}
            <section className="bg-[var(--background)] rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4">
                הגדרה בסיסית
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong className="text-[var(--secondary)]">שוק ניבויים</strong> (Prediction Market) הוא פלטפורמה שבה אנשים יכולים לסחור על תוצאות של אירועים עתידיים. במקום לנחש או לסמוך על מומחים, המחירים בשוק משקפים את ההערכה הקולקטיבית של כל המשתתפים.
              </p>
              <p className="text-gray-600 leading-relaxed">
                לדוגמה: אם שוק שואל &quot;האם X ינצח בבחירות?&quot; והמחיר של &quot;כן&quot; עומד על 65 סנט, זה אומר שהשוק מעריך סיכוי של 65% ש-X ינצח.
              </p>
            </section>

            {/* How It Works */}
            <section className="bg-[var(--background)] rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4">
                איך זה עובד?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  בשוק ניבויים, כל תוצאה אפשרית מיוצגת על ידי &quot;מניה&quot;. המחיר של כל מניה נע בין 0 ל-1 דולר:
                </p>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>מחיר גבוה (קרוב ל-$1)</strong> = סיכוי גבוה שהתוצאה תתרחש</li>
                  <li><strong>מחיר נמוך (קרוב ל-$0)</strong> = סיכוי נמוך שהתוצאה תתרחש</li>
                </ul>
                <p>
                  כשהאירוע מסתיים, המניות הזוכות שוות $1 כל אחת, והמניות המפסידות שוות $0.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 mt-4">
                  <p className="text-sm">
                    <strong>דוגמה:</strong> קניתם מניית &quot;כן&quot; ב-40¢. אם התוצאה התרחשה, הרווחתם 60¢ (150% תשואה). אם לא התרחשה, הפסדתם את ה-40¢.
                  </p>
                </div>
              </div>
            </section>

            {/* Wisdom of Crowds */}
            <section className="bg-[var(--background)] rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4">
                חוכמת ההמונים
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                שוקי ניבויים מבוססים על עיקרון <strong className="text-[var(--secondary)]">&quot;חוכמת ההמונים&quot;</strong> (Wisdom of Crowds). מחקרים מראים שכאשר מאגדים את ההערכות של קבוצה גדולה ומגוונת של אנשים, התוצאה בדרך כלל מדויקת יותר מהערכה של מומחה בודד.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                הסיבה ששוקי ניבויים עובדים טוב במיוחד:
              </p>
              <ul className="list-disc pr-6 space-y-2 text-gray-600">
                <li><strong>תמריץ כספי:</strong> אנשים משקיעים כסף אמיתי, מה שמעודד מחקר רציני</li>
                <li><strong>מידע מפוזר:</strong> כל משתתף מביא פיסת מידע ייחודית</li>
                <li><strong>תיקון טעויות:</strong> אם מישהו חושב שהמחיר לא נכון, הוא יכול לסחור ולהרוויח</li>
                <li><strong>עדכון מתמיד:</strong> המחירים משתנים בזמן אמת עם מידע חדש</li>
              </ul>
            </section>

            {/* Accuracy */}
            <section className="bg-[var(--background)] rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4">
                למה שוקי ניבויים מדויקים יותר מסקרים?
              </h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  מחקרים אקדמיים רבים הראו ששוקי ניבויים מספקים תחזיות מדויקות יותר מסקרים מסורתיים. הנה הסיבות:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-[var(--secondary)] mb-2">בעיות בסקרים</h4>
                    <ul className="text-sm space-y-1">
                      <li>• הטיית מדגם</li>
                      <li>• אנשים לא אומרים אמת</li>
                      <li>• לא מתעדכנים בזמן אמת</li>
                      <li>• אין תמריץ לדיוק</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-[var(--secondary)] mb-2">יתרונות שוקי ניבויים</h4>
                    <ul className="text-sm space-y-1">
                      <li>• כסף אמיתי = דעות אמיתיות</li>
                      <li>• מתעדכן בזמן אמת</li>
                      <li>• משקף מידע מכל המקורות</li>
                      <li>• תמריץ חזק לדיוק</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* History */}
            <section className="bg-[var(--background)] rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4">
                היסטוריה קצרה
              </h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  שוקי ניבויים קיימים כבר מאות שנים. הנה כמה אבני דרך:
                </p>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-[var(--secondary)]">1800s:</strong> שווקי הימורים על בחירות בארה&quot;ב היו נפוצים בוול סטריט
                  </li>
                  <li>
                    <strong className="text-[var(--secondary)]">1988:</strong> האוניברסיטה של איווה מקימה את Iowa Electronic Markets לחיזוי בחירות
                  </li>
                  <li>
                    <strong className="text-[var(--secondary)]">2000s:</strong> פלטפורמות כמו Intrade צוברות פופולריות
                  </li>
                  <li>
                    <strong className="text-[var(--secondary)]">2020:</strong> פולימרקט מושקת על בלוקצ׳יין, מאפשרת מסחר מבוזר ושקוף
                  </li>
                  <li>
                    <strong className="text-[var(--secondary)]">2024:</strong> פולימרקט הופכת לשוק הניבויים הגדול בעולם עם מיליארדי דולרים בנפח מסחר
                  </li>
                </ul>
              </div>
            </section>

            {/* Use Cases */}
            <section className="bg-[var(--background)] rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4">
                שימושים נפוצים
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--secondary)] mb-2">פוליטיקה ובחירות</h4>
                  <p className="text-sm text-gray-600">חיזוי תוצאות בחירות, מדיניות ממשלתית, מינויים</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--secondary)] mb-2">כלכלה ופיננסים</h4>
                  <p className="text-sm text-gray-600">החלטות ריבית, נתוני אינפלציה, תוצאות רבעוניות</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--secondary)] mb-2">טכנולוגיה</h4>
                  <p className="text-sm text-gray-600">השקות מוצרים, מיזוגים ורכישות, אישורים רגולטוריים</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-[var(--secondary)] mb-2">ספורט ובידור</h4>
                  <p className="text-sm text-gray-600">תוצאות משחקים, פרסי אוסקר, תוכניות טלוויזיה</p>
                </div>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="bg-yellow-50 border-r-4 border-yellow-500 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-[var(--secondary)] mb-2">
                גילוי נאות
              </h3>
              <p className="text-sm text-gray-700">
                אתר זה הוא אתר מידע בלבד. המסחר בשוקי ניבויים כרוך בסיכון של הפסד כספי. אין לראות בתוכן זה ייעוץ פיננסי או המלצה לסחור. עשו מחקר עצמאי לפני כל החלטת השקעה.
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4">
              מוכנים לנסות?
            </h2>
            <p className="text-gray-600 mb-6">
              פולימרקט היא הפלטפורמה המובילה בעולם לשוקי ניבויים
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://polymarket.com?via=israel"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--primary)] text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all"
              >
                גלו את פולימרקט
              </a>
              <Link
                href="/guide"
                className="border border-[var(--primary)] text-[var(--primary)] px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all"
              >
                מדריך למתחילים
              </Link>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-16 border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-[var(--secondary)] mb-4">
              קראו עוד
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/faq" className="text-[var(--primary)] hover:underline">
                שאלות נפוצות
              </Link>
              <Link href="/guide" className="text-[var(--primary)] hover:underline">
                מדריך למתחילים
              </Link>
              <Link href="/about" className="text-[var(--primary)] hover:underline">
                אודות פולימרקט
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
