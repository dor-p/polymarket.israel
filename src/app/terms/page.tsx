import { Metadata } from "next";

export const metadata: Metadata = {
  title: "תנאי שימוש | פולימרקט ישראל",
  description: "תנאי השימוש באתר פולימרקט ישראל - כללים, הגבלות אחריות והצהרות משפטיות.",
};

export default function TermsPage() {
  return (
    <section className="py-20 bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-8 text-center">
          תנאי שימוש
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
          <p className="text-sm text-gray-500">עדכון אחרון: פברואר 2025</p>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">הסכמה לתנאים</h2>
          <p>
            השימוש באתר פולימרקט ישראל (&quot;האתר&quot;) מהווה הסכמה לתנאי השימוש המפורטים להלן. אם אינכם מסכימים לתנאים אלו, אנא הימנעו משימוש באתר.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">אופי האתר</h2>
          <p>
            אתר זה הוא <strong>אתר מידע בלבד</strong>. אנו:
          </p>
          <ul className="list-disc pr-6 space-y-2">
            <li>לא מפעילים פלטפורמת מסחר</li>
            <li>לא מספקים שירותים פיננסיים</li>
            <li>לא קשורים ישירות לחברת פולימרקט</li>
            <li>מספקים מידע חינוכי בלבד על שוקי ניבויים</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">כתב ויתור - אין ייעוץ פיננסי</h2>
          <div className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg">
            <p className="font-semibold text-[var(--secondary)] mb-2">חשוב לקרוא:</p>
            <p>
              המידע באתר זה אינו מהווה ייעוץ פיננסי, ייעוץ השקעות או המלצה לסחור. כל החלטת השקעה או מסחר היא באחריותכם הבלעדית. מסחר בשוקי ניבויים כרוך בסיכון של איבוד הכסף שהושקע.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">קישורי שותפים</h2>
          <p>
            האתר מכיל קישורים לאתר פולימרקט עם מזהה שותף (affiliate). משמעות הדבר:
          </p>
          <ul className="list-disc pr-6 space-y-2">
            <li>אם תירשמו לפולימרקט דרך הקישורים באתר, אנו עשויים לקבל עמלה</li>
            <li>עמלה זו אינה משפיעה על העלות עבורכם</li>
            <li>קיום יחסי השותפות לא משפיע על המידע שאנו מפרסמים</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">הגבלת אחריות</h2>
          <p>
            האתר ותכניו מסופקים &quot;כמות שהם&quot; (AS IS). אנו לא מבטיחים:
          </p>
          <ul className="list-disc pr-6 space-y-2">
            <li>שהמידע באתר מדויק, שלם או עדכני</li>
            <li>שהאתר יהיה זמין ללא הפרעות</li>
            <li>תוצאות כלשהן מהשימוש במידע באתר</li>
          </ul>
          <p>
            בשום מקרה לא נהיה אחראים לכל נזק ישיר, עקיף, מקרי או תוצאתי הנובע מהשימוש באתר או מהמידע המופיע בו.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">קישורים חיצוניים</h2>
          <p>
            האתר מכיל קישורים לאתרים חיצוניים, כולל polymarket.com. איננו אחראים לתוכן, מדיניות הפרטיות או נהלי האבטחה של אתרים אלו.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">קניין רוחני</h2>
          <p>
            כל התוכן באתר, כולל טקסטים ועיצוב, מוגן בזכויות יוצרים. אין להעתיק, לשכפל או להפיץ תוכן מהאתר ללא אישור מראש ובכתב.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">שינויים בתנאים</h2>
          <p>
            אנו שומרים את הזכות לשנות תנאים אלו בכל עת. המשך השימוש באתר לאחר שינוי התנאים מהווה הסכמה לתנאים המעודכנים.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">דין וסמכות שיפוט</h2>
          <p>
            תנאי שימוש אלו כפופים לדיני מדינת ישראל. כל סכסוך הנובע משימוש באתר יידון בבתי המשפט המוסמכים בישראל.
          </p>

          <h2 className="text-2xl font-semibold text-[var(--secondary)] mt-8">יצירת קשר</h2>
          <p>
            לשאלות בנוגע לתנאי השימוש, ניתן ליצור קשר דרך עמוד יצירת הקשר באתר.
          </p>
        </div>
      </div>
    </section>
  );
}
