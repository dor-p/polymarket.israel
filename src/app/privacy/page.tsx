import { Metadata } from "next";

export const metadata: Metadata = {
  title: "מדיניות פרטיות",
  description: "מדיניות הפרטיות של אתר פולימרקט ישראל - מידע על איסוף ושימוש במידע אישי, עוגיות וזכויות המשתמש.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "מדיניות פרטיות | פולימרקט ישראל",
    description: "מדיניות הפרטיות של אתר פולימרקט ישראל - מידע על איסוף ושימוש במידע אישי.",
    url: "/privacy",
    images: ["/og-image.svg"],
  },
};

export default function PrivacyPage() {
  return (
    <section className="py-20 bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-8 text-center">
          מדיניות פרטיות
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
          <p className="text-sm text-gray-500">עדכון אחרון: פברואר 2025</p>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">מבוא</h2>
          <p>
            אתר פולימרקט ישראל (&quot;האתר&quot;) מחויב להגנה על פרטיות המבקרים. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע שלכם.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">איסוף מידע</h2>
          <p>האתר עשוי לאסוף את סוגי המידע הבאים:</p>
          <ul className="list-disc pr-6 space-y-2">
            <li><strong>מידע אנונימי:</strong> נתוני גלישה כלליים כגון כתובות IP, סוג דפדפן, זמני ביקור ודפים שנצפו</li>
            <li><strong>עוגיות (Cookies):</strong> קבצים קטנים המאוחסנים במכשיר שלכם לשיפור חוויית הגלישה</li>
            <li><strong>מידע שנמסר מרצון:</strong> פרטי קשר שתבחרו לשתף דרך טופס יצירת קשר</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">שימוש במידע</h2>
          <p>המידע שנאסף משמש למטרות הבאות:</p>
          <ul className="list-disc pr-6 space-y-2">
            <li>שיפור תוכן האתר וחוויית המשתמש</li>
            <li>ניתוח תנועה ודפוסי שימוש באתר</li>
            <li>מענה לפניות ושאלות</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">עוגיות (Cookies)</h2>
          <p>
            האתר משתמש בעוגיות לצורך תפעול תקין, ניתוח תנועה ושיפור חוויית המשתמש. ניתן לשלוט בהגדרות העוגיות דרך הגדרות הדפדפן שלכם.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">קישורי שותפים</h2>
          <p>
            אתר זה מכיל קישורים לאתר פולימרקט (polymarket.com) הכוללים מזהה שותף. כאשר תלחצו על קישורים אלו ותירשמו לפולימרקט, אנו עשויים לקבל עמלה. זה לא משפיע על העלות עבורכם.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">שיתוף מידע עם צדדים שלישיים</h2>
          <p>
            איננו מוכרים, משכירים או משתפים מידע אישי עם צדדים שלישיים, למעט:
          </p>
          <ul className="list-disc pr-6 space-y-2">
            <li>שירותי ניתוח אתרים (כגון Google Analytics)</li>
            <li>כנדרש על פי חוק</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">אבטחת מידע</h2>
          <p>
            אנו נוקטים באמצעי אבטחה סבירים להגנה על המידע באתר. עם זאת, אף שיטת העברה או אחסון באינטרנט אינה מאובטחת ב-100%.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">זכויות המשתמש</h2>
          <p>
            יש לכם זכות לבקש גישה, תיקון או מחיקה של מידע אישי שנאסף עליכם. ליצירת קשר בנושאי פרטיות, אנא פנו אלינו דרך עמוד יצירת הקשר.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">שינויים במדיניות</h2>
          <p>
            אנו שומרים את הזכות לעדכן מדיניות זו מעת לעת. שינויים יפורסמו בדף זה עם תאריך העדכון המתאים.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">יצירת קשר</h2>
          <p>
            לשאלות בנוגע למדיניות הפרטיות, ניתן ליצור קשר דרך עמוד יצירת הקשר באתר.
          </p>
        </div>
      </div>
    </section>
  );
}
