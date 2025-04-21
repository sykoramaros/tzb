import React from "react"
import Title from "../../Components/Title/Title"
import Carousel from "../../Components/Carousel/Carousel"

const Home = () => {
  const title = "Home"

  const pictures = [
    {
      src: `${process.env.PUBLIC_URL}/img/main_vyroba-a-pronajem-mobilnich-kotelen.png`,
      text: "Výroba a pronájem mobilních kotelen",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/TND_kotelna-2-x-3t-pary-scaled.jpg`,
      text: "TND kotelna",
    },
  ]

  return (
    <>
      <div className="bg-light-gray">
        <Title title={title} />
      </div>
      <div
        className="mx-auto h-21 bg-light-gray"
        style={{ overflow: "hidden" }}
      >
        <Carousel picture={pictures} />
      </div>
      <div className="bg-white my-5">
        <h2 className="text-end gray font-5 fw-semibold me-1">
          <span className="green">All</span>-in one services from one <span className="green">provider</span>
        </h2>
      </div>
    </>
  )
}

export default Home
