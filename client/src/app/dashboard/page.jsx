// src/app/dashboard/page.js
import Link from "next/link";

// Mock data
const kpis = {
  totalCampaigns: 12,
  activeCampaigns: 5,
  totalSpend: 48500,
  totalLeads: 240, // ← From API later
  conversionRate: "2.1%",
};

const chartData = {
  weeks: ["Week 1", "Week 2", "Week 3", "Week 4"],
  conversions: [220, 310, 380, 430],
  clicks: [8500, 11200, 14500, 16800],
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {[
            {
              label: "Total Campaigns",
              value: kpis.totalCampaigns,
              color: "blue",
            },
            {
              label: "Active Campaigns",
              value: kpis.activeCampaigns,
              color: "green",
            },
            {
              label: "Total Spend",
              value: `$${kpis.totalSpend.toLocaleString()}`,
              color: "indigo",
            },
            { label: "Total Leads", value: kpis.totalLeads, color: "emerald" },
            {
              label: "Conversion Rate",
              value: kpis.conversionRate,
              color: "purple",
            },
          ].map((kpi, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow space-y-2 border"
            >
              <p className="text-sm font-medium text-gray-600">{kpi.label}</p>
              <p className={`text-2xl font-bold text-${kpi.color}-600`}>
                {kpi.value}
              </p>
            </div>
          ))}
        </div>

        {/* Chart Placeholder */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Performance Overview
          </h2>
          <div className="space-y-4">
            {chartData.weeks.map((week, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-gray-50 rounded"
              >
                <span className="font-medium text-gray-700">{week}</span>
                <div className="flex space-x-6 text-sm">
                  <span>
                    <span className="text-indigo-600 font-medium">
                      {chartData.clicks[i].toLocaleString()}
                    </span>{" "}
                    clicks
                  </span>
                  <span>
                    <span className="text-green-600 font-medium">
                      {chartData.conversions[i]}
                    </span>{" "}
                    conversions
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/campaigns/create">
              <span className="px-5 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 transition">
                + New Campaign
              </span>
            </Link>
            <Link href="/campaigns">
              <span className="px-5 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition">
                View All Campaigns
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
