import React, { useState } from 'react';
import { useEffect } from 'react';
import './customers.css';



function Customers() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("/api/customers")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCustomers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message} </div>;
  } else if (!isLoaded) {
    return <div>Loading..</div>
  } else {
    return (
      <div>
          <h2>Customers:</h2>
          <ul>
            {customers.map(customer => (
             <li key={customer.id}>
              {customer.name}
             </li>
          ))}
          </ul>
      </div>
    );
  }
}

export default Customers;
