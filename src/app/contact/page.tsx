import { Metadata } from "next";

export const metadata: Metadata = {
  title: "צור קשר | פולימרקט ישראל",
  description: "צרו קשר עם צוות פולימרקט ישראל - נשמח לענות על שאלות ולקבל משוב.",
};

export default function ContactPage() {
  return (
    <section className="py-20 bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-8 text-center">
          צור קשר
        </h1>

        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 text-lg text-center mb-12">
            יש לכם שאלות? רוצים לשתף משוב? נשמח לשמוע מכם!
          </p>

          <div className="bg-[var(--background)] rounded-2xl p-8 space-y-8">
            {/* Email Contact */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-[var(--secondary)] mb-2">אימייל</h2>
              <a
                href="mailto:contact@polymarket.co.il"
                className="text-[var(--primary)] hover:underline text-lg"
              >
                contact@polymarket.co.il
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Response Time */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-[var(--secondary)] mb-2">זמן תגובה</h2>
              <p className="text-gray-600">
                אנו משתדלים להשיב לכל הפניות תוך 24-48 שעות עסקיות
              </p>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-12 space-y-4">
            <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>שימו לב:</strong> אנו אתר מידע עצמאי ולא קשורים ישירות לפולימרקט. לתמיכה טכנית בנוגע לחשבון פולימרקט שלכם, אנא פנו ישירות לצוות התמיכה של פולימרקט באתר הרשמי.
              </p>
            </div>

            <div className="bg-blue-50 border-r-4 border-[var(--primary)] p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>לתשומת לבכם:</strong> איננו מספקים ייעוץ פיננסי או המלצות מסחר. לשאלות בנושאי השקעות, פנו ליועץ פיננסי מורשה.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
