import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BusinessDashboard = () => {
  const location = useLocation();
  const businessName = location.state?.businessName;

  if (!businessName) {
    return <div>Business name not found</div>;
  }

  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-700">
            Welcome, {businessName}!
          </h1>
          <nav className="flex space-x-4">
            <Link className="text-gray-700 hover:text-green-700" to="/dashboard">
              Dashboard
            </Link>
            <Link className="text-gray-700 hover:text-green-700" to="/transactions">
              Transactions
            </Link>
            <Link className="text-gray-700 hover:text-green-700" to="/portfolio">
              Portfolio
            </Link>
            <Link className="text-gray-700 hover:text-green-700" to="/reports">
              Reports
            </Link>
            <Link className="text-gray-700 hover:text-green-700" to="/settings">
              Settings
            </Link>
            <Link className="text-gray-700 hover:text-green-700" to="/logout">
              Logout
            </Link>
          </nav>
        </div>
      </header>
      {/* ... rest of your code */}
      <main className="max-w-7xl mx-auto p-6">
        <section className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-xl font-bold text-gray-700">Total Carbon Credits</h2>
              <p className="text-2xl font-bold text-green-700">1,500 Credits</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-xl font-bold text-gray-700">CO₂ Offset</h2>
              <p className="text-2xl font-bold text-green-700">2,300 Tons</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-xl font-bold text-gray-700">Pending Transactions</h2>
              <p className="text-2xl font-bold text-green-700">4</p>
            </div>
          </div>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Carbon Credit Overview</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img
              alt="Line chart showing carbon credit transactions over time"
              className="w-full"
              height="300"
              src="https://storage.googleapis.com/a1aa/image/Tvfc5Nu0UMRrOSGC8CKL49hWp5Vax8ZKBgNVAlskpjIaax8JA.jpg"
              width="600"
            />
          </div>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Recent Transactions</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Type</th>
                  <th className="px-4 py-2 text-left">Credits</th>
                  <th className="px-4 py-2 text-left">Amount</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">2023-10-01</td>
                  <td className="border px-4 py-2">Purchase</td>
                  <td className="border px-4 py-2">100</td>
                  <td className="border px-4 py-2">$1,000</td>
                  <td className="border px-4 py-2">Completed</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2023-09-25</td>
                  <td className="border px-4 py-2">Sale</td>
                  <td className="border px-4 py-2">50</td>
                  <td className="border px-4 py-2">$500</td>
                  <td className="border px-4 py-2">Pending</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2023-09-20</td>
                  <td className="border px-4 py-2">Donation</td>
                  <td className="border px-4 py-2">30</td>
                  <td className="border px-4 py-2">$300</td>
                  <td className="border px-4 py-2">Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Impact Summary</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <p className="text-lg text-gray-700">
              You've offset the equivalent of
              <span className="font-bold text-green-700"> 500 cars off the road this year!</span>
            </p>
            <div className="mt-4">
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                1000 Tons Offset Achiever
              </span>
            </div>
          </div>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Portfolio Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-xl font-bold text-gray-700">Project A</h3>
              <p className="text-gray-700">Location: Amazon Rainforest</p>
              <p className="text-gray-700">Carbon Credits Earned: 500</p>
              <p className="text-gray-700">Certification Status: Verified</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-xl font-bold text-gray-700">Project B</h3>
              <p className="text-gray-700">Location: Sahara Desert</p>
              <p className="text-gray-700">Carbon Credits Earned: 300</p>
              <p className="text-gray-700">Certification Status: Pending</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-xl font-bold text-gray-700">Project C</h3>
              <p className="text-gray-700">Location: Great Barrier Reef</p>
              <p className="text-gray-700">Carbon Credits Earned: 200</p>
              <p className="text-gray-700">Certification Status: Verified</p>
            </div>
          </div>
        </section>
        <section className="mb-6">
          <div className="flex space-x-4">
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
              Buy More Credits
            </button>
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
              Sell Credits
            </button>
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
              Donate Now
            </button>
          </div>
        </section>
      </main>
      <footer className="bg-white shadow-md p-4 mt-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <a className="text-gray-700 hover:text-green-700" href="#">
              Help Center
            </a>
            <a className="text-gray-700 hover:text-green-700" href="#">
              Contact Support
            </a>
            <a className="text-gray-700 hover:text-green-700" href="#">
              Privacy Policy
            </a>
          </div>
          <div className="flex space-x-4">
            <a className="text-gray-700 hover:text-green-700" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="text-gray-700 hover:text-green-700" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="text-gray-700 hover:text-green-700" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BusinessDashboard;