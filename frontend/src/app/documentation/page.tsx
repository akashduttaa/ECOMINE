export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-[family-name:var(--font-geist-sans)] selection:bg-emerald-500/30">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
            Documentation
          </h1>
          <p className="text-xl text-neutral-400">
            Comprehensive guides and resources to help you get the most out of EcoMine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-neutral-900 rounded-xl p-6 border border-emerald-500/20">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">Getting Started</h2>
            <ul className="space-y-3 text-neutral-300">
              <li>• <a href="#setup" className="hover:text-emerald-400 transition-colors">Setting up your account</a></li>
              <li>• <a href="#scanner" className="hover:text-emerald-400 transition-colors">Using the AI scanner</a></li>
              <li>• <a href="#rewards" className="hover:text-emerald-400 transition-colors">Understanding rewards</a></li>
              <li>• <a href="#verification" className="hover:text-emerald-400 transition-colors">Drop zone verification</a></li>
            </ul>
          </div>

          <div className="bg-neutral-900 rounded-xl p-6 border border-emerald-500/20">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">Advanced Features</h2>
            <ul className="space-y-3 text-neutral-300">
              <li>• <a href="#api" className="hover:text-emerald-400 transition-colors">API integration</a></li>
              <li>• <a href="#smart-contracts" className="hover:text-emerald-400 transition-colors">Smart contract interaction</a></li>
              <li>• <a href="#analytics" className="hover:text-emerald-400 transition-colors">Analytics dashboard</a></li>
              <li>• <a href="#webhooks" className="hover:text-emerald-400 transition-colors">Webhook configuration</a></li>
            </ul>
          </div>

          <div className="bg-neutral-900 rounded-xl p-6 border border-emerald-500/20">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">Legal & Policies</h2>
            <ul className="space-y-3 text-neutral-300">
              <li>• <a href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li>• <a href="/terms-of-service" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li>• <a href="/cookie-policy" className="hover:text-emerald-400 transition-colors">Cookie Policy</a></li>
              <li>• <a href="#" className="hover:text-emerald-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <section id="setup" className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">Setting Up Your Account</h2>
            <div className="prose prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-4 text-white">1. Connect Your Wallet</h3>
              <p className="text-neutral-300 mb-4">
                Start by connecting your Web3 wallet (MetaMask, WalletConnect, etc.) to access EcoMine's features.
                This allows you to receive ECO tokens and interact with the blockchain.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-white">2. Complete Profile Setup</h3>
              <p className="text-neutral-300 mb-4">
                Add your location and preferences to get personalized drop zone recommendations and reward notifications.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-white">3. Verify Your Identity</h3>
              <p className="text-neutral-300 mb-4">
                For enhanced security and larger reward limits, complete KYC verification through our partner services.
              </p>
            </div>
          </section>

          <section id="scanner" className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">Using the AI Scanner</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-300 mb-6">
                Our PyTorch-powered AI scanner can identify and value e-waste materials in real-time using your device's camera.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-white">Supported Devices</h3>
              <ul className="text-neutral-300 mb-6 space-y-2">
                <li>• Smartphones and tablets</li>
                <li>• Laptops and computers</li>
                <li>• Circuit boards and electronics</li>
                <li>• Batteries and power supplies</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-white">Scanning Process</h3>
              <ol className="text-neutral-300 mb-6 space-y-2">
                <li>1. Grant camera permissions</li>
                <li>2. Position device in frame</li>
                <li>3. Wait for AI analysis (2-5 seconds)</li>
                <li>4. Review material breakdown and estimated value</li>
                <li>5. Proceed to nearest drop zone for verification</li>
              </ol>
            </div>
          </section>

          <section id="rewards" className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">Understanding Rewards</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-300 mb-6">
                EcoMine rewards users with ECO tokens based on the environmental impact and material value of recycled e-waste.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-white">Reward Calculation</h3>
              <p className="text-neutral-300 mb-4">
                Rewards are calculated using real-time spot prices for precious metals (Gold, Copper, Lithium) plus environmental impact bonuses.
              </p>

              <div className="bg-black/50 p-4 rounded-lg mb-6">
                <code className="text-emerald-300">
                  reward = (material_value × spot_price) + environmental_bonus
                </code>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-white">Token Utility</h3>
              <ul className="text-neutral-300 space-y-2">
                <li>• Trade on decentralized exchanges</li>
                <li>• Stake for governance rights</li>
                <li>• Access premium features</li>
                <li>• Participate in community initiatives</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}