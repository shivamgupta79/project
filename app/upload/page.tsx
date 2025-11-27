"use client";

import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [uploading, setUploading] = useState(false);

  async function upload() {
    if (!file) return alert("⚠️ Please choose a file.");
    
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("title", title);
    fd.append("description", desc);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: fd
    });

    setUploading(false);

    if (res.ok) {
      alert("🎉 Uploaded successfully! Synthetic generation will start.");
      setFile(null);
      setTitle("");
      setDesc("");
    } else {
      alert("❌ Upload failed. Please try again.");
    }
  }

  return (
    <section className="py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">📤</div>
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            Upload Dataset
          </h2>
          <p className="text-gray-600 text-lg">
            Share your data and contribute to India's AI ecosystem
          </p>
        </div>

        {/* Upload Form */}
        <div className="card p-8">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              📝 Dataset Title
            </label>
            <input 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              className="input-field"
              placeholder="e.g., Indian Agriculture Crop Disease Dataset"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              📄 Description
            </label>
            <textarea 
              value={desc} 
              onChange={(e) => setDesc(e.target.value)} 
              className="input-field min-h-[120px] resize-none"
              placeholder="Describe your dataset, its source, and potential use cases..."
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              📁 Dataset File (CSV / ZIP)
            </label>
            <div className="relative">
              <input 
                type="file" 
                onChange={(e) => setFile(e.target.files?.[0] ?? null)} 
                className="hidden"
                id="file-upload"
                accept=".csv,.zip"
              />
              <label 
                htmlFor="file-upload"
                className="flex items-center justify-center w-full p-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-sky-500 hover:bg-sky-50 transition-all duration-200"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">☁️</div>
                  <div className="text-gray-700 font-medium">
                    {file ? file.name : "Click to upload or drag and drop"}
                  </div>
                  <div className="text-gray-500 text-sm mt-1">
                    CSV or ZIP files (Max 100MB)
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
            <div className="flex items-start gap-3">
              <span className="text-2xl">ℹ️</span>
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">What happens next?</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>✓ Your dataset will be processed and validated</li>
                  <li>✓ Synthetic data generation will begin automatically</li>
                  <li>✓ You'll earn rewards based on dataset quality</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Upload Button */}
          <button 
            onClick={upload} 
            disabled={uploading || !file || !title}
            className={`w-full btn-primary text-lg ${uploading || !file || !title ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {uploading ? '⏳ Uploading...' : '🚀 Upload & Start Synthesis'}
          </button>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="card p-4 text-center">
            <div className="text-3xl mb-2">🔒</div>
            <h4 className="font-semibold text-gray-800 mb-1">Secure</h4>
            <p className="text-sm text-gray-600">Blockchain-verified storage</p>
          </div>
          <div className="card p-4 text-center">
            <div className="text-3xl mb-2">💰</div>
            <h4 className="font-semibold text-gray-800 mb-1">Earn Rewards</h4>
            <p className="text-sm text-gray-600">Get paid for quality data</p>
          </div>
          <div className="card p-4 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="font-semibold text-gray-800 mb-1">Fast Processing</h4>
            <p className="text-sm text-gray-600">AI-powered validation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
