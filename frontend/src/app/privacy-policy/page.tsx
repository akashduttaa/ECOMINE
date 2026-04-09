'use client';

import Link from 'next/link';

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-xl text-neutral-400">
            Your privacy is important to us. Learn how EcoMine collects, uses, and protects your data.
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">1. Information We Collect</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <h3 className="text-xl font-semibold text-white">Personal Information</h3>
              <p className="text-neutral-300">
                When you create an account, we collect information such as your name, email address, wallet address, and location data. This information helps us provide personalized services and drop zone recommendations.
              </p>

              <h3 className="text-xl font-semibold text-white">Device and Camera Data</h3>
              <p className="text-neutral-300">
                Our AI scanner uses your device's camera to analyze e-waste materials. Camera data is processed locally on your device and not stored on our servers unless you explicitly choose to save scan results.
              </p>

              <h3 className="text-xl font-semibold text-white">Blockchain Data</h3>
              <p className="text-neutral-300">
                Your wallet address and transaction history on the blockchain are publicly visible. We do not store your private keys or seed phrases under any circumstances.
              </p>

              <h3 className="text-xl font-semibold text-white">Usage Data</h3>
              <p className="text-neutral-300">
                We collect information about how you interact with EcoMine, including pages visited, features used, and scanning activity. This helps us improve our platform.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">2. How We Use Your Data</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <ul className="text-neutral-300 space-y-2">
                <li>• Providing and improving EcoMine services and features</li>
                <li>• Processing and validating your e-waste scans</li>
                <li>• Calculating and distributing ECO token rewards</li>
                <li>• Communicating with you about your account and services</li>
                <li>• Conducting analytics and monitoring platform security</li>
                <li>• Complying with legal obligations and regulations</li>
                <li>• Personalizing your experience based on preferences</li>
              </ul>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">3. Data Security</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular security audits. However, no system is completely secure, and we cannot guarantee absolute security.
              </p>
              <p className="text-neutral-300">
                You are responsible for maintaining the confidentiality of your wallet credentials and account information. Never share your private keys with anyone.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">4. Third-Party Services</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                EcoMine may integrate with third-party services such as wallet providers, blockchain networks, and analytics platforms. These third parties have their own privacy policies, and we are not responsible for their practices.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">5. Your Rights</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                Depending on your location, you may have rights regarding your data, including:
              </p>
              <ul className="text-neutral-300 space-y-2">
                <li>• Right to access your personal data</li>
                <li>• Right to correct inaccurate data</li>
                <li>• Right to delete your data (subject to legal obligations)</li>
                <li>• Right to opt-out of marketing communications</li>
                <li>• Right to data portability</li>
              </ul>
              <p className="text-neutral-300 mt-4">
                To exercise these rights, please contact us at privacy@ecomine.io.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">6. Changes to Privacy Policy</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through prominent notice on our website. Your continued use of EcoMine constitutes acceptance of the updated policy.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">7. Contact Us</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                If you have any questions or concerns about our Privacy Policy, please contact us at:
              </p>
              <p className="text-emerald-400 font-semibold">
                privacy@ecomine.io
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
