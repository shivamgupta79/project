"use client";

import { useState } from "react";
import useSWR from "swr";
import DatasetCard from "../../components/DatasetCard";
import { fetcher } from "../../lib/api";

// Mock data for demo
const mockDatasets = [
  {
    id: "1",
    title: "Indian Agriculture Crop Disease Dataset",
    description: "Comprehensive dataset of crop diseases across India with 50,000+ labeled images covering major crops like rice, wheat, and cotton.",
    price: 2499,
    trust_score: 95,
    synthetic: true,
    category: "Agriculture",
    downloads: 1234
  },
  {
    id: "2",
    title: "Hindi-English Translation Corpus",
    description: "Large-scale parallel corpus for machine translation with 1M+ sentence pairs, professionally translated and verified.",
    price: 3999,
    trust_score: 92,
    synthetic: false,
    category: "NLP",
    downloads: 856
  },
  {
    id: "3",
    title: "Indian Traffic Sign Recognition",
    description: "Dataset containing 100,000+ images of Indian traffic signs captured in various lighting and weather conditions.",
    price: 1999,
    trust_score: 88,
    synthetic: true,
    category: "Computer Vision",
    downloads: 2341
  },
  {
    id: "4",
    title: "E-commerce Product Reviews (Indian)",
    description: "Sentiment-labeled dataset of 500K+ product reviews from major Indian e-commerce platforms in multiple languages.",
    price: 1499,
    trust_score: 90,
    synthetic: false,
    category: "NLP",
    downloads: 1567
  },
  {
    id: "5",
    title: "Indian Healthcare Medical Records",
    description: "Anonymized synthetic medical records dataset with 200K+ patient records for healthcare AI applications.",
    price: 4999,
    trust_score: 96,
    synthetic: true,
    category: "Healthcare",
    downloads: 432
  },
  {
    id: "6",
    title: "Regional Language Speech Dataset",
    description: "Multi-speaker speech dataset covering 10 Indian languages with 1000+ hours of audio and transcriptions.",
    price: 5999,
    trust_score: 94,
    synthetic: false,
    category: "Speech",
    downloads: 678
  }
];

export default function MarketplacePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Use mock data directly for demo, with optional API integration
  const { data } = useSWR("/api/marketplace/listings", fetcher, {
    refreshInterval: 30000,
    fallbackData: { listings: mockDatasets },
    onError: () => {
      // Silently fail and use mock data
      console.log("Using mock data for marketplace");
    }
  });
  
  const listings = data?.listings ?? mockDatasets;

  // Filter logic
  const filteredListings = listings.filter((item: any) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeFilter === "all") return matchesSearch;
    if (activeFilter === "high-trust") return matchesSearch && (item.trust_score ?? 0) >= 90;
    if (activeFilter === "synthetic") return matchesSearch && item.synthetic;
    if (activeFilter === "recent") return matchesSearch;
    
    return matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <section className="text-center py-12">
        <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full border border-blue-300">
          <span className="text-blue-700 font-semibold text-sm">🛒 Premium Datasets</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          <span className="gradient-text">Data Marketplace</span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover enterprise-grade AI datasets with blockchain verification
        </p>
      </section>

      {/* Search Bar */}
      <div className="card p-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search datasets by name, category, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl p-4 pl-12 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 outline-none"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card p-4 text-center">
          <div className="text-3xl font-bold gradient-text">{listings.length}</div>
          <div className="text-sm text-gray-600 mt-1">Total Datasets</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-3xl font-bold gradient-text">
            {listings.filter((d: any) => d.synthetic).length}
          </div>
          <div className="text-sm text-gray-600 mt-1">Synthetic</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-3xl font-bold gradient-text">
            {listings.filter((d: any) => (d.trust_score ?? 0) >= 90).length}
          </div>
          <div className="text-sm text-gray-600 mt-1">High Trust</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-3xl font-bold gradient-text">98%</div>
          <div className="text-sm text-gray-600 mt-1">Avg Quality</div>
        </div>
      </div>

      {/* Filters */}
      <div className="card p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-gray-700 font-semibold">Filter by:</span>
        </div>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Datasets
          </button>
          <button
            onClick={() => setActiveFilter("high-trust")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeFilter === "high-trust"
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            🏆 High Trust Score
          </button>
          <button
            onClick={() => setActiveFilter("synthetic")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeFilter === "synthetic"
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            ✨ Synthetic Only
          </button>
          <button
            onClick={() => setActiveFilter("recent")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeFilter === "recent"
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            🆕 Recently Added
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Showing <span className="text-gray-900 font-semibold">{filteredListings.length}</span> datasets
        </p>
        <select className="bg-white border-2 border-gray-300 rounded-xl px-4 py-2 text-gray-700 outline-none cursor-pointer focus:border-blue-500">
          <option value="popular">Most Popular</option>
          <option value="recent">Recently Added</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="trust">Highest Trust Score</option>
        </select>
      </div>

      {/* Listings Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredListings.length === 0 && (
          <div className="col-span-full card p-16 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <div className="text-gray-900 text-xl font-semibold mb-2">No datasets found</div>
            <p className="text-gray-600">Try adjusting your filters or search query</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
              }}
              className="btn-secondary mt-6"
            >
              Clear Filters
            </button>
          </div>
        )}
        {filteredListings.map((item: any) => (
          <DatasetCard key={item.id} dataset={item} />
        ))}
      </div>

      {/* Load More */}
      {filteredListings.length > 0 && (
        <div className="text-center pt-8">
          <button className="btn-secondary">
            Load More Datasets
          </button>
        </div>
      )}
    </div>
  );
}
