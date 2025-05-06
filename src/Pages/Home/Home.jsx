import React from "react"
import Title from "../../Components/Title/Title"
import Carousel from "../../Components/Carousel/Carousel"
import PartnershipCard from "../../Components/PartnershipCard/PartnershipCard"

const Home = () => {
  const title = "Home"

  const pictures = [
    {
      src: `${process.env.PUBLIC_URL}/img/tnd_boiler_1920_1080.jpg`,
      text: "",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/branch_1920_1080.jpg`,
      text: "",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/mobile_boiler_1920_1080.jpg`,
      text: "",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/mobile_boiler_j_1920_1080.jpg`,
      text: "",
    },
  ]

  const partnerships = [
    {
      src: `${process.env.PUBLIC_URL}/img/tatra.jpg`,
    },
    {
      src: `${process.env.PUBLIC_URL}/img/tatry.jpg`,
    },
    {
      src: `${process.env.PUBLIC_URL}/img/zdb.jpg`,
    },
    {
      src: `${process.env.PUBLIC_URL}/img/molnlycke.jpg`,
    },
    {
      src: `${process.env.PUBLIC_URL}/img/dpov.jpg`,
    },
    {
      src: `${process.env.PUBLIC_URL}/img/logo.jpg`,
    },
  ]

  return (
    <>
      <div className="">
        <Title title={title} />
      </div>
      <div
        className="mx-auto mt-4 h-34 bg-light-gray"
        style={{ overflow: "hidden" }}
      >
        <Carousel picture={pictures} />
      </div>
      <div className="bg-white my-5">
        <h2 className="text-end gray font-5 fw-semibold me-3">
          <span className="green">All</span>-in one services from one{" "}
          <span className="green">provider</span>
        </h2>
        <br />
        <div className="container mt-5 px-4 px-sm-0">
          <div className="row row-cols-2 row-cols-md-3 g-5 py-5">
            {partnerships.map((partnerships, index) => (
              <div key={index}>
                <PartnershipCard partnership={partnerships} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
