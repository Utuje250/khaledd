import { useEffect, useState } from "react";
import axios from "axios";

function PackageList() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/package")
      .then(res => setPackages(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Packages</h2>
      <ul>
        {packages.map(pkg => (
          <li key={pkg.packageno}>
            {pkg.packageno} - {pkg.packagename} - {pkg.packageprice}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackageList;
