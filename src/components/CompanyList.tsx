import React from 'react';
import { Target, Ban } from 'lucide-react';
import type { Company } from '../types';
import { supabase } from '../lib/supabase';

interface CompanyListProps {
  companies: Company[];
  onStatusUpdate: (id: string, newStatus: string) => void;
}

export function CompanyList({ companies, onStatusUpdate }: CompanyListProps) {
  const handleStatusToggle = async (company: Company) => {
    const newStatus = company.status === 'Target' ? 'Not Target' : 'Target';
    onStatusUpdate(company.id, newStatus);
  };

  return (
    <div className="w-full max-w-4xl">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Match Score
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {companies.map((company) => (
              <tr key={company.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{company.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{company.match_score}%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      company.status === 'Target'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {company.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => handleStatusToggle(company)}
                    className={`inline-flex items-center px-3 py-1 rounded-md ${
                      company.status === 'Target'
                        ? 'text-red-700 bg-red-100 hover:bg-red-200'
                        : 'text-green-700 bg-green-100 hover:bg-green-200'
                    }`}
                  >
                    {company.status === 'Target' ? (
                      <>
                        <Ban className="w-4 h-4 mr-1" />
                        Remove Target
                      </>
                    ) : (
                      <>
                        <Target className="w-4 h-4 mr-1" />
                        Set as Target
                      </>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}