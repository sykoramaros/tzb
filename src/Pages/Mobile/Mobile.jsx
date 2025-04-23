import React from "react"
import Title from "../../Components/Title/Title"
import Subtitle from "../../Components/Subtitle/Subtitle"
import Carousel from "../../Components/Carousel/Carousel"
import Linked_Tertiary_Heading from "../../Components/Linked_Tertiary_Heading/Linked_Tertiary_Heading"

const Mobile = () => {
  const title = "Mobilní"
  const subtitle = "Kotelny"
  const linked_tertiary_heading = "Projekce"

  const pictures = [
    {
      src: `https://placehold.co/600x400`,
      text: "Výroba a pronájem mobilních kotelen",
    },
    {
      src: `https://placehold.co/600x400@2x.png`,
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
      <div className="pt-2 pb-5">
        <Linked_Tertiary_Heading
          linked_tertiary_heading={linked_tertiary_heading}
        />
      </div>
    </>
  )
}

export default Mobile
