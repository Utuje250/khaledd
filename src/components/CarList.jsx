import { useEffect, useState } from "react";
import axios from "axios";

function CarList() {
  const [cars, setCars] = useState([]);

  // =========================
  // FETCH ALL CARS
  // =========================
  const fetchCars = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/car"
      );

      setCars(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  // =========================
  // DELETE CAR
  // =========================
  const deleteCar = async (plakeno) => {
    try {
      await axios.delete(
        `http://localhost:5000/car/${plakeno}`
      );

      alert("Car deleted successfully");

      fetchCars();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-6">

      <h2 className="text-3xl font-bold text-blue-700 mb-6">
        Cars List
      </h2>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">

        <table className="w-full border-collapse">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4 text-left">
                Plate No
              </th>

              <th className="p-4 text-left">
                Car Type
              </th>

              <th className="p-4 text-left">
                Driver Name
              </th>

              <th className="p-4 text-left">
                Phone
              </th>

              <th className="p-4 text-left">
                Car Size
              </th>

              <th className="p-4 text-center">
                Actions
              </th>
            </tr>

          </thead>

          <tbody>

            {cars.length > 0 ? (
              cars.map((car) => (

                <tr
                  key={car.plakeno}
                  className="border-b hover:bg-gray-100"
                >

                  <td className="p-4">
                    {car.plakeno}
                  </td>

                  <td className="p-4">
                    {car.cartype}
                  </td>

                  <td className="p-4">
                    {car.drivername}
                  </td>

                  <td className="p-4">
                    {car.phone}
                  </td>

                  <td className="p-4">
                    {car.carsize}
                  </td>

                  <td className="p-4 flex gap-2 justify-center">

                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteCar(car.plakeno)
                      }
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center p-6 text-gray-500"
                >
                  No cars found
                </td>
              </tr>
            )}

          </tbody>

        </table>
      </div>
    </div>
  );
}

export default CarList;