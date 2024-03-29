import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddServices = () => {
  const [imageData, setImageData] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  function encodeImageFileAsURL(target) {
    const filePost = target;
    const readerPost = new FileReader();
    readerPost.onloadend = function () {
      setImageData(readerPost.result);
    };
    readerPost.readAsDataURL(filePost);
  }
  // console.log(imageData);

  const onSubmit = (data) => {
    const image = { img: imageData };

    const finalData = { ...data, ...image };
    axios
      .post("https://digital-service-server-moshiur01.vercel.app/services", finalData)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully Added A New Service");
          reset();
        }
      });
    // console.log(finalData);
  };

  return (
    <div className="top-service-left-heading make-admin-footer">
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
                  type="file"
                  name="img"
                  placeholder="Upload Service Image"
                  className="form-control  m-2"
                  id="name"
                  required="required"
                  onChange={(e) => {
                    encodeImageFileAsURL(e.target.files[0]);
                  }}
                  // {...register("img")}
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
