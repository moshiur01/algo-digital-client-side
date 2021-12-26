import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

const ManageServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // delete
  const handleDelete = (id) => {
    const url = `http://localhost:5000/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const confirm = window.confirm("Do you Want to Delete?");
        if (confirm) {
          if (data.deletedCount > 0) {
            alert("Car Deleted");
            const remaining = services.filter((car) => car._id !== id);
            setServices(remaining);
          }
        }
      });
  };

  return (
    <Container className="mt-5">
      <Table responsive="sm" className="text-center">
        <thead>
          <tr>
            <th>Service Img</th>
            <th>Service name</th>
            <th>Service ID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service?.key}>
              <td>
                <img
                  src={service?.img}
                  className="img-fluid "
                  style={{ width: "10rem" }}
                  alt=""
                />
              </td>
              <td>{service?.name}</td>
              <td>{service?._id}</td>

              <td>
                <Button
                  variant="danger mx-2"
                  onClick={() => handleDelete(service._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ManageServices;
