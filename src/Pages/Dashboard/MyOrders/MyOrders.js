import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch("https://fathomless-falls-37027.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // filter orders by user email
  useEffect(() => {
    const found = orders.filter((order) => order?.email === user.email);
    setMyOrders(found);
  }, [orders, user.email]);

  //   handle delete order by user

  const handleDelete = (id) => {
    const url = `https://fathomless-falls-37027.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const confirm = window.confirm("DO you Want to Delete?");
        if (confirm) {
          if (data.deletedCount > 0) {
            alert("order Deleted");
            const remaining = myOrders.filter((order) => order._id !== id);
            setMyOrders(remaining);
          }
        }
      });
  };
  // update status
  const orderStatus = localStorage.getItem("status");

  return (
    <div className="make-admin-footer">
      <Container className="top-service-left-heading text-center">
        <h1>My Orders</h1>
      </Container>

      <Container className="">
        <Table responsive="sm" className="text-center">
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Email</th>
              <th>Service Name</th>
              <th>phone Number</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order) => (
              <tr className="align-items-center" key={order._id}>
                <td>{order?.name}</td>
                <td>{order?.email}</td>
                <td>{order?.serviceName}</td>
                <td>{order?.phoneNumber}</td>

                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(order._id)}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  {order._id === orderStatus ? (
                    <span className="text-success">Service Delivered</span>
                  ) : (
                    <span className="text-info">Pending</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MyOrders;
