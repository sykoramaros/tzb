import React from "react"
import Title from "../../Components/Title/Title"
import Subtitle from "../../Components/Subtitle/Subtitle"
import Carousel from "../../Components/Carousel/Carousel"
import Linked_Tertiary_Heading from "../../Components/Linked_Tertiary_Heading/Linked_Tertiary_Heading"

const Stationary_Heat_Exchanger_Station = () => {
  const title = "Statické"
  const subtitle = "Výměnikové stanice"
  const linked_tertiary_heading = "Projekce"

  const pictures = [
    {
      src: `${process.env.PUBLIC_URL}/img/main_vyroba-a-pronajem-mobilnich-kotelen.png`,
      text: "Výroba a pronájem mobilních kotelen",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/TND_kotelna-2-x-3t-pary-scaled.jpg`,
      text: "TND kotelna",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/realizace_ref_1.png`,
      text: "Výměník",
    },
  ]

  return (
    <>
      <div className="bg-light-gray pb-1">
        <Title title={title} />
      </div>
      <div className="pb-1">
        <Subtitle subtitle={subtitle} />
      </div>
      <div
        className="mx-auto h-34 bg-light-gray"
        style={{ overflow: "hidden" }}
      >
        <Carousel picture={pictures} />
      </div>

      <div className="pt-3 pb-5">
        <Linked_Tertiary_Heading
          linked_tertiary_heading={linked_tertiary_heading}
        />
      </div>
    </>
  )
}

export default Stationary_Heat_Exchanger_Station
