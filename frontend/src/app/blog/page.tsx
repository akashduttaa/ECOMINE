export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of E-Waste Recycling: AI and Blockchain",
      excerpt: "How artificial intelligence and blockchain technology are revolutionizing the e-waste recycling industry.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Technology",
      image: "/blog/ai-blockchain.jpg"
    },
    {
      id: 2,
      title: "Understanding Material Recovery: Gold, Copper, and Lithium",
      excerpt: "A deep dive into the precious metals found in electronic devices and their environmental impact.",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Education",
      image: "/blog/materials.jpg"
    },
    {
      id: 3,
      title: "Building a Sustainable Future: Our Mission at EcoMine",
      excerpt: "How we're working to create a circular economy for electronic waste through innovative technology.",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "Company",
      image: "/blog/sustainability.jpg"
    },
    {
      id: 4,
      title: "The Economics of E-Waste: Turning Trash into Treasure",
      excerpt: "Exploring the financial incentives and market dynamics of electronic waste recycling.",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Economics",
      image: "/blog/economics.jpg"
    },
    {
      id: 5,
      title: "Partner Spotlight: Working with Local Recycling Centers",
      excerpt: "How our partnerships with verified drop zones ensure responsible e-waste processing.",
      date: "2023-12-20",
      readTime: "5 min read",
      category: "Partnerships",
      image: "/blog/partners.jpg"
    },
    {
      id: 6,
      title: "The Science Behind Our AI Scanner",
      excerpt: "Technical details about our PyTorch model and how it accurately identifies e-waste materials.",
      date: "2023-12-15",
      readTime: "8 min read",
      category: "Technology",
      image: "/blog/ai-science.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-[family-name:var(--font-geist-sans)] selection:bg-emerald-500/30">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-neutral-400">
            Insights, updates, and stories from the world of sustainable e-waste recycling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-neutral-900 rounded-xl overflow-hidden border border-emerald-500/20 hover:border-emerald-400/50 transition-colors group">
              <div className="h-48 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center">
                <div className="text-6xl opacity-50">📄</div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-neutral-500">{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-neutral-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <button className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">Stay Updated</h2>
            <p className="text-neutral-400 mb-6">
              Subscribe to our newsletter for the latest insights on e-waste recycling and sustainable technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
              />
              <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}