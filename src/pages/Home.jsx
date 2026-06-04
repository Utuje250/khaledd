import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient -to-r from-blue-600 to-cyan-500 flex items-center justify-center">
      <div className="text-center bg-white p-10 rounded-2xl shadow-2xl max-w-lg">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">
          CAR WASH
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Welcome to the Car Wash Management System DESIGNED BY KHALED. Manage cars,
          packages, payments, and service packages easily.
        </p>

        <Link to="/login">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}