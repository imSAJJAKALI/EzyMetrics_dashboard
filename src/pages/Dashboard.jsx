import React from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import jsFileDownload from 'js-file-download';
import { jsPDF } from 'jspdf';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  // Dummy data for charts
  const barData = {
    labels: ['100', '150', '200', '250', '300'],
    datasets: [
      {
        label: 'Engine Size Distribution',
        data: [50, 30, 20, 10, 5],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const pieData = {
    labels: ['Apple', 'Samsung', 'OnePlus', 'Xiaomi', 'Others'],
    datasets: [
      {
        label: 'Market Share',
        data: [35, 25, 15, 15, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  const doughnutData = {
    labels: ['Europe', 'Asia', 'Africa', 'America'],
    datasets: [
      {
        label: 'Dwelling Time (hrs)',
        data: [12370, 7500, 3000, 8000],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
      },
    ],
  };

  // Dummy data for CSV and PDF export
  const data = [
    { name: 'John Doe', leads: 100, revenue: 1500 },
    { name: 'Jane Smith', leads: 200, revenue: 3500 },
  ];

  // CSV Generation Function
  const downloadCSV = () => {
    const csvHeaders = "Name,Leads,Revenue\n";
    const csvData = data.map((row) => `${row.name},${row.leads},${row.revenue}`).join("\n");
    
    const csvFile = `${csvHeaders}${csvData}`;
    jsFileDownload(csvFile, "report.csv");
  };

  // PDF Generation Function
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Report Data", 20, 10);
    
    // Add Data in the PDF
    data.forEach((row, index) => {
      doc.text(`Name: ${row.name}, Leads: ${row.leads}, Revenue: $${row.revenue}`, 20, 20 + (index * 10));
    });

    doc.save("report.pdf");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>

      {/* Top section with 4 boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* First Box: Total Leads */}
        <div className="bg-white shadow-lg rounded-lg h-40 flex flex-col justify-center items-center p-4">
          <h2 className="text-xl font-semibold mb-2">Total Leads</h2>
          <p className="text-3xl font-bold text-teal-600">1,250</p>
        </div>

        {/* Second Box: Conversion Rate */}
        <div className="bg-white shadow-lg rounded-lg h-40 flex flex-col justify-center items-center p-4">
          <h2 className="text-xl font-semibold mb-2">Conversion Rate</h2>
          <p className="text-3xl font-bold text-teal-600">12.4%</p>
        </div>

        {/* Third Box: Revenue */}
        <div className="bg-white shadow-lg rounded-lg h-40 flex flex-col justify-center items-center p-4">
          <h2 className="text-xl font-semibold mb-2">Revenue</h2>
          <p className="text-3xl font-bold text-teal-600">$78,500</p>
        </div>

        {/* Fourth Box: New Customers */}
        <div className="bg-white shadow-lg rounded-lg h-40 flex flex-col justify-center items-center p-4">
          <h2 className="text-xl font-semibold mb-2">New Customers</h2>
          <p className="text-3xl font-bold text-teal-600">350</p>
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Bar Chart */}
        <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Reports</h2>
          <Bar data={barData} options={{ responsive: true }} />
          <div className="flex justify-end mt-4">
            <button onClick={downloadCSV} className="px-4 py-2 bg-gray-200 rounded-lg mr-2">CSV</button>
            <button onClick={downloadPDF} className="px-4 py-2 bg-gray-200 rounded-lg">PDF</button>
          </div>
        </div>

      {/* Pie and Dougnup Chart */}
        <div className="flex flex-col space-y-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Pie data={pieData} options={{ responsive: true }} />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Doughnut data={doughnutData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
