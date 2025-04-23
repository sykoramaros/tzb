import React from "react"
import "./Carousel.css"

const Carousel = ({ picture }) => {
  return (
    <>
      <div className="carousel-container">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide h-100"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {picture.map((pic, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <span className="ms-2 mt-1 px-2 bg-white text-black bg-opacity-75 font-5 fw-medium rounded-1 position-absolute top-0 start-0 z-1">
                  {pic.text}
                </span>
                <div className="d-flex justify-content-center align-items-center h-100">
                  <img src={pic.src} className="carousel-img" alt={pic.alt} />
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel
