"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Task = {
  id: string;
  type: string;
  prompt: string;
  options?: string[];
  reward: number;
};

interface Labeler {
  id: string;
  name: string;
  avatar: string;
  tasksCompleted: number;
  accuracy: number;
  earned: number;
  rank: number;
  badge: string;
}

const topLabelers: Labeler[] = [
  { id: "1", name: "Priya Sharma", avatar: "👩‍💻", tasksCompleted: 1250, accuracy: 98.5, earned: 15420, rank: 1, badge: "🏆" },
  { id: "2", name: "Rahul Kumar", avatar: "👨‍💼", tasksCompleted: 1180, accuracy: 97.8, earned: 14200, rank: 2, badge: "🥈" },
  { id: "3", name: "Anita Patel", avatar: "👩‍🎓", tasksCompleted: 1050, accuracy: 99.2, earned: 13800, rank: 3, badge: "🥉" },
  { id: "4", name: "Vikram Singh", avatar: "👨‍🔬", tasksCompleted: 980, accuracy: 96.5, earned: 12100, rank: 4, badge: "⭐" },
  { id: "5", name: "Sneha Reddy", avatar: "👩‍🏫", tasksCompleted: 920, accuracy: 98.1, earned: 11500, rank: 5, badge: "⭐" },
];

const achievements = [
  { icon: "🎯", title: "Accuracy Master", description: "Maintain 95%+ accuracy", progress: 98 },
  { icon: "⚡", title: "Speed Demon", description: "Complete 100 tasks in a day", progress: 65 },
  { icon: "🔥", title: "Streak King", description: "7-day labeling streak", progress: 85 },
  { icon: "💎", title: "Quality Expert", description: "Zero rejections in 50 tasks", progress: 100 },
];

const communityStats = [
  { label: "Active Labelers", value: "5,234", icon: "👥", color: "text-blue-600" },
  { label: "Tasks Completed", value: "1.2M+", icon: "✅", color: "text-green-600" },
  { label: "Total Earnings", value: "₹45L+", icon: "💰", color: "text-yellow-600" },
  { label: "Avg. Accuracy", value: "96.8%", icon: "🎯", color: "text-purple-600" },
];

export default function LabelingPage() {
  const [activeTab, setActiveTab] = useState<"tasks" | "leaderboard" | "achievements" | "rewards">("tasks");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [current, setCurrent] = useState<Task | null>(null);
  const [answer, setAnswer] = useState("");
  const [earnings, setEarnings] = useState(4280);
  const [tasksCompleted, setTasksCompleted] = useState(342);

  useEffect(() => {
    setTasks([
      { id: "t1", type: "classification", prompt: "Is the image showing a crop disease?", options: ["Yes", "No"], reward: 0.5 },
      { id: "t2", type: "transcription", prompt: "Transcribe: 'राम राम'", reward: 2 },
      { id: "t3", type: "classification", prompt: "Does this text contain spam?", options: ["Yes", "No"], reward: 1 }
    ]);
    setCurrent({
      id: "t1",
      type: "classification",
      prompt: "Is the image showing a crop disease?",
      options: ["Yes", "No"],
      reward: 0.5
    });
  }, []);

  function submitLabel() {
    fetch("/api/labeling/submit", {
      method: "POST",
      body: JSON.stringify({ taskId: current?.id, answer }),
      headers: { "Content-Type": "application/json" }
    });
    
    const earned = current?.reward ?? 0;
    setEarnings(prev => prev + earned);
    setTasksCompleted(prev => prev + 1);
    alert(`🎉 Submitted! You earned ₹${earned}`);
    
    const currentIndex = tasks.findIndex(t => t.id === current?.id);
    const nextTask = tasks[currentIndex + 1] || null;
    setCurrent(nextTask);
    setAnswer("");
  }

  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full text-sm font-semibold">
            🌟 Label & Earn
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            Dataset Labeling Hub
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Complete tasks, earn rewards, compete on leaderboards, and unlock achievements
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {communityStats.map((stat, idx) => (
            <div key={idx} className="card p-4 text-center hover:scale-105 transition-transform duration-200">
              <div className={`text-3xl mb-2 ${stat.color}`}>{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab("tasks")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap ${
              activeTab === "tasks"
                ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            🏷️ Label Tasks
          </button>
          <button
            onClick={() => setActiveTab("leaderboard")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap ${
              activeTab === "leaderboard"
                ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            🏆 Leaderboard
          </button>
          <button
            onClick={() => setActiveTab("achievements")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap ${
              activeTab === "achievements"
                ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            🎯 Achievements
          </button>
          <button
            onClick={() => setActiveTab("rewards")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap ${
              activeTab === "rewards"
                ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            💎 Rewards
          </button>
        </div>

        {/* Tasks Tab */}
        {activeTab === "tasks" && (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Task Card */}
            <div className="md:col-span-2">
              {!current ? (
                <div className="card p-12 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <div className="text-gray-600 text-xl font-semibold">All tasks completed!</div>
                  <p className="text-gray-500 mt-2">Great job! Check back soon for new tasks.</p>
                  <div className="mt-6">
                    <div className="text-3xl font-bold text-green-600">₹{earnings.toFixed(2)}</div>
                    <div className="text-gray-600">Total Earned</div>
                  </div>
                </div>
              ) : (
                <div className="card p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="badge bg-blue-100 text-blue-700">
                      Task #{current.id}
                    </span>
                    <span className="badge bg-green-100 text-green-700">
                      💰 ₹{current.reward} reward
                    </span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {current.prompt}
                    </h3>

                    {current.type === "classification" && current.options && (
                      <div className="flex gap-3">
                        {current.options.map((opt) => (
                          <button 
                            key={opt} 
                            onClick={() => setAnswer(opt)} 
                            className={`flex-1 px-6 py-4 rounded-lg font-semibold transition-all duration-200 ${
                              answer === opt 
                                ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg scale-105" 
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}

                    {current.type === "transcription" && (
                      <textarea 
                        className="input-field min-h-[120px]" 
                        value={answer} 
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Type your transcription here..."
                      />
                    )}
                  </div>

                  <button 
                    onClick={submitLabel} 
                    disabled={!answer}
                    className={`w-full btn-primary text-lg ${!answer ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Submit & Earn ₹{current.reward} 🎉
                  </button>

                  {/* Progress */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Tasks Remaining</span>
                      <span className="font-semibold">{tasks.length - tasks.findIndex(t => t.id === current.id)} of {tasks.length}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-sky-500 to-blue-600 h-full rounded-full transition-all duration-300"
                        style={{ width: `${((tasks.findIndex(t => t.id === current.id)) / tasks.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Your Stats Sidebar */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span>📊</span>
                  <span>Your Stats</span>
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-sm text-gray-600">Current Rank</div>
                    <div className="text-2xl font-bold text-blue-600">#42</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="text-sm text-gray-600">Tasks Done</div>
                    <div className="text-2xl font-bold text-green-600">{tasksCompleted}</div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="text-sm text-gray-600">Accuracy</div>
                    <div className="text-2xl font-bold text-purple-600">94.2%</div>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <div className="text-sm text-gray-600">Total Earned</div>
                    <div className="text-2xl font-bold text-yellow-600">₹{earnings.toFixed(2)}</div>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold mb-3">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full p-3 bg-green-50 text-green-700 rounded-lg font-semibold hover:bg-green-100 transition-all text-sm">
                    💰 Withdraw Earnings
                  </button>
                  <button className="w-full p-3 bg-purple-50 text-purple-700 rounded-lg font-semibold hover:bg-purple-100 transition-all text-sm">
                    📈 View History
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Leaderboard Tab */}
        {activeTab === "leaderboard" && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>🏆</span>
                <span>Top Labelers This Month</span>
              </h3>
              <div className="space-y-4">
                {topLabelers.map((labeler) => (
                  <div
                    key={labeler.id}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-lg ${
                      labeler.rank <= 3 ? "bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-300" : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{labeler.avatar}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl">{labeler.badge}</span>
                          <span className="font-bold text-lg text-gray-800">{labeler.name}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div>
                            <div className="text-gray-500">Tasks</div>
                            <div className="font-semibold text-sky-600">{labeler.tasksCompleted}</div>
                          </div>
                          <div>
                            <div className="text-gray-500">Accuracy</div>
                            <div className="font-semibold text-green-600">{labeler.accuracy}%</div>
                          </div>
                          <div>
                            <div className="text-gray-500">Earned</div>
                            <div className="font-semibold text-yellow-600">₹{labeler.earned}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-2xl font-bold mb-6">🎖️ Your Ranking</h3>
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg mb-6">
                <div className="text-6xl mb-4">🎖️</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">#42</div>
                <div className="text-gray-600">Out of 5,234 labelers</div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Tasks to Rank #41</span>
                  <span className="font-bold text-sky-600">8 more</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Tasks to Top 10</span>
                  <span className="font-bold text-sky-600">908 more</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === "achievements" && (
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="card p-6 hover:scale-105 transition-transform duration-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-1">{achievement.title}</h4>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                  {achievement.progress === 100 && (
                    <span className="badge bg-green-100 text-green-700">✓ Unlocked</span>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold text-sky-600">{achievement.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-sky-500 to-blue-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${achievement.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Rewards Tab */}
        {activeTab === "rewards" && (
          <div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="card p-6 text-center hover:scale-105 transition-transform duration-200">
                <div className="text-6xl mb-4">🎁</div>
                <h4 className="text-xl font-bold mb-2">Referral Bonus</h4>
                <p className="text-gray-600 mb-4">Earn ₹500 for each friend you refer</p>
                <button className="btn-primary w-full">Invite Friends</button>
              </div>
              
              <div className="card p-6 text-center hover:scale-105 transition-transform duration-200">
                <div className="text-6xl mb-4">🏆</div>
                <h4 className="text-xl font-bold mb-2">Monthly Contest</h4>
                <p className="text-gray-600 mb-4">Top 10 labelers win ₹10,000 each</p>
                <button className="btn-secondary w-full">View Rules</button>
              </div>
              
              <div className="card p-6 text-center hover:scale-105 transition-transform duration-200">
                <div className="text-6xl mb-4">💎</div>
                <h4 className="text-xl font-bold mb-2">Premium Perks</h4>
                <p className="text-gray-600 mb-4">Unlock exclusive high-paying tasks</p>
                <button className="btn-secondary w-full">Upgrade Now</button>
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">📜 Community Guidelines</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">✅</div>
                  <h4 className="font-bold text-lg mb-2">Quality First</h4>
                  <p className="text-gray-600 text-sm">Always prioritize accuracy over speed. Quality work earns better rewards.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🤝</div>
                  <h4 className="font-bold text-lg mb-2">Be Respectful</h4>
                  <p className="text-gray-600 text-sm">Treat fellow labelers and data with respect. We're building together.</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🚀</div>
                  <h4 className="font-bold text-lg mb-2">Keep Learning</h4>
                  <p className="text-gray-600 text-sm">Improve your skills through feedback and training resources.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
