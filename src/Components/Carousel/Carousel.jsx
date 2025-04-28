import React from "react"
import "./Carousel.css"

const Carousel = ({ picture }) => {
  const slider = picture

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
            {slider.map((sld, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel
