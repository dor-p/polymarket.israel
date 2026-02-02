import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-20 bg-[var(--surface)] min-h-[60vh] flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Number */}
        <div className="text-9xl font-bold text-blue-100 mb-4">404</div>

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-4">
          הדף לא נמצא
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          מצטערים, הדף שחיפשתם לא קיים או הועבר למקום אחר.
        </p>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="bg-[var(--primary)] text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all"
          >
            חזרה לדף הבית
          </Link>
          <Link
            href="/faq"
            className="border border-[var(--primary)] text-[var(--primary)] px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all"
          >
            שאלות נפוצות
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-sm mb-4">אולי תמצאו מה שחיפשתם כאן:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/guide"
              className="text-[var(--primary)] hover:underline text-sm"
            >
              מדריך למתחילים
            </Link>
            <Link
              href="/prediction-markets"
              className="text-[var(--primary)] hover:underline text-sm"
            >
              מה זה שוק ניבויים?
            </Link>
            <Link
              href="/about"
              className="text-[var(--primary)] hover:underline text-sm"
            >
              אודות פולימרקט
            </Link>
            <Link
              href="/contact"
              className="text-[var(--primary)] hover:underline text-sm"
            >
              צור קשר
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
