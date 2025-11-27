import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-2xl border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
              <span className="text-2xl">🇮🇳</span>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold gradient-text">India Data Platform</h1>
            <p className="text-xs text-gray-500">Enterprise AI Datasets</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/marketplace" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-110 relative group"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">🛒</span>
              Marketplace
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <Link 
            href="/subscriptions" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-110 relative group"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">💎</span>
              Pricing
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <Link 
            href="/labeling" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-110 relative group"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">🏷️</span>
              Earn
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <Link 
            href="/upload" 
            className="hidden md:block px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-semibold border border-gray-300 hover:bg-gray-200 hover:border-gray-400 transition-all duration-300"
          >
            Upload
          </Link>
          <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/30">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
