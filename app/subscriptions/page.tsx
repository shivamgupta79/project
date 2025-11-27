"use client";

import { useState } from "react";

const plans = [
  { 
    id: "free", 
    name: "Free", 
    price: 0, 
    datasets: "3",
    icon: "🎁",
    features: ["3 datasets/month", "Community support", "Basic quality", "Limited access"]
  },
  { 
    id: "basic", 
    name: "Basic", 
    price: 999, 
    datasets: "10",
    icon: "🌱",
    features: ["10 datasets/month", "Email support", "Community access", "Standard quality", "Download access"]
  },
  { 
    id: "pro", 
    name: "Pro", 
    price: 2999, 
    datasets: "50",
    icon: "⚡",
    popular: true,
    features: ["50 datasets/month", "Priority support", "Advanced analytics", "Premium quality", "API access", "Custom integrations"]
  },
  { 
    id: "enterprise", 
    name: "Enterprise", 
    price: 20000, 
    datasets: "Unlimited",
    icon: "🚀",
    features: ["Unlimited datasets", "24/7 dedicated support", "Custom solutions", "Highest quality", "Full API access", "White-label option"]
  }
];

export default function SubscriptionsPage() {
  const [selected, setSelected] = useState(plans[2].id);

  async function subscribe() {
    await fetch("/api/subscriptions/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan: selected })
    });
    alert("🎉 Subscription activated successfully!");
  }

  return (
    <section className="py-8 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full text-sm font-semibold">
          💎 Premium Access
        </div>
        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
          Subscription Plans
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Choose the perfect plan for your data needs. All plans include blockchain-verified datasets.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
        {plans.map((p) => (
          <div 
            key={p.id} 
            className={`card p-6 relative ${selected === p.id ? 'ring-4 ring-sky-500 scale-105' : ''} ${p.popular ? 'border-2 border-sky-500' : ''}`}
          >
            {p.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full text-xs font-bold">
                ⭐ MOST POPULAR
              </div>
            )}
            
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">{p.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{p.name}</h3>
              <div className="flex items-baseline justify-center gap-1">
                {p.price === 0 ? (
                  <span className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Free
                  </span>
                ) : (
                  <>
                    <span className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                      ₹{p.price}
                    </span>
                    <span className="text-gray-500">/month</span>
                  </>
                )}
              </div>
              <p className="text-gray-600 mt-2 font-medium">{p.datasets} datasets</p>
            </div>

            <ul className="space-y-3 mb-6">
              {p.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setSelected(p.id)}
              className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-200 mb-2 ${
                selected === p.id 
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {selected === p.id ? '✓ Selected' : 'Select Plan'}
            </button>
          </div>
        ))}
      </div>

      {/* Subscribe Button */}
      <div className="text-center">
        <button 
          onClick={subscribe} 
          className="btn-primary text-lg px-12 py-4"
        >
          Subscribe Now 🎉
        </button>
        <p className="text-gray-500 text-sm mt-4">Cancel anytime • No hidden fees • Secure payment</p>
      </div>
    </section>
  );
}
