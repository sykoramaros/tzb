import React from "react"
import Title from "../../Components/Title/Title"
import Subtitle from "../../Components/Subtitle/Subtitle"
import Carousel from "../../Components/Carousel/Carousel"
import LinkedTertiaryHeading from "../../Components/LinkedTertiaryHeading/LinkedTertiaryHeading"
import TextBox from "../../Components/TextBox/TextBox"

const StationaryHeatExchangerStation = () => {
  const title = "Statické"
  const subtitle = "Výměnikové stanice"
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
      src: `${process.env.PUBLIC_URL}/img/exchanger_1920_1080.jpg`,
      text: "ROZVODY TEPLA PRO VYTÁPĚNÍ A TUV",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/exchanger_b_1920_1080.jpg`,
      text: "TV VÝMĚNÍKOVÁ STANICE PRO TG OHŘEV",
    },
  ]

  const text =
    "Navrhujeme a realizujeme výměníkové stanice pro parní, horkovodní i teplovodní systémy, které slouží k efektivnímu přenosu tepla z centrálních zdrojů do lokálních topných a technologických rozvodů. Díky přesnému řízení a moderním technologiím zajišťují spolehlivý provoz a úsporné hospodaření s energií."

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

export default StationaryHeatExchangerStation
