import Link from "next/link";

const AFFILIATE_LINK = "https://polymarket.com?via=israel";

export default function Footer() {
  return (
    <footer className="bg-[var(--secondary)] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">פולימרקט ישראל</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              אתר מידע בלבד על פולימרקט - פלטפורמת שוק הניבויים המובילה בעולם.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">קישורים</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  בית
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  צור קשר
                </Link>
              </li>
              <li>
                <a
                  href={AFFILIATE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  בקר בפולימרקט
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">משפטי</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  מדיניות פרטיות
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  תנאי שימוש
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-xs leading-relaxed mb-4">
            <strong>גילוי נאות:</strong> אתר זה מכיל קישורי שותפים לפולימרקט. אנו עשויים לקבל עמלה אם תירשמו דרך הקישורים שלנו, ללא עלות נוספת עבורכם.
          </p>
          <p className="text-gray-400 text-xs leading-relaxed">
            <strong>כתב ויתור:</strong> המסחר בשווקי ניבויים כרוך בסיכון. אתר זה מספק מידע בלבד ואינו מהווה ייעוץ פיננסי. אנא סחרו באחריות.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} פולימרקט ישראל. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
