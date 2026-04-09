'use client';

import React, { useState, useEffect } from 'react';

interface TokenomicsData {
  maxSupply: number;
  circulatingSupply: number;
  lockedSupply: number;
  liquidityRatio: number;
  circulationRatio: number;
  allocations: {
    community: number;
    enterprise: number;
    dev: number;
    treasury: number;
    lp: number;
  };
}

interface TokenomicsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TokenomicsModal: React.FC<TokenomicsModalProps> = ({ isOpen, onClose }) => {
  const [tokenomics, setTokenomics] = useState<TokenomicsData>({
    maxSupply: 100_000_000,
    circulatingSupply: 40_000_000,
    lockedSupply: 60_000_000,
    liquidityRatio: 1000, // 10% in basis points
    circulationRatio: 4000, // 40% in basis points
    allocations: {
      community: 4000, // 40%
      enterprise: 2000, // 20%
      dev: 1500, // 15%
      treasury: 1500, // 15%
      lp: 1000, // 10%
    },
  });

  if (!isOpen) return null;

  const allocationItems = [
    { name: 'Community Rewards', value: tokenomics.allocations.community, color: 'from-emerald-400 to-emerald-600' },
    { name: 'Enterprise Partnerships', value: tokenomics.allocations.enterprise, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Development & Operations', value: tokenomics.allocations.dev, color: 'from-blue-400 to-blue-600' },
    { name: 'Treasury & Ecosystem', value: tokenomics.allocations.treasury, color: 'from-purple-400 to-purple-600' },
    { name: 'Liquidity Pools', value: tokenomics.allocations.lp, color: 'from-orange-400 to-orange-600' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl relative">
        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-emerald-400">Tokenomics & Liquidity Ratio</h2>
          <button onClick={onClose} className="text-neutral-400 hover:text-white transition-colors text-2xl">
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Total Supply */}
            <div className="bg-black/50 p-6 rounded-xl border border-emerald-500/30">
              <p className="text-neutral-400 text-sm mb-2">Max Supply</p>
              <p className="text-3xl font-bold text-emerald-400">100M</p>
              <p className="text-xs text-neutral-500 mt-2">ECO Tokens</p>
            </div>

            {/* Circulating Supply */}
            <div className="bg-black/50 p-6 rounded-xl border border-cyan-500/30">
              <p className="text-neutral-400 text-sm mb-2">Circulating Supply</p>
              <p className="text-3xl font-bold text-cyan-400">
                {(tokenomics.circulatingSupply / 1_000_000).toFixed(1)}M
              </p>
              <p className="text-xs text-neutral-500 mt-2">
                {(tokenomics.circulationRatio / 100).toFixed(1)}% of max supply
              </p>
            </div>

            {/* Locked Supply */}
            <div className="bg-black/50 p-6 rounded-xl border border-purple-500/30">
              <p className="text-neutral-400 text-sm mb-2">Locked Supply</p>
              <p className="text-3xl font-bold text-purple-400">
                {(tokenomics.lockedSupply / 1_000_000).toFixed(1)}M
              </p>
              <p className="text-xs text-neutral-500 mt-2">
                {((tokenomics.lockedSupply / tokenomics.maxSupply) * 100).toFixed(1)}% of max supply
              </p>
            </div>

            {/* Liquidity Ratio */}
            <div className="bg-black/50 p-6 rounded-xl border border-orange-500/30">
              <p className="text-neutral-400 text-sm mb-2">Liquidity Ratio</p>
              <p className="text-3xl font-bold text-orange-400">{(tokenomics.liquidityRatio / 100).toFixed(1)}%</p>
              <p className="text-xs text-neutral-500 mt-2">LP Tokens Locked</p>
            </div>
          </div>

          {/* Supply Distribution Chart */}
          <div className="bg-black/30 p-6 rounded-xl border border-white/5">
            <h3 className="text-lg font-bold text-white mb-4">Supply Distribution</h3>
            <div className="space-y-4">
              {/* Circulating vs Locked */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-neutral-400 text-sm">Circulating</span>
                  <span className="text-emerald-400 font-semibold">
                    {(tokenomics.circulationRatio / 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full rounded-full"
                    style={{ width: `${tokenomics.circulationRatio / 100}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-neutral-400 text-sm">Locked</span>
                  <span className="text-purple-400 font-semibold">
                    {((tokenomics.lockedSupply / tokenomics.maxSupply) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full"
                    style={{
                      width: `${((tokenomics.lockedSupply / tokenomics.maxSupply) * 100)}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Token Allocation */}
          <div className="bg-black/30 p-6 rounded-xl border border-white/5">
            <h3 className="text-lg font-bold text-white mb-6">Token Allocation Breakdown</h3>

            {/* Allocation Bars */}
            <div className="space-y-6">
              {allocationItems.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`}></div>
                      <span className="text-neutral-300 font-medium">{item.name}</span>
                    </div>
                    <span className={`font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {(item.value / 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${item.color} h-full rounded-full`}
                      style={{ width: `${item.value / 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Check */}
            <div className="mt-6 pt-6 border-t border-neutral-700">
              <p className="text-sm text-neutral-500">
                Total Allocation: <span className="text-emerald-400 font-semibold">100%</span>
              </p>
            </div>
          </div>

          {/* What Lockup Means */}
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-xl">
            <h4 className="text-emerald-400 font-bold mb-3">📌 Understanding Liquidity & Lockup</h4>
            <div className="space-y-3 text-sm text-neutral-300">
              <p>
                <span className="text-emerald-400 font-semibold">Circulating Supply:</span> Tokens actively traded and held
                by users. These are available in the market.
              </p>
              <p>
                <span className="text-emerald-400 font-semibold">Locked Supply:</span> Tokens reserved for future use,
                locked in vesting contracts, or held as liquidity reserves.
              </p>
              <p>
                <span className="text-emerald-400 font-semibold">Liquidity Ratio:</span> Percentage of tokens locked in
                DEX liquidity pools to ensure trading stability.
              </p>
              <p>
                <span className="text-emerald-400 font-semibold">Community Rewards (40%):</span> Distributed to users for
                e-waste recycling activities.
              </p>
            </div>
          </div>

          {/* Vesting Schedule */}
          <div className="bg-black/30 p-6 rounded-xl border border-white/5">
            <h3 className="text-lg font-bold text-white mb-4">Token Release Schedule</h3>
            <div className="space-y-3">
              {[
                { period: 'Year 1 (Q1-Q4)', release: '30%', status: 'Current' },
                { period: 'Year 2 (Q1-Q4)', release: '40%', status: 'Scheduled' },
                { period: 'Year 3 (Q1-Q4)', release: '20%', status: 'Scheduled' },
                { period: 'Year 4+', release: '10%', status: 'Scheduled' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-black/50 rounded-lg">
                  <div>
                    <p className="text-neutral-300 font-medium">{item.period}</p>
                    <p className="text-xs text-neutral-500">{item.status}</p>
                  </div>
                  <span className="text-emerald-400 font-bold">{item.release}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-neutral-950 text-center text-sm text-neutral-500 font-mono border-t border-neutral-800">
          Multi-year vesting ensures sustainable growth & community alignment.
        </div>
      </div>
    </div>
  );
};

export default TokenomicsModal;
