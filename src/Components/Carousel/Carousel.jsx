import React from "react"
import "./Carousel.css"

const Carousel = ({ picture }) => {
  const slider = picture

  return (
    <>
      <div className="carousel-container">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {picture.map((item, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <span className="carousel-text ms-2 mt-1 me-2 px-2 text-white fs-2 fw-medium rounded-1 position-absolute top-0 start-0 z-1">
                  {item.text}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                  <img src={item.src} className="carousel-img" alt={item.alt} />
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
            {slider.map((item, index) => (
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
