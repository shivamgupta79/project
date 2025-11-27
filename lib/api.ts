// API Base URL - defaults to localhost for development
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Fetcher function for SWR
export const fetcher = (url: string) => {
  // If URL starts with /api, prepend the base URL
  const fullUrl = url.startsWith('/api') ? `${API_BASE_URL}${url}` : url;
  
  return fetch(fullUrl).then(async (res) => {
    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || "API error");
    }
    return res.json();
  });
};

// API Client helper functions
export const api = {
  // Marketplace
  getMarketplaceListings: () => fetcher('/api/marketplace/listings'),
  getDatasetDetails: (id: string) => fetcher(`/api/marketplace/dataset/${id}`),
  
  // Upload
  uploadDataset: async (formData: FormData) => {
    const res = await fetch(`${API_BASE_URL}/api/upload`, {
      method: 'POST',
      body: formData,
    });
    return res.json();
  },
  
  // Labeling
  getLabelingTasks: () => fetcher('/api/labeling/tasks'),
  submitLabel: async (taskId: string, answer: string) => {
    const res = await fetch(`${API_BASE_URL}/api/labeling/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taskId, answer }),
    });
    return res.json();
  },
  
  // Subscriptions
  getSubscriptionPlans: () => fetcher('/api/subscriptions/plans'),
  subscribe: async (plan: string) => {
    const res = await fetch(`${API_BASE_URL}/api/subscriptions/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan }),
    });
    return res.json();
  },
  
  // Auth
  login: async (email: string, password: string) => {
    const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return res.json();
  },
  
  getMe: () => fetcher('/api/auth/me'),
  
  // Reputation
  getReputation: (userId: string) => fetcher(`/api/reputation/${userId}`),
};
