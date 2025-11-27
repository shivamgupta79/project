"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "../../../lib/api";

export default function ReputationPage() {
  const params = useParams();
  const userId = params?.userId as string;
  const { data } = useSWR(userId ? `/api/reputation/${userId}` : null, fetcher);

  const profile = data?.profile ?? {
    id: userId,
    name: "Demo User",
    providerScore: 78,
    labelerScore: 85,
    completedTasks: 120
  };

  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Reputation: {profile.name}</h2>
      <div className="bg-white p-6 rounded shadow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="text-sm text-gray-500">Provider Score</h4>
            <div className="text-3xl font-bold text-sky-600">{profile.providerScore}</div>
          </div>
          <div>
            <h4 className="text-sm text-gray-500">Labeler Score</h4>
            <div className="text-3xl font-bold text-sky-600">{profile.labelerScore}</div>
          </div>
          <div>
            <h4 className="text-sm text-gray-500">Completed Tasks</h4>
            <div className="text-3xl font-bold text-sky-600">{profile.completedTasks}</div>
          </div>
        </div>
        <div className="mt-6 text-sm text-gray-600">
          On-chain hash: <span className="font-mono">0xabc...demohash</span>
        </div>
      </div>
    </section>
  );
}
