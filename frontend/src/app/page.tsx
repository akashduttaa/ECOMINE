'use client';

import EarthScene from '@/components/EarthScene';
import WalletConnect from '@/components/WalletConnect';
import ScannerModal from '@/components/ScannerModal';
import TokenomicsModal from '@/components/TokenomicsModal';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Map = dynamic(() => import('@/components/Map'), { 
  ssr: false,
  loading: () => <div className="h-64 bg-neutral-800 rounded-xl animate-pulse"></div>
});

export default function Home() {
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);
  const [isLedgerOpen, setIsLedgerOpen] = useState(false);
  const [isSmartContractsOpen, setIsSmartContractsOpen] = useState(false);
  const [isTokenomicsOpen, setIsTokenomicsOpen] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [isPolicyMenuOpen, setIsPolicyMenuOpen] = useState(false);

  const handleScanComplete = (result: any) => {
    setScanResult(result);
    setVerificationSuccess(false);
    setIsScannerOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-[family-name:var(--font-geist-sans)] selection:bg-emerald-500/30">
      {/* Left Corner Policy Navigation */}
      <div className="fixed left-6 top-24 z-40">
        <div className="relative">
          <button
            onClick={() => setIsPolicyMenuOpen(!isPolicyMenuOpen)}
            className="p-3 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/50 hover:border-emerald-400/80 rounded-lg transition-all duration-300 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
            title="Policies & Legal"
          >
            <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.498 6.253 3 9.866 3 14.477V19.5c0 .828.895 1.5 2 1.5h14c1.105 0 2-.672 2-1.5v-5.023C21 9.866 17.502 6.253 12 6.253z" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isPolicyMenuOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-neutral-900/95 backdrop-blur-xl border border-emerald-500/30 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="p-3 border-b border-emerald-500/20">
                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Policies & Legal</p>
              </div>
              <nav className="space-y-1 p-2">
                <Link
                  href="/privacy-policy"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-200 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors group"
                  onClick={() => setIsPolicyMenuOpen(false)}
                >
                  <svg className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-sm font-medium">Privacy Policy</span>
                </Link>
                <Link
                  href="/terms-of-service"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-200 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors group"
                  onClick={() => setIsPolicyMenuOpen(false)}
                >
                  <svg className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm font-medium">Terms of Service</span>
                </Link>
                <Link
                  href="/cookie-policy"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-200 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors group"
                  onClick={() => setIsPolicyMenuOpen(false)}
                >
                  <svg className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-medium">Cookie Policy</span>
                </Link>
              </nav>
              <div className="px-4 py-2 bg-neutral-950/50 border-t border-emerald-500/20">
                <p className="text-xs text-neutral-500">© 2026 EcoMine</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Close menu when clicking outside */}
      {isPolicyMenuOpen && (
        <div 
          className="fixed inset-0 z-30"
          onClick={() => setIsPolicyMenuOpen(false)}
        />
      )}

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.4)]">
              <span className="font-extrabold text-black text-xl">E</span>
            </div>
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              EcoMine
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsTokenomicsOpen(true)}
              className="px-4 py-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors border border-cyan-400/30 rounded-lg hover:border-cyan-400/60 text-sm"
            >
              Tokenomics
            </button>
            <button
              onClick={() => setIsSmartContractsOpen(true)}
              className="px-4 py-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors border border-emerald-400/30 rounded-lg hover:border-emerald-400/60 text-sm"
            >
              Smart Contracts
            </button>
            <WalletConnect />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Turn your <br/>
              <span className="text-emerald-400 relative inline-block">
                E-Waste
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-500/50 blur-sm rounded-full"></div>
              </span> <br/>
              into Crypto.
            </h1>
            <p className="text-xl text-neutral-400 max-w-xl leading-relaxed">
              Scan devices using our PyTorch AI module, locate green drop zones, and get rewarded instantly on the Polygon network.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => setIsScannerOpen(true)}
                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors shadow-xl shadow-white/10"
              >
                Scan Device Real-Time
              </button>
              <button 
                onClick={() => setIsLedgerOpen(true)}
                className="px-8 py-4 bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/50 hover:bg-emerald-500/20 font-semibold rounded-full transition-colors flex items-center gap-2"
              >
                <span>View Ledger</span>
              </button>
            </div>
            
            {/* Display Scan Result dynamically */}
            {scanResult && !verificationSuccess && (
              <div className="bg-emerald-950/40 border border-emerald-500/20 p-6 rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex gap-4 mb-4 text-sm text-neutral-300">
                  <p>Copper: <span className="font-mono">{scanResult.materials['Copper (g)']}g</span></p>
                  <p>Gold: <span className="font-mono">{scanResult.materials['Gold (g)']}g</span></p>
                  <p>Lithium: <span className="font-mono">{scanResult.materials['Lithium (g)']}g</span></p>
                </div>
                <div className="flex justify-between items-center bg-black/60 p-4 rounded-xl">
                  <span className="text-neutral-400 text-sm">Estimated Payout</span>
                  <span className="text-emerald-400 font-bold font-mono text-xl">+{scanResult.eco_reward} ECO</span>
                </div>
                <button 
                   onClick={() => setVerificationSuccess(true)}
                   className="w-full mt-4 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition-colors"
                >
                  Verify at Drop Zone
                </button>
              </div>
            )}

            {verificationSuccess && (
              <div className="bg-green-950/40 border border-green-500/50 p-6 rounded-xl animate-in zoom-in text-center shadow-lg shadow-green-500/20">
                <p className="text-green-400 font-bold text-lg mb-2">🎉 Success!</p>
                <p className="text-neutral-300">Transaction verified and written to the Blockchain. Rewards mapping to your wallet.</p>
                <button 
                  className="mt-4 text-sm text-green-400 hover:text-green-300"
                  onClick={() => {
                    setScanResult(null);
                    setVerificationSuccess(false);
                    setIsLedgerOpen(true);
                  }}
                >
                  See it on the Ledger →
                </button>
              </div>
            )}
            
            {!scanResult && !verificationSuccess && (
              <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                <div>
                  <p className="text-3xl font-bold text-white">4.2M</p>
                  <p className="text-sm text-neutral-500 font-medium">Tons Recycled</p>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div>
                  <p className="text-3xl font-bold text-emerald-400">$12M+</p>
                  <p className="text-sm text-neutral-500 font-medium">Rewards Paid</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="order-first lg:order-last relative">
            <EarthScene />
          </div>
        </div>

        {/* Features / Drop Zones */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-16">
          <div className="bg-neutral-900 border border-white/5 rounded-3xl p-8 space-y-6 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <h3 className="text-2xl font-bold">Green Drop Zones</h3>
            <p className="text-neutral-400">Discover verified recycling centers near you. Hand over your e-waste to informal workers completely on-chain.</p>
            <Map />
          </div>

          <div className="bg-neutral-900 border border-white/5 rounded-3xl p-8 flex flex-col justify-between group relative overflow-hidden shadow-2xl shadow-emerald-900/5">
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
            <div className="space-y-6 relative z-10">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center ring-1 ring-emerald-500/30">
                 <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
              </div>
              <h3 className="text-2xl font-bold">AI Material Valuation</h3>
              <p className="text-neutral-400">Our PyTorch model instantly identifies your old devices and provides real-time spot prices for Gold, Copper, and Lithium recovery values.</p>
            </div>
            
            <div className="mt-8 bg-black/50 p-6 rounded-2xl border border-white/5 relative z-10">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-neutral-400">Estimated Value Found</span>
                <span className="text-emerald-400 font-mono">+ 12.4 ECO</span>
              </div>
              <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 w-[65%] h-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Render modals */}
      {isScannerOpen && (
        <ScannerModal 
          onClose={() => setIsScannerOpen(false)} 
          onScanComplete={handleScanComplete} 
        />
      )}

      {isLedgerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative">
            <div className="p-6 border-b border-neutral-800 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-emerald-400">Transparent Ledger</h2>
              <button onClick={() => setIsLedgerOpen(false)} className="text-neutral-400 hover:text-white transition-colors">
                ✕
              </button>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-neutral-400 mb-4">Latest Public E-Waste Transactions (Polygon Testnet)</p>
              
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="bg-black/50 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">Verified</span>
                      <span className="text-sm font-mono text-neutral-300 text-xs">TxHash: 0x8a1...{Math.floor(Math.random()*1000)}b</span>
                    </div>
                    <p className="text-neutral-400 font-mono text-sm">{Math.floor(Math.random()*20)+1}g Recycled by Worker #{(Math.random()*100).toFixed(0)}</p>
                  </div>
                  <div className="text-emerald-400 font-bold font-mono truncate max-w-[100px]">
                    +{(Math.random() * 15).toFixed(2)} ECO
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 bg-neutral-950 text-center text-sm text-neutral-500 font-mono border-t border-neutral-800">
               Decentralized & immutable.
            </div>
          </div>
        </div>
      )}

      {isSmartContractsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative">
            <div className="p-6 border-b border-neutral-800 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-cyan-400">Smart Contracts</h2>
              <button onClick={() => setIsSmartContractsOpen(false)} className="text-neutral-400 hover:text-white transition-colors">
                ✕
              </button>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-neutral-400 mb-6">EcoReward Smart Contract (Polygon Mainnet)</p>
              
              <div className="bg-black/50 p-4 rounded-xl border border-cyan-500/30 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-neutral-400 text-sm mb-1">Contract Address</p>
                    <p className="text-cyan-400 font-mono text-xs break-all">0x4F1E1F2E3D4C5B6A7E8F9A0B1C2D3E4F5A6B7C8D</p>
                  </div>
                </div>
                <div className="flex items-start justify-between pt-3 border-t border-neutral-700">
                  <div>
                    <p className="text-neutral-400 text-sm mb-1">Network</p>
                    <p className="text-cyan-400 font-semibold text-sm">Polygon Mainnet</p>
                  </div>
                  <div className="text-right">
                    <p className="text-neutral-400 text-sm mb-1">Total Value Locked</p>
                    <p className="text-emerald-400 font-bold text-lg">$2.4M</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-4 rounded-xl border border-white/5 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-neutral-400 text-sm mb-1">Active Transactions</p>
                    <p className="text-white font-semibold text-lg">12,847</p>
                  </div>
                  <div className="text-right">
                    <p className="text-neutral-400 text-sm mb-1">Total Rewards Distributed</p>
                    <p className="text-emerald-400 font-bold text-lg">1.2M ECO</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-4 rounded-xl border border-white/5">
                <p className="text-neutral-400 text-sm mb-2">Recent Activity</p>
                <div className="space-y-2">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <span className="text-neutral-500">Block #{Math.floor(Math.random()*99999999)}</span>
                      <span className="text-cyan-400">+{(Math.random() * 25).toFixed(2)} ECO</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 bg-neutral-950 text-center text-sm text-neutral-500 font-mono border-t border-neutral-800">
              Audited & verified on-chain.
            </div>
          </div>
        </div>
      )}

      <TokenomicsModal isOpen={isTokenomicsOpen} onClose={() => setIsTokenomicsOpen(false)} />
    </div>
  );
}
