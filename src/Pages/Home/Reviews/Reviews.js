import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "./Reviews.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Rating from "react-rating";
import AOS from "aos";
import "aos/dist/aos.css";

const Reviews = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://fathomless-falls-37027.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div
      className="mx-auto "
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <h1 className="we-re-about-me user-reviews">User reviews</h1>
      <Container className="text-center">
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            200: {
              width: 200,
              slidesPerView: 1,
              spaceBetween: 50,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {reviews.map((review) => (
            <SwiperSlide>
              <Card style={{ width: "18rem" }} className="review-card">
                <Card.Img
                  variant="top"
                  src={review?.image}
                  className="img-fluid review-img mx-auto my-2"
                />
                <Card.Body>
                  <Card.Title>{review?.name}</Card.Title>
                  <Card.Text>{review?.review}</Card.Text>
                  <Rating
                    className="rating-color"
                    initialRating={review?.ratings}
                    readonly
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star "
                  ></Rating>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Reviews;
