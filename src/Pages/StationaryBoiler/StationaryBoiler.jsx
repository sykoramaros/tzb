import React from "react"
import Title from "../../Components/Title/Title"
import Subtitle from "../../Components/Subtitle/Subtitle"
import Carousel from "../../Components/Carousel/Carousel"
import LinkedTertiaryHeading from "../../Components/LinkedTertiaryHeading/LinkedTertiaryHeading"
import TextBox from "../../Components/TextBox/TextBox"

const StationaryBoiler = () => {
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
        <LinkedTertiaryHeading
          title={linked_tertiary_heading.title}
          link={linked_tertiary_heading.link}
        />
      </div>
      <div className="">
        <TextBox text={text} />
      </div>
    </>
  )
}

export default StationaryBoiler
