import axios from "axios";
import React from "react";
import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./AddReview.css";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    let image = { image: user.photoURL };

    let finalData = { ...data, ...image };

    axios.post("http://localhost:5000/reviews", finalData).then((res) => {
      if (res.data.insertedId) {
        alert("Thank You for Your Valuable Review");
        reset();
      }
    });

    console.log(finalData);
  };

  return (
    <div className="top-service-left-heading">
      <h1 className="text-center my-4">Add A Review</h1>

      <Container>
        <form onSubmit={handleSubmit(onSubmit)} className="user-review-form">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={user.displayName}
                  className="form-control m-2"
                  id="name"
                  placeholder="Name"
                  required="required"
                  {...register("name")}
                />
              </div>
            </div>

            <div className="col-md-6 my-2 ms-2">
              <div className="form-group in_email">
                <Form.Select
                  aria-label="Default select example"
                  {...register("ratings")}
                  required
                >
                  <option>Rate your Number</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3.5">3.5</option>
                  <option value="4">4</option>
                  <option value="4.5">4.5</option>
                  <option value="5">5</option>
                </Form.Select>
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group in_message">
                <textarea
                  name="text"
                  className="form-control ms-2 ser-details-text"
                  id="address"
                  placeholder="write Your Review"
                  required="required"
                  {...register("review")}
                ></textarea>
              </div>
              <div className="text-center my-2">
                <button
                  input
                  type="submit"
                  className="top-service-button mt-sm-4"
                >
                  <span>Add Review</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddReview;
