import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CarList from "./components/CarList";
import AddCar from "./components/AddCar";
import PaymentList from "./components/PaymentList";
import PackageList from "./components/PackageList";
import ServicePackageList from "./components/ServicePackageList";
import UserList from "./components/UserList";
import Car from "./pages/Car";

function App() {
  return (
    <BrowserRouter>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/payments" element={<PaymentList />} />
        <Route path="/packages" element={<PackageList />} />
        <Route path="/service-packages" element={<ServicePackageList />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/car" element={<Car />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
