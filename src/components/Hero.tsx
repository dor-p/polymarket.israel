import Image from "next/image";

const AFFILIATE_LINK = "https://polymarket.com?via=israel";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[var(--surface)] to-[var(--background)] py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface)]/80 to-[var(--background)]" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--secondary)] mb-6 leading-tight">
          פולימרקט
          <span className="block text-[var(--primary)]">שוק הניבויים המוביל בעולם</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          סחרו על תוצאות אירועים אמיתיים - מפוליטיקה ועד ספורט.
          גלו את הדרך החכמה להפוך את הידע שלכם לרווח.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--primary)] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            התחל לסחור עכשיו
          </a>
          <a
            href="#how-it-works"
            className="text-[var(--primary)] font-medium hover:underline"
          >
            איך זה עובד? ←
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>מבוזר ושקוף</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>מיליארדי דולרים בנפח מסחר</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>קהילה עולמית</span>
          </div>
        </div>
      </div>
    </section>
  );
}
