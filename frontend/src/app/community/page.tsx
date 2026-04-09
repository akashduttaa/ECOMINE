export default function CommunityPage() {
  const communityFeatures = [
    {
      title: "Discussion Forums",
      description: "Connect with fellow environmentalists and e-waste enthusiasts. Share experiences, ask questions, and learn from the community.",
      icon: "💬",
      link: "#forums"
    },
    {
      title: "Developer Hub",
      description: "Access developer resources, contribute to open-source projects, and collaborate on EcoMine's technology stack.",
      icon: "👨‍💻",
      link: "#developers"
    },
    {
      title: "Partner Network",
      description: "Join our network of recycling centers, manufacturers, and environmental organizations working together for change.",
      icon: "🤝",
      link: "#partners"
    },
    {
      title: "Events & Meetups",
      description: "Attend virtual and in-person events, workshops, and conferences focused on sustainable technology and e-waste.",
      icon: "📅",
      link: "#events"
    }
  ];

  const upcomingEvents = [
    {
      title: "EcoMine Developer Conference 2024",
      date: "March 15, 2024",
      type: "Virtual",
      description: "Join us for a day of technical talks, workshops, and networking with the EcoMine development team."
    },
    {
      title: "E-Waste Recycling Workshop",
      date: "March 22, 2024",
      type: "In-Person",
      description: "Hands-on workshop on proper e-waste dismantling and material recovery techniques."
    },
    {
      title: "Blockchain for Sustainability",
      date: "April 5, 2024",
      type: "Virtual",
      description: "Exploring how blockchain technology can drive environmental sustainability initiatives."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-[family-name:var(--font-geist-sans)] selection:bg-emerald-500/30">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
            Community
          </h1>
          <p className="text-xl text-neutral-400">
            Join a global network of innovators, recyclers, and environmental advocates working towards a sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <div key={index} className="bg-neutral-900 rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-colors group">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-emerald-400">{feature.title}</h3>
              <p className="text-neutral-400 mb-4">{feature.description}</p>
              <button className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">Upcoming Events</h2>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border-b border-neutral-800 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      event.type === 'Virtual'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-green-500/20 text-green-400'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  <p className="text-neutral-400 text-sm mb-2">{event.date}</p>
                  <p className="text-neutral-300">{event.description}</p>
                  <button className="mt-3 text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors">
                    Register →
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-neutral-900 rounded-xl p-8 border border-emerald-500/20">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">Community Stats</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">Active Members</span>
                <span className="text-2xl font-bold text-emerald-400">12,847</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">Countries Represented</span>
                <span className="text-2xl font-bold text-emerald-400">47</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">E-Waste Recycled (tons)</span>
                <span className="text-2xl font-bold text-emerald-400">4.2M</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">ECO Tokens Distributed</span>
                <span className="text-2xl font-bold text-emerald-400">$12M+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">Active Drop Zones</span>
                <span className="text-2xl font-bold text-emerald-400">1,203</span>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-gradient-to-r from-emerald-900 via-green-900 to-emerald-900 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Join the Movement</h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Whether you're a developer, recycler, environmental advocate, or just someone who cares about our planet,
            there's a place for you in the EcoMine community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-emerald-900 font-semibold rounded-full hover:bg-neutral-200 transition-colors">
              Join Discussion Forums
            </button>
            <button className="px-8 py-3 bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/50 hover:bg-emerald-500/20 font-semibold rounded-full transition-colors">
              View GitHub Projects
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-900 rounded-xl p-6 border border-emerald-500/20 text-center">
            <div className="text-3xl mb-4">🌍</div>
            <h3 className="text-lg font-bold mb-2 text-emerald-400">Global Impact</h3>
            <p className="text-neutral-400 text-sm">
              Our community spans across continents, working together to solve the global e-waste crisis.
            </p>
          </div>

          <div className="bg-neutral-900 rounded-xl p-6 border border-emerald-500/20 text-center">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-lg font-bold mb-2 text-emerald-400">Innovation</h3>
            <p className="text-neutral-400 text-sm">
              Pushing the boundaries of technology to create sustainable solutions for environmental challenges.
            </p>
          </div>

          <div className="bg-neutral-900 rounded-xl p-6 border border-emerald-500/20 text-center">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-lg font-bold mb-2 text-emerald-400">Collaboration</h3>
            <p className="text-neutral-400 text-sm">
              Building partnerships between technology, business, and environmental organizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}