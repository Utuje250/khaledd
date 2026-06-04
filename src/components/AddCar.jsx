import { useState } from "react";
import axios from "axios";

function AddCar() {
  const [car, setCar] = useState({
    plakeNumber: "",
    carType: "",
    ownerName: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/car/add",
        car
      );

      alert(res.data.message);

      setCar({
        plakeNumber: "",
        carType: "",
        ownerName: "",
        phone: "",
      });
    } catch (err) {
      alert(
        err.response?.data?.message || "Failed to add car"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Add Car
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="plakeNumber"
            placeholder="Plake Number"
            value={car.plakeNumber}
            onChange={handleChange}
            className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="carType"
            placeholder="Car Type"
            value={car.carType}
            onChange={handleChange}
            className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="ownerName"
            placeholder="Owner Name"
            value={car.ownerName}
            onChange={handleChange}
            className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={car.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
          >
            {loading ? "Adding..." : "Add Car"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddCar;