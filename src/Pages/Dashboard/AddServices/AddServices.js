import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios.post("http://localhost:5000/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("Successfully Added A New Service");
        reset();
      }
    });

    console.log(data);
  };

  return (
    <div className="top-service-left-heading">
      <h1 className="text-center my-4">Add A New Service</h1>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control m-2"
                  id="name"
                  placeholder="Service Name"
                  required="required"
                  {...register("name")}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group in_email">
                <input
                  type="name"
                  name="name"
                  className="form-control  m-2"
                  id="name"
                  placeholder="Image Url"
                  required="required"
                  {...register("img")}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group in_email">
                <input
                  type="text"
                  name="text"
                  className="form-control  m-2"
                  id="phone"
                  placeholder="Heading of Service"
                  required="required"
                  {...register("bannerh")}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group in_email">
                <input
                  type="text"
                  name="serviceName"
                  className="form-control  m-2"
                  placeholder="Sub heading of Service"
                  required="required"
                  {...register("bannerP")}
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group in_message">
                <textarea
                  name="text"
                  className="form-control ms-2 ser-details-text"
                  id="address"
                  placeholder="write Description About service"
                  required="required"
                  {...register("des")}
                ></textarea>
              </div>
              <div className="text-center my-2">
                <button
                  input
                  type="submit"
                  className="top-service-button mt-sm-4"
                >
                  <span>Add Service</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddServices;
