"use client";

import { useState } from "react";

const faqs = [
  {
    question: "מה זה שוק ניבויים?",
    answer: "שוק ניבויים הוא פלטפורמה שבה אנשים יכולים לסחור על תוצאות של אירועים עתידיים. המחירים משקפים את ההסתברות הקולקטיבית שהקהילה מעריכה לכל תוצאה אפשרית.",
  },
  {
    question: "איך אפשר להרוויח בפולימרקט?",
    answer: "אתם קונים מניות על תוצאה מסוימת. אם התוצאה מתרחשת, כל מניה שווה $1. אם לא - היא שווה $0. ההבדל בין מחיר הקנייה למחיר הסופי הוא הרווח או ההפסד שלכם.",
  },
  {
    question: "האם פולימרקט בטוח?",
    answer: "פולימרקט בנוי על טכנולוגיית בלוקצ׳יין (Polygon) המבטיחה שקיפות מלאה. כל העסקאות מתועדות באופן ציבורי ולא ניתן לשנות אותן.",
  },
  {
    question: "איזה סוגי שווקים קיימים?",
    answer: "בפולימרקט תמצאו שווקים על מגוון נושאים: בחירות ופוליטיקה, ספורט, כלכלה ופיננסים, טכנולוגיה, בידור ועוד.",
  },
  {
    question: "מה המינימום להתחיל לסחור?",
    answer: "אין מינימום קבוע. אתם יכולים להתחיל עם כל סכום שתרצו ולקנות חלקי מניות.",
  },
  {
    question: "איך מפקידים ומושכים כסף?",
    answer: "פולימרקט תומך במגוון שיטות תשלום כולל כרטיסי אשראי, העברות בנקאיות ומטבעות קריפטוגרפיים.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-4">
            שאלות נפוצות
          </h2>
          <p className="text-gray-600">
            תשובות לשאלות הכי נפוצות על פולימרקט
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[var(--surface)] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-right flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-[var(--secondary)]">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${
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
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
