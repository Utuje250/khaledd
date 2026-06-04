import CarList from "../components/CarList";

function Car() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="bg-white rounded-xl shadow-md p-6">

        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Cars Page
        </h1>

        <CarList />

      </div>

    </div>
  );
}

export default Car;