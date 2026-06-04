import { useEffect, useState } from "react";
import axios from "axios";

function PaymentList() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/payment")
      .then(res => setPayments(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Payments</h2>
      <ul>
        {payments.map(p => (
          <li key={p.paymentno}>
            {p.paymentno} - {p.amountpaid} - {p.paymentdate} - {p.plakeno}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentList;
