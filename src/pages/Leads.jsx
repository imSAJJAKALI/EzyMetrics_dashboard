import React, { useState } from 'react';
import LeadDetails from '../components/LeadsModal';


const Leads = () => {
  const [selectedLead, setSelectedLead] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const leads = [
    { id: 1, name: 'Lead 1', email: 'lead1@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Lead 2', email: 'lead2@example.com', phone: '987-654-3210' },
    // Add more leads as needed
  ];

  const handleLeadClick = (lead) => {
    setSelectedLead(lead);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedLead(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Leads</h1>
      <table className="min-w-full mt-4 border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Phone</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr
              key={lead.id}
              className="border-b border-gray-300 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleLeadClick(lead)}
            >
              <td className="border border-gray-300 px-4 py-2">{lead.name}</td>
              <td className="border border-gray-300 px-4 py-2">{lead.email}</td>
              <td className="border border-gray-300 px-4 py-2">{lead.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Lead Details Modal/Sidebar */}
      {isOpen && (
        <LeadDetails lead={selectedLead} onClose={closeModal} />
      )}
    </div>
  );
};

export default Leads;
