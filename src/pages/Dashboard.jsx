import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <header className="bg-blue-600 text-white p-5 shadow-md">
        <h1 className="text-3xl font-bold">
          Car Wash Dashboard
        </h1>
      </header>

      <div className="max-w-6xl mx-auto p-6">

        {/* WELCOME CARD */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">

          <h2 className="text-2xl font-bold text-gray-800">
            Welcome to your Dashboard
          </h2>

          <p className="text-gray-600 mt-2">
            Manage Cars, Payments, Packages and Service Packages.
          </p>

        </div>

        {/* MENU CARDS */}
        <div className="grid md:grid-cols-2 gap-4">

          <Link
            to="/car"
            className="bg-white p-5 rounded-xl shadow hover:bg-blue-50 transition"
          >
            🚗 Cars
          </Link>

          <Link
            to="/payments"
            className="bg-white p-5 rounded-xl shadow hover:bg-blue-50 transition"
          >
            💳 Payments
          </Link>

          <Link
            to="/packages"
            className="bg-white p-5 rounded-xl shadow hover:bg-blue-50 transition"
          >
            📦 Packages
          </Link>

          <Link
            to="/service-packages"
            className="bg-white p-5 rounded-xl shadow hover:bg-blue-50 transition"
          >
            🛠️ Service Packages
          </Link>

          <Link
            to="/users"
            className="bg-white p-5 rounded-xl shadow hover:bg-blue-50 transition"
          >
            👤 Users
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;