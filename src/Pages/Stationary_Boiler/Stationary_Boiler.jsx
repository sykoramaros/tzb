import React from "react"
import Title from "../../Components/Title/Title"
import Subtitle from "../../Components/Subtitle/Subtitle"
import Carousel from "../../Components/Carousel/Carousel"
import Linked_Tertiary_Heading from "../../Components/Linked_Tertiary_Heading/Linked_Tertiary_Heading"
import Text_Box from "../../Components/Text_Box/Text_Box"

const Stationary_Boiler = () => {
  const title = "Statické"
  const subtitle = "Kotelny"
  const linked_tertiary_heading = {
    title: "Projekce",
    link: "/project",
  }

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
      src: `${process.env.PUBLIC_URL}/img/gas_boiler_1920_1080.jpg`,
      text: "PLYNOVÁ PARNÍ KOTELNA PRO MLÉKÁRNU",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/monitoring_a_1920_1080.jpg`,
      text: "PLYNOVÁ TV KOTELNA PRO VYTÁPĚNÍ",
    },
  ]

  const text =
    "Navrhujeme a realizujeme kotelny různých typů podle potřeb zákazníka – parní, horkovodní, teplovodní i termoolejové. Zaměřujeme se na efektivní provoz, bezpečnost a optimalizaci energetických nákladů."

  return (
    <>
      <div className="">
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
          title={linked_tertiary_heading.title}
          link={linked_tertiary_heading.link}
        />
      </div>
      <div className="">
        <Text_Box text={text} />
      </div>
    </>
  )
}

export default Stationary_Boiler
