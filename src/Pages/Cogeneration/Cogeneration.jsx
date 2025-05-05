import React from "react"
import Title from "../../Components/Title/Title"
import Subtitle from "../../Components/Subtitle/Subtitle"
import Carousel from "../../Components/Carousel/Carousel"
import Linked_Tertiary_Heading from "../../Components/Linked_Tertiary_Heading/Linked_Tertiary_Heading"
import Text_Box from "../../Components/Text_Box/Text_Box"

const Cogeneration = () => {
  const title = "Statické"
  const subtitle = "Kogenerace"
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
      src: `${process.env.PUBLIC_URL}/img/cogeneration_unit_1920_1080.jpg`,
      text: "KOGENERAČNÍ JEDNOTKA - TYLEX Letovice ",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/cogeneration_unit_b_1920_1080.jpg`,
      text: "MIKRO – KOGENERAČNÍ JEDNOTKA SMO městská a.s.",
    },
  ]

  const text =
    "Zajišťujeme řešení pro kogeneraci – kombinovanou výrobu elektřiny a tepla, která umožňuje efektivní využití paliva a snížení energetických nákladů. Tento způsob výroby je ideální pro objekty s trvalou spotřebou tepla a přispívá k energetické soběstačnosti a ekologickému provozu."

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

export default Cogeneration
