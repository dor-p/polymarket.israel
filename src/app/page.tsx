import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />

      {/* What is Polymarket Section */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-6 text-center">
            מה זה פולימרקט?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              <strong className="text-[var(--secondary)]">פולימרקט (Polymarket)</strong> היא פלטפורמת שוקי ניבויים מבוססת בלוקצ׳יין המאפשרת לכם לסחור על תוצאות של אירועים אמיתיים בעולם.
            </p>
            <p>
              בניגוד להימורים מסורתיים, שוקי ניבויים משקפים את &quot;חוכמת ההמונים&quot; - המחיר של כל תוצאה אפשרית מייצג את ההסתברות שהקהילה מעריכה. זה הופך את פולימרקט לא רק לפלטפורמת מסחר, אלא גם למקור מידע אמין על הסתברויות של אירועים עתידיים.
            </p>
            <p>
              הפלטפורמה מפעילה מאות שווקים פעילים בתחומים מגוונים: בחירות נשיאותיות, משחקי ספורט, החלטות של בנקים מרכזיים, השקות טכנולוגיות ועוד. עם נפח מסחר של מיליארדי דולרים, פולימרקט היא שוק הניבויים הגדול והמשפיע ביותר בעולם.
            </p>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Features />
      <FAQ />
      <CTA />
    </>
  );
}
