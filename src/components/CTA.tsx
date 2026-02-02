const AFFILIATE_LINK = "https://polymarket.com?via=israel";

export default function CTA() {
  return (
    <section className="py-20 bg-[var(--primary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          מוכנים להתחיל?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          הצטרפו למיליוני סוחרים בפלטפורמת שוקי הניבויים הגדולה בעולם והפכו את הידע שלכם לרווח.
        </p>
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[var(--primary)] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
        >
          פתח חשבון בחינם
        </a>
        <p className="text-blue-200 text-sm mt-4">
          ללא עלות הרשמה • התחל לסחור תוך דקות
        </p>
      </div>
    </section>
  );
}
