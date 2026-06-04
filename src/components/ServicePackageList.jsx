import { useEffect, useState } from "react";
import axios from "axios";

function ServicePackageList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/servicepackage")
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Service Packages</h2>
      <ul>
        {services.map(s => (
          <li key={s.recordno}>
            {s.recordno} - {s.servicedate} - {s.packageno} - {s.plakeno}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicePackageList;
