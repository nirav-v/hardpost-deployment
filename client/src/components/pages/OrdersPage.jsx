import React, { useState, useEffect } from "react";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://gentle-spire-83185-d5ea8d952a7d.herokuapp.com/api/orders")
      .then((res) => res.json())
      .then((orders) => setOrders(orders));
  }, []);

  console.log(orders);

  return (
    <div>
      <h2>your orders</h2>
      {orders.length ? (
        <ul>
          {orders.map((order) => {
            return (
              <li key={order.id}>
                <p>placed: {order.createdAt}</p>
                {order.items.map((item) => (
                  <p key={item.id}>{item.name}</p>
                ))}
              </li>
            );
          })}
        </ul>
      ) : (
        "no orders"
      )}
    </div>
  );
}

export default OrdersPage;
