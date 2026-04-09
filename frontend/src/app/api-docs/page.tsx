export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-[family-name:var(--font-geist-sans)] selection:bg-emerald-500/30">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
            API Documentation
          </h1>
          <p className="text-xl text-neutral-400">
            Integrate EcoMine's AI scanning and reward system into your applications.
          </p>
        </div>

        <div className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-emerald-400">Base URL</h2>
          <code className="bg-black px-4 py-2 rounded text-emerald-300 block">
            https://api.ecomine.com/v1
          </code>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-neutral-900 rounded-xl p-6 border border-emerald-500/20">
            <h2 className="text-xl font-bold mb-4 text-emerald-400">Authentication</h2>
            <p className="text-neutral-300 mb-4">
              All API requests require authentication using Bearer tokens.
            </p>
            <code className="bg-black px-3 py-2 rounded text-emerald-300 block text-sm">
              Authorization: Bearer YOUR_API_KEY
            </code>
          </div>

          <div className="bg-neutral-900 rounded-xl p-6 border border-emerald-500/20">
            <h2 className="text-xl font-bold mb-4 text-emerald-400">Rate Limits</h2>
            <ul className="text-neutral-300 space-y-2">
              <li>• 1000 requests per hour</li>
              <li>• 100 scan requests per minute</li>
              <li>• 50 reward issuances per hour</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">Scan Device</h2>
            <div className="mb-6">
              <span className="inline-block bg-emerald-500 text-black px-3 py-1 rounded text-sm font-bold mr-4">POST</span>
              <code className="text-emerald-300">/scan</code>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-white">Request</h3>
            <div className="bg-black p-4 rounded-lg mb-6">
              <pre className="text-emerald-300 text-sm">
{`{
  "image": "base64_encoded_image",
  "device_type": "smartphone|laptop|circuit_board",
  "location": {
    "lat": 40.7128,
    "lng": -74.0060
  }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-white">Response</h3>
            <div className="bg-black p-4 rounded-lg mb-6">
              <pre className="text-emerald-300 text-sm">
{`{
  "scan_id": "scan_123456",
  "device_model": "iPhone 12 Pro",
  "materials": {
    "Gold (g)": 0.023,
    "Copper (g)": 12.5,
    "Lithium (g)": 2.1
  },
  "eco_reward": 15.75,
  "confidence": 0.94
}`}
              </pre>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">Issue Reward</h2>
            <div className="mb-6">
              <span className="inline-block bg-cyan-500 text-black px-3 py-1 rounded text-sm font-bold mr-4">POST</span>
              <code className="text-emerald-300">/rewards/issue</code>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-white">Request</h3>
            <div className="bg-black p-4 rounded-lg mb-6">
              <pre className="text-emerald-300 text-sm">
{`{
  "user_address": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  "amount": 25.5,
  "scan_id": "scan_123456"
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-white">Response</h3>
            <div className="bg-black p-4 rounded-lg mb-6">
              <pre className="text-emerald-300 text-sm">
{`{
  "transaction_hash": "0x8a1b2c3d4e5f6789...",
  "block_number": 18567890,
  "status": "confirmed"
}`}
              </pre>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">Get Drop Zones</h2>
            <div className="mb-6">
              <span className="inline-block bg-blue-500 text-black px-3 py-1 rounded text-sm font-bold mr-4">GET</span>
              <code className="text-emerald-300">/drop-zones</code>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-white">Query Parameters</h3>
            <ul className="text-neutral-300 mb-6 space-y-2">
              <li><code className="text-emerald-300">lat</code> - Latitude (required)</li>
              <li><code className="text-emerald-300">lng</code> - Longitude (required)</li>
              <li><code className="text-emerald-300">radius</code> - Search radius in km (default: 10)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-white">Response</h3>
            <div className="bg-black p-4 rounded-lg">
              <pre className="text-emerald-300 text-sm">
{`{
  "drop_zones": [
    {
      "id": "dz_001",
      "name": "GreenTech Recycling Center",
      "address": "123 Eco Street, Green City",
      "coordinates": {
        "lat": 40.7128,
        "lng": -74.0060
      },
      "distance": 2.3,
      "rating": 4.8,
      "verified": true
    }
  ]
}`}
              </pre>
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">Error Handling</h2>
            <p className="text-neutral-300 mb-6">
              All API errors follow a consistent format with appropriate HTTP status codes.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-white">Error Response Format</h3>
            <div className="bg-black p-4 rounded-lg mb-6">
              <pre className="text-red-300 text-sm">
{`{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "The image provided is not valid",
    "details": {
      "field": "image",
      "reason": "must be base64 encoded"
    }
  }
}`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-white">Common Error Codes</h3>
            <ul className="text-neutral-300 space-y-2">
              <li><code className="text-red-300">INVALID_REQUEST</code> - Malformed request data</li>
              <li><code className="text-red-300">UNAUTHORIZED</code> - Invalid or missing API key</li>
              <li><code className="text-red-300">RATE_LIMITED</code> - Too many requests</li>
              <li><code className="text-red-300">SCAN_FAILED</code> - AI analysis failed</li>
              <li><code className="text-red-300">INSUFFICIENT_FUNDS</code> - Not enough ECO tokens</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}