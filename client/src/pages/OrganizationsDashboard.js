import React from 'react';
import { Link } from 'react-router-dom';

const OrganizationsDashboard = ({ organizationName }) => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">Welcome, {organizationName}!</h1>
        <div className="flex space-x-4">
          <div className="text-center">
            <p className="text-lg font-semibold">$15,000</p>
            <p className="text-sm text-gray-600">Total Donations Received</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold">2,000 Credits</p>
            <p className="text-sm text-gray-600">Carbon Credits Supported</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold">3</p>
            <p className="text-sm text-gray-600">Active Projects</p>
          </div>
        </div>
      </header>

      <nav className="bg-teal-600 text-white p-4">
        <ul className="flex space-x-4">
          <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
          <li><Link to="/projects" className="hover:underline">Projects</Link></li>
          <li><Link to="/donations" className="hover:underline">Donations</Link></li>
          <li><Link to="/reports" className="hover:underline">Reports</Link></li>
          <li><Link to="/settings" className="hover:underline">Settings</Link></li>
          <li><Link to="/logout" className="hover:underline">Logout</Link></li>
        </ul>
      </nav>

      <div className="flex">
        <aside className="bg-teal-600 text-white p-4 w-full md:w-1/4 md:h-screen">
          <ul className="space-y-4">
            <li><Link to="/manage-projects" className="flex items-center space-x-2"><i className="fas fa-project-diagram"></i><span>Manage Projects</span></Link></li>
            <li><Link to="/view-donations" className="flex items-center space-x-2"><i className="fas fa-donate"></i><span>View Donations</span></Link></li>
            <li><Link to="/generate-reports" className="flex items-center space-x-2"><i className="fas fa-chart-line"></i><span>Generate Reports</span></Link></li>
            <li><Link to="/add-new-project" className="flex items-center space-x-2"><i className="fas fa-plus-circle"></i><span>Add New Project</span></Link></li>
          </ul>
        </aside>

        <main className="p-4 flex-1">
          <section className="mb-8">
            <h2 className="text-xl font-bold text-green-700 mb-4">Project Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 shadow rounded">
                <h3 className="text-lg font-semibold">Project Name 1</h3>
                <p className="text-sm text-gray-600">Location: Amazon Rainforest</p>
                <p className="text-sm text-gray-600">Carbon Credits Offset: 500</p>
                <p className="text-sm text-gray-600">Funding Status: 80%</p>
                <p className="text-sm text-gray-600">Certification Status: Certified</p>
              </div>
              <div className="bg-white p-4 shadow rounded">
                <h3 className="text-lg font-semibold">Project Name 2</h3>
                <p className="text-sm text-gray-600">Location: Sahara Desert</p>
                <p className="text-sm text-gray-600">Carbon Credits Offset: 300 </p>
                <p className="text-sm text-gray-600">Funding Status: 60%</p>
                <p className="text-sm text-gray-600">Certification Status: Pending</p>
              </div>
              <div className="bg-white p-4 shadow rounded">
                <h3 className="text-lg font-semibold">Project Name 3</h3>
                <p className="text-sm text-gray-600">Location: Great Barrier Reef</p>
                <p className="text-sm text-gray-600">Carbon Credits Offset: 200</p>
                <p className="text-sm text-gray-600">Funding Status: 90%</p>
                <p className="text-sm text-gray-600">Certification Status: Certified</p>
              </div>
            </div>
            <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded">Add New Project</button>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-green-700 mb-4">Recent Donations</h2>
            <div className="bg-white p-4 shadow rounded">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left py-2">Donor Name</th>
                    <th className="text-left py-2">Date</th>
                    <th className="text-left py-2">Amount</th>
                    <th className="text-left py-2">Carbon Credits Donated</th>
                    <th className="text-left py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">John Doe</td>
                    <td className="py-2">2023-01-01</td>
                    <td className="py-2">$500</td>
                    <td className="py-2">50</td>
                    <td className="py-2">Completed</td>
                  </tr>
                  <tr>
                    <td className="py-2">Jane Smith</td>
                    <td className="py-2">2023-01-02</td>
                    <td className="py-2">$300</td>
                    <td className="py-2">30</td>
                    <td className="py-2">Pending</td>
                  </tr>
                  <tr>
                    <td className="py-2">Alice Johnson</td>
                    <td className="py-2">2023-01-03</td>
                    <td className="py-2">$200</td>
                    <td className="py-2">20</td>
                    <td className="py-2">Completed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-green-700 mb-4">Impact Summary</h2>
            <div className="bg-white p-4 shadow rounded">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-semibold">1,000 tons</p>
                  <p className="text-sm text-gray-600">Total CO₂ Offset</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold">500</p>
                  <p className="text-sm text-gray-600">Number of Trees Planted</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold">100</p>
                  <p className="text-sm text-gray-600">Community Impact (jobs created)</p>
                </div>
              </div>
              <p className="mt-4 text-center text-lg font-semibold text-green-700">You’ve offset 1,000 tons of CO₂ this year!</p>
            </div>
          </section>
        </main>
      </div>

      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="ml-4 hover:underline">Contact Support</a>
            <a href="#" className="ml -4 hover:underline">Privacy Policy</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:underline"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:underline"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OrganizationsDashboard;