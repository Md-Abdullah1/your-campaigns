// src/app/campaigns/page.js
import Link from "next/link";

// Mock data (will be replaced by Redux + API)
const campaigns = [
  {
    _id: "1",
    name: "Summer Sale 2024",
    description: "Discount campaign for summer products",
    status: "active",
    budget: 5000,
    startDate: "2024-06-01",
    endDate: "2024-06-30",
    metrics: { clicks: 12400, impressions: 85000, conversions: 240 },
    leadCount: 142,
  },
  {
    _id: "2",
    name: "New Product Launch",
    description: "Promote new product line across channels",
    status: "draft",
    budget: 15000,
    startDate: "2024-07-15",
    endDate: "2024-08-15",
    metrics: { clicks: 0, impressions: 0, conversions: 0 },
    leadCount: 142,
  },
  {
    _id: "3",
    name: "Email Retargeting",
    description: "Re-engage inactive users via email",
    status: "completed",
    budget: 3000,
    startDate: "2024-05-01",
    endDate: "2024-05-31",
    metrics: { clicks: 8900, impressions: 45000, conversions: 180 },
    leadCount: 142,
  },
];

export default function CampaignsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Campaigns</h1>
          <Link href="/campaigns/create">
            <span className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition">
              + New Campaign
            </span>
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Budget
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dates
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Metrics
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {campaigns.map((camp) => (
                <tr key={camp._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {camp.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {camp.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 text-xs leading-5 font-semibold rounded-full ${
                        camp.status === "active"
                          ? "bg-green-100 text-green-800"
                          : camp.status === "draft"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {camp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${camp.budget.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {camp.startDate} → {camp.endDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {camp.metrics.clicks.toLocaleString()} clicks,{" "}
                    <span className="font-medium text-emerald-600">
                      {camp.leadCount || 0} leads
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link href={`/campaigns/${camp._id}/edit`}>
                      <span className="text-indigo-600 hover:text-indigo-900 cursor-pointer mr-4">
                        Edit
                      </span>
                    </Link>
                    <Link href={`/campaigns/${camp._id}/leads`}>
                      <span className="text-green-600 hover:text-green-900 cursor-pointer">
                        View Leads
                      </span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
