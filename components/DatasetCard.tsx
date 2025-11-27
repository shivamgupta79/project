import Link from "next/link";

interface Dataset {
  id?: string;
  title: string;
  description: string;
  price?: number;
  trust_score?: number;
  synthetic?: boolean;
  category?: string;
  downloads?: number;
}

export default function DatasetCard({ dataset }: { dataset: Dataset }) {
  const trustScore = dataset.trust_score ?? 70;
  const getTrustBadge = () => {
    if (trustScore >= 90) return { label: "Excellent", color: "from-green-500 to-emerald-500", icon: "🏆" };
    if (trustScore >= 75) return { label: "Good", color: "from-blue-500 to-cyan-500", icon: "✓" };
    return { label: "Fair", color: "from-yellow-500 to-orange-500", icon: "⚠" };
  };
  
  const trust = getTrustBadge();
  
  return (
    <div className="card group hover:scale-105 transition-all duration-500 p-6 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
            {dataset.title}
          </h3>
          {dataset.category && (
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
              {dataset.category}
            </span>
          )}
        </div>
        {dataset.synthetic && (
          <div className="badge bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
            ✨ Synthetic
          </div>
        )}
      </div>
      
      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4 line-clamp-3">
        {dataset.description}
      </p>
      
      {/* Stats */}
      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <span>📥</span>
          <span>{dataset.downloads ?? Math.floor(Math.random() * 1000)}+ downloads</span>
        </div>
      </div>
      
      {/* Trust Score */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500 font-medium">Trust Score</span>
          <span className={`text-xs font-bold bg-gradient-to-r ${trust.color} bg-clip-text text-transparent`}>
            {trust.icon} {trustScore}% {trust.label}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${trust.color} rounded-full transition-all duration-1000`}
            style={{ width: `${trustScore}%` }}
          />
        </div>
      </div>
      
      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            ₹{dataset.price ?? 500}
          </div>
          <div className="text-xs text-gray-500">one-time</div>
        </div>
        
        <Link 
          href={`/marketplace/${dataset.id ?? "demo"}`}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
