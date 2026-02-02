const steps = [
  {
    number: "01",
    title: "בחרו שוק",
    description: "גלשו בין מאות שווקים פעילים ובחרו אירוע שמעניין אתכם - בחירות, ספורט, כלכלה ועוד.",
  },
  {
    number: "02",
    title: "קנו מניות",
    description: 'רכשו מניות "כן" או "לא" לפי התחזית שלכם. המחיר משקף את ההסתברות שהקהילה מעריכה.',
  },
  {
    number: "03",
    title: "הרוויחו",
    description: "אם ניחשתם נכון, המניות שלכם שוות $1 כל אחת. אם לא - הן שוות $0. פשוט ככה.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-4">
            איך זה עובד?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            שלושה צעדים פשוטים להתחיל לסחור בפולימרקט
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-blue-50 absolute -top-4 -right-2">
                {step.number}
              </div>
              <div className="relative bg-[var(--background)] p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-[var(--secondary)] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -left-4 w-8 h-0.5 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
