'use client';

import Link from 'next/link';

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-xl text-neutral-400">
            Please read these terms carefully before using EcoMine.
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">1. Agreement to Terms</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                By accessing and using EcoMine, you agree to be bound by these Terms of Service. If you do not agree to abide by the above, please do not use this service. EcoMine reserves the right to update and change the Terms of Service at any time without notice.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">2. Use of Service</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                You agree to use EcoMine only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the platform. Prohibited behavior includes:
              </p>
              <ul className="text-neutral-300 space-y-2">
                <li>• Harassing or causing distress or inconvenience to any person</li>
                <li>• Transmitting obscene or offensive content</li>
                <li>• Disrupting the normal flow of dialogue within our website</li>
                <li>• Attempting to gain unauthorized access to systems</li>
                <li>• Engaging in any form of fraud or deception</li>
                <li>• Attempting to manipulate rewards or scan results</li>
              </ul>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">3. User Accounts</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                When you create an account, you are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any other breaches of security.
              </p>
              <p className="text-neutral-300">
                EcoMine will not be liable for any loss or damage arising from your failure to protect your account information.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">4. Intellectual Property Rights</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                All content included on EcoMine, such as text, graphics, logos, images, and software, is the property of EcoMine or its content suppliers and is protected by international copyright laws.
              </p>
              <p className="text-neutral-300">
                You may not reproduce, distribute, or transmit any content without permission. Use of the content for any purpose other than personal, non-commercial use is prohibited.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">5. Rewards and ECO Tokens</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                ECO tokens are rewards issued by EcoMine based on verified e-waste recycling activities. These tokens:
              </p>
              <ul className="text-neutral-300 space-y-2">
                <li>• Are not guaranteed and depend on verification at drop zones</li>
                <li>• May be subject to taxation in your jurisdiction</li>
                <li>• Can be traded or transferred at your own risk</li>
                <li>• May fluctuate in value</li>
                <li>• Are subject to EcoMine's terms and conditions</li>
              </ul>
              <p className="text-neutral-300 mt-4">
                EcoMine is not responsible for any financial losses related to ECO token trading or value fluctuations.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">6. Limitation of Liability</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                EcoMine is provided on an "as is" basis without warranties of any kind, express or implied. EcoMine does not warrant that the service will be uninterrupted or error-free.
              </p>
              <p className="text-neutral-300">
                To the fullest extent permitted by law, EcoMine is not liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">7. Blockchain and Smart Contracts</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                EcoMine operates on blockchain networks. You understand and accept that:
              </p>
              <ul className="text-neutral-300 space-y-2">
                <li>• Blockchain transactions are irreversible</li>
                <li>• You are responsible for understanding smart contracts</li>
                <li>• Network fees and gas costs may apply</li>
                <li>• Smart contracts may have vulnerabilities</li>
              </ul>
              <p className="text-neutral-300 mt-4">
                EcoMine is not liable for losses due to smart contract failures or blockchain network issues.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">8. Termination</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                EcoMine reserves the right to terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason including if you violate these Terms of Service.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">9. Governing Law</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction in which EcoMine operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">10. Contact Information</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-neutral-300">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-emerald-400 font-semibold">
                terms@ecomine.io
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
