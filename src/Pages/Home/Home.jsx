import React from "react"
import Title from "../../Components/Title/Title"
import Carousel from "../../Components/Carousel/Carousel"
import Partnership_Card from "../../Components/Partnership_Card/Partnership_Card"

const Home = () => {
  const title = "Home"

  const pictures = [
    {
      src: `${process.env.PUBLIC_URL}/img/boiler_b_1920_1080.jpg`,
      text: "1920 x 1080",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/boiler_1920_1080.jpg`,
      text: "1920 x 1080",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/monitoring_a_1920_1080.jpg`,
      text: "1920 x 1080",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/realisation_f_1920_1080.jpg`,
      text: "1920 x 1080",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/gas_boiler_b_1920_1080.jpg`,
      text: "1920 x 1080",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/main_page_1920_1080.jpg`,
      text: "1920 x 1080",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/mobile_boiler_1920_1080.jpg`,
      text: "1920 x 1080",
    },
  ]

  const partnerships = [
    {
      src: `${process.env.PUBLIC_URL}/img/logo.png`,
    },
    {
      src: `${process.env.PUBLIC_URL}/img/tatry-logo.jpg`,
    },
    {
      src: `${process.env.PUBLIC_URL}/img/logo.png`,
    },
    {
      src: `${process.env.PUBLIC_URL}/img/tatry-logo.jpg`,
    },
    {
      src: `${process.env.PUBLIC_URL}/img/logo.png`,
    },
    {
      src: `${process.env.PUBLIC_URL}/img/tatry-logo.jpg`,
    },
  ]

  return (
    <>
      <div className="bg-light-gray pb-1">
        <Title title={title} />
      </div>
      <div
        className="mx-auto h-34 bg-light-gray"
        style={{ overflow: "hidden" }}
      >
        <Carousel picture={pictures} />
      </div>
      <div className="bg-white my-5">
        <h2 className="text-end gray font-5 fw-semibold me-1">
          <span className="green">All</span>-in one services from one{" "}
          <span className="green">provider</span>
        </h2>

        <div className="container my-8 px-4 px-sm-0">
          <div className="row row-cols-2 row-cols-md-3 g-5">
            {partnerships.map((partnerships, index) => (
              <div key={index}>
                <Partnership_Card partnership={partnerships} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
