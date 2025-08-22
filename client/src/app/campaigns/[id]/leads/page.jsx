"use client";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/store/hooks";
import { getLeadsByCampaign } from "../../../../services/leadService";
import Link from "next/link";

export default function CampaignLeadsPage({ params }) {
  const { id } = params;
  const dispatch = useAppDispatch();
  const {
    list: leads,
    isLoading,
    error,
  } = useAppSelector((state) => state.leads);

  useEffect(() => {
    getLeadsByCampaign(dispatch, id);
  }, [dispatch, id]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Leads for Campaign #{id}
          </h1>
          <Link href={`/campaigns/${id}/edit`}>
            <span className="text-indigo-600 text-sm hover:underline">
              &larr; Back to Campaign
            </span>
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-6 p-3 bg-red-100 border border-red-200 text-red-700 rounded text-sm">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="text-center py-10">
            <p className="text-gray-600">Loading leads...</p>
          </div>
        ) : leads.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600">No leads yet for this campaign.</p>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {lead.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {lead.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {lead.phone || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 text-xs leading-5 font-semibold rounded-full ${
                          lead.status === "new"
                            ? "bg-yellow-100 text-yellow-800"
                            : lead.status === "contacted"
                            ? "bg-blue-100 text-blue-800"
                            : lead.status === "qualified"
                            ? "bg-indigo-100 text-indigo-800"
                            : lead.status === "converted"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {lead.source}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
