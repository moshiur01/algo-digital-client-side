import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

const ManageOrder = () => {
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  console.log(orders);

  // delete
  const handleDelete = (id) => {
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const confirm = window.confirm("Do you Want to Delete?");
        if (confirm) {
          if (data.deletedCount > 0) {
            alert("order Deleted");
            const remaining = orders.filter((order) => order._id !== id);
            setOrder(remaining);
          }
        }
      });
  };

  // update status

  const handleConfirm = (id) => {
    localStorage.setItem("status", id);
    const confirm = window.confirm("Do you want to confirm?");
    if (confirm) {
      alert("Order Confirmed");
      const remaining = orders.filter((order) => order._id !== id);
      setOrder(remaining);
    }
  };

  return (
    <div className="make-admin-footer">
      <Container className="top-service-left-heading text-center my-5 ">
        <h1>Manage Orders</h1>
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
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
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
                  <Button
                    variant="success"
                    className="ms-2"
                    onClick={() => handleConfirm(order._id)}
                  >
                    Confirm
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ManageOrder;
