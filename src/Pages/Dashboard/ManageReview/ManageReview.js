import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import Rating from "react-rating";

const ManageReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

  // delete
  const handleDelete = (id) => {
    const url = `http://localhost:5000/reviews/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const confirm = window.confirm("Do you Want to Delete?");
        if (confirm) {
          if (data.deletedCount > 0) {
            alert("Review Removed");
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        }
      });
  };

  return (
    <div className="top-service-left-heading">
      <h1 className="text-center my-4">Manage user's Reviews</h1>
      <Container>
        <Table responsive="sm" className="text-center">
          <thead>
            <tr>
              <th>User's name</th>
              <th>User's Rating</th>
              <th>User's Review</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review?._id}>
                <td>{review?.name}</td>
                <td>
                  <Rating
                    className="rating-color"
                    initialRating={review?.ratings}
                    readonly
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star "
                  ></Rating>
                </td>
                <td>{review?.review}</td>
                <td>
                  <Button
                    variant="danger mx-2"
                    onClick={() => handleDelete(review._id)}
                  >
                    Delete
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

export default ManageReview;
