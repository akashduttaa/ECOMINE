'use client';

import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-[family-name:var(--font-geist-sans)] selection:bg-emerald-500/30">
      {/* Back Button */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 p-3 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/50 hover:border-emerald-400 rounded-lg transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 group"
        title="Back to Dashboard"
      >
        <svg className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 group-hover:-translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </Link>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-xl text-neutral-400">
            Understand how EcoMine uses cookies to enhance your experience.
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">1. What Are Cookies?</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                Cookies are small text files that are stored on your device (computer, smartphone, or tablet) when you visit a website. They allow the website to remember information about your visit and improve your experience.
              </p>
              <p className="text-neutral-300">
                There are two types of cookies: session cookies (deleted when you close your browser) and persistent cookies (stored on your device for a set period).
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">2. Types of Cookies We Use</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <h3 className="text-xl font-semibold text-white">Essential Cookies</h3>
              <p className="text-neutral-300">
                These cookies are necessary for the basic functionality of EcoMine, including authentication, security, and session management. Without these cookies, certain features may not work properly.
              </p>

              <h3 className="text-xl font-semibold text-white">Performance Cookies</h3>
              <p className="text-neutral-300">
                We use performance cookies to analyze how users interact with EcoMine. This information helps us understand user behavior and improve our platform's performance and usability.
              </p>

              <h3 className="text-xl font-semibold text-white">Functional Cookies</h3>
              <p className="text-neutral-300">
                Functional cookies remember your preferences and settings, such as language selection, theme preference, and wallet connection status, to provide a personalized experience.
              </p>

              <h3 className="text-xl font-semibold text-white">Targeting/Advertising Cookies</h3>
              <p className="text-neutral-300">
                If we partner with advertising networks, we may use targeting cookies to display relevant advertisements. These cookies track your browsing behavior across websites.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">3. Third-Party Cookies</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                EcoMine may use third-party services such as:
              </p>
              <ul className="text-neutral-300 space-y-2">
                <li>• Analytics providers (e.g., Google Analytics) to understand site usage</li>
                <li>• Payment processors for transaction handling</li>
                <li>• Social media platforms for integration features</li>
                <li>• Blockchain explorers for transaction verification</li>
              </ul>
              <p className="text-neutral-300 mt-4">
                These third parties set their own cookies, and we are not responsible for their cookie practices. Please review their privacy policies independently.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">4. How to Control Cookies</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                Most web browsers allow you to control cookies through their settings. You can choose to:
              </p>
              <ul className="text-neutral-300 space-y-2">
                <li>• Accept all cookies</li>
                <li>• Accept only essential cookies</li>
                <li>• Decline non-essential cookies</li>
                <li>• Delete existing cookies</li>
                <li>• Receive a warning before a cookie is set</li>
              </ul>
              <p className="text-neutral-300 mt-4">
                Please note that disabling cookies may affect the functionality of EcoMine. To disable cookies, visit your browser's settings and locate the cookie management options.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">5. Your Privacy Rights</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                In regions with strict privacy regulations (such as GDPR in Europe), you have the right to:
              </p>
              <ul className="text-neutral-300 space-y-2">
                <li>• Give or withdraw consent for cookie usage</li>
                <li>• Request information about collected data</li>
                <li>• Request deletion of your data</li>
                <li>• Opt-out of marketing communications</li>
              </ul>
              <p className="text-neutral-300 mt-4">
                We respect your privacy preferences and will honor your cookie choices.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">6. Local Storage and Similar Technologies</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                Beyond cookies, EcoMine may use similar technologies such as:
              </p>
              <ul className="text-neutral-300 space-y-2">
                <li>• Local Storage: Stores data locally on your device for offline functionality</li>
                <li>• Session Storage: Stores temporary session information</li>
                <li>• Web Beacons: Small images used for analytics</li>
                <li>• Pixel Tags: Used for tracking and analytics</li>
              </ul>
              <p className="text-neutral-300 mt-4">
                These technologies work similarly to cookies and are subject to the same control options.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">7. Cookie Retention</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                Session cookies are automatically deleted when you close your browser. Persistent cookies are retained for specific periods depending on their purpose:
              </p>
              <ul className="text-neutral-300 space-y-2">
                <li>• Authentication cookies: Until you log out</li>
                <li>• Preference cookies: Up to 1 year</li>
                <li>• Analytics cookies: Up to 2 years</li>
                <li>• Marketing cookies: Up to 1 year</li>
              </ul>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">8. Do Not Track (DNT)</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                Some browsers include a "Do Not Track" feature. EcoMine respects this preference and will minimize tracking for users who enable DNT. However, some features may be limited if tracking is disabled entirely.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">9. Updates to Cookie Policy</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                EcoMine may update this Cookie Policy from time to time to reflect changes in our practices or technology. We will notify you of significant changes through our website or email.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">10. Contact Us</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                If you have questions about our Cookie Policy or cookie management, please contact us at:
              </p>
              <p className="text-emerald-400 font-semibold">
                cookies@ecomine.io
              </p>
              <p className="text-neutral-400 text-sm">
                Last updated: April 2026
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
