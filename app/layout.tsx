import "./globals.css";
import { ReactNode } from "react";
import Header from "../components/Header";

export const metadata = {
  title: "India Data Platform - Premium AI Dataset Marketplace",
  description: "Enterprise-grade AI datasets with blockchain verification. Join 5,000+ data scientists and ML engineers."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10">
          <Header />
          <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
          
          {/* Footer */}
          <footer className="mt-20 border-t border-gray-200 bg-white/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 py-12">
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-4">India Data Platform</h3>
                  <p className="text-gray-600 text-sm">Enterprise AI datasets with blockchain verification</p>
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-4">Platform</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li><a href="/marketplace" className="hover:text-blue-600 transition-colors">Marketplace</a></li>
                    <li><a href="/subscriptions" className="hover:text-blue-600 transition-colors">Pricing</a></li>
                    <li><a href="/labeling" className="hover:text-blue-600 transition-colors">Earn</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-4">Resources</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li><a href="#" className="hover:text-blue-600 transition-colors">Documentation</a></li>
                    <li><a href="#" className="hover:text-blue-600 transition-colors">API</a></li>
                    <li><a href="#" className="hover:text-blue-600 transition-colors">Support</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-4">Legal</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy</a></li>
                    <li><a href="#" className="hover:text-blue-600 transition-colors">Terms</a></li>
                    <li><a href="#" className="hover:text-blue-600 transition-colors">Security</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
                © 2024 India Data Platform. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
