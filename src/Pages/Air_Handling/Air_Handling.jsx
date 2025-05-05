import React from "react"
import Title from "../../Components/Title/Title"
import Subtitle from "../../Components/Subtitle/Subtitle"
import Carousel from "../../Components/Carousel/Carousel"
import Linked_Tertiary_Heading from "../../Components/Linked_Tertiary_Heading/Linked_Tertiary_Heading"
import Text_Box from "../../Components/Text_Box/Text_Box"

const Air_Handling = () => {
  const title = "Statické"
  const subtitle = "Vzduchotechnika"
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
      src: `${process.env.PUBLIC_URL}/img/air_handling_1920_1080.jpg`,
      text: "SUŠÁRNA MLÉKA",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/air_handling_b_1920_1080.jpg`,
      text: "VĚTRÁNÍ ELEKTRÁRNY LEDVICE",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/air_handling_c_1920_1080.jpg`,
      text: "SUŠÍCÍ PECE - TATRA METALURGIE",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/air_handling_d_1920_1080.jpg`,
      text: "VYPALOVACÍ PECE - TATRA TRUCKS",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/air_handling_e_1920_1080.jpg`,
      text: "SUŠÍCÍ PECE - TATRA TRUCKS",
    },
  ]

  const text =
    "Dodáváme a instalujeme vzduchotechnické jednotky včetně přímotopných, nepřímotopných a s rekuperací tepla, zajišťujeme kompletní potrubní rozvody pro efektivní distribuci vzduchu. Součástí našich služeb jsou také přímotopné rotační pece i pece s rekuperací, určené pro náročné provozy s důrazem na účinnost a úsporu energie."

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

export default Air_Handling
