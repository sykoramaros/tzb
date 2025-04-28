import React from "react"
import Title from "../../Components/Title/Title"
import Carousel from "../../Components/Carousel/Carousel"
import Partnership_Card from "../../Components/Partnership_Card/Partnership_Card"

const Home = () => {
  const title = "Home"

  const pictures = [
    // {
    //   src: `${process.env.PUBLIC_URL}/img/main_vyroba-a-pronajem-mobilnich-kotelen.png`,
    //   text: "Výroba a pronájem mobilních kotelen",
    // },
    // {
    //   src: `${process.env.PUBLIC_URL}/img/TND_kotelna-2-x-3t-pary-scaled.jpg`,
    //   text: "TND kotelna",
    // },
    // {
    //   src: `${process.env.PUBLIC_URL}/img/realizace_ref_1.png`,
    //   text: "Výměník",
    // },
    {
      src: `${process.env.PUBLIC_URL}/img/800_600.png`,
      text: "800 x 600",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/1024_768.png`,
      text: "1024 x 768",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/1920_1080.png`,
      text: "1920 x 1080",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/2560_1440.png`,
      text: "2560 x 1440",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/120_120.png`,
      text: "120 x 120",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/250_250.png`,
      text: "250 x 250",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/800_600w.png`,
      text: "800 x 600w",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/1024_768w.png`,
      text: "1024 x 768w",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/1920_1080w.png`,
      text: "1920 x 1080w",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/2560_1440w.png`,
      text: "2560 x 1440w",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/120_120w.png`,
      text: "120 x 120w",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/250_250w.png`,
      text: "250 x 250w",
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
