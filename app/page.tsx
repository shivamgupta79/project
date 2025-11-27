import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full border border-blue-300">
          <span className="text-blue-700 font-semibold text-sm">🚀 Powered by AI & Blockchain</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
          <span className="gradient-text">India's Premier</span>
          <br />
          <span className="text-gray-900">AI Dataset Marketplace</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Access enterprise-grade synthetic datasets with blockchain verification. 
          Join 5,000+ data scientists building the future of AI in India.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/marketplace" className="btn-primary group">
            <span className="flex items-center gap-2">
              Explore Datasets
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
          <Link href="/upload" className="btn-secondary">
            Upload Your Data
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Blockchain Verified</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>Enterprise Security</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>99.9% Uptime</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: "📊", value: "10K+", label: "Datasets", color: "from-blue-500 to-cyan-500" },
          { icon: "👥", value: "5K+", label: "Active Users", color: "from-purple-500 to-pink-500" },
          { icon: "🎯", value: "98%", label: "Accuracy", color: "from-green-500 to-emerald-500" },
          { icon: "💰", value: "₹2M+", label: "Earned", color: "from-yellow-500 to-orange-500" },
        ].map((stat, idx) => (
          <div key={idx} className="stat-card group">
            <div className={`text-5xl mb-3 group-hover:scale-125 transition-transform duration-300`}>
              {stat.icon}
            </div>
            <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
              {stat.value}
            </div>
            <div className="text-white/60 font-medium">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Feature Cards */}
      <section className="grid md:grid-cols-3 gap-8">
        <Link href="/marketplace" className="card group hover:scale-105 transition-all duration-500 p-8">
          <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
            🛒
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Premium Marketplace
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Browse curated, high-quality synthetic datasets with blockchain-verified trust scores and instant access.
          </p>
          <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
            <span>Explore Now</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </Link>

        <Link href="/subscriptions" className="card group hover:scale-105 transition-all duration-500 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-bl-xl">
            POPULAR
          </div>
          <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
            💎
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Flexible Subscriptions
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Unlimited access to premium datasets with flexible plans. From free tier to enterprise solutions.
          </p>
          <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
            <span>View Plans</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </Link>

        <Link href="/labeling" className="card group hover:scale-105 transition-all duration-500 p-8">
          <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
            🏷️
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Label & Earn
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Contribute to AI training by labeling data. Earn up to ₹500/hour with leaderboards and achievements.
          </p>
          <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
            <span>Start Earning</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </Link>
      </section>

      {/* CTA Banner */}
      <section className="card-dark p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 animate-gradient"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your AI Projects?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of developers and data scientists using India's most trusted AI dataset platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/marketplace" className="btn-primary">
              Get Started Free
            </Link>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="text-center">
        <p className="text-gray-500 mb-8">Trusted by leading organizations</p>
        <div className="flex flex-wrap justify-center gap-12 items-center opacity-60">
          {["🏢 TCS", "🏢 Infosys", "🏢 Wipro", "🏢 HCL", "🏢 Tech Mahindra"].map((company, idx) => (
            <div key={idx} className="text-2xl text-gray-700 font-bold">
              {company}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
