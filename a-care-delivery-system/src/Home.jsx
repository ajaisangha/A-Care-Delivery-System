import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // path to your firebase.js

const Home = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeliveries = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "delivery_requests"));
        const deliveryList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setDeliveries(deliveryList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching delivery requests: ", error);
      }
    };

    fetchDeliveries();
  }, []);

  if (loading) return <p>Loading delivery requests...</p>;

  return (
    <div>
      <h1>Delivery Requests</h1>
      {deliveries.length === 0 ? (
        <p>No delivery requests found</p>
      ) : (
        <ul>
          {deliveries.map((delivery) => (
            <li key={delivery.id}>
              <strong>{delivery.customerName}</strong> — {delivery.destination} at {delivery.deliveryTime}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
