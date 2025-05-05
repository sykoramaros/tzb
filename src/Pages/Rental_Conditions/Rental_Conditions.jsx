import React from "react"
import Title from "../../Components/Title/Title"
import Subtitle from "../../Components/Subtitle/Subtitle"
import Subtitled_Article from "../../Components/Subtitled_Article/Subtitled_Article"
import Tertiary_Heading from "../../Components/Tertiary_Heading/Tertiary_Heading"
import Linked_Tertiary_Heading from "../../Components/Linked_Tertiary_Heading/Linked_Tertiary_Heading"

const title = "Mobilní"

const subtitle_1 = "Podmínky pronájmu"

const subtitle_process = "Postup"

const subtitle_rental_conditions = "Podmínky"

const linked_tertiary_delivery_conditions_heading = {
  title: "Dodání",
  link: "/delivery-conditions",
}

const rental_process = [
  {
    subtitle: "Dotazník",
    article: "ZÁJEMCE vyplní dotazník a odešle e-mailem",
  },
  {
    subtitle: "Nabídka",
    article:
      "TZB ORLOVÁ zjistí ve svém harmonogramu možnosti a zašle ZÁJEMCI e-mailem nabídku nebo případné odmítnutí",
  },
  {
    subtitle: "Rezervace",
    article:
      "nabídka je platná 15 dnů, v harmonogramu je provedena rezervace nabízené MK",
  },
]

const rental_conditions = [
  {
    subtitle: "Objednávka",
    article:
      "pronájem MK doporučujeme sjednávat s velkým předstihem, kapacity kotelen jsou omezeny",
  },
  {
    subtitle: "Cena",
    article: "cena se odvíjí od vybraného typu kotelny a délky období pronájmu",
  },
  {
    subtitle: "V ceně je zahrnuto",
    article:
      "– první zprovoznění předmětu nájmu, zaškolení obsluhy, – poruchový servis 24 hodin denně, – pojištění MK proti živelným pohromám, – pravidelná servisní prohlídka, revize a servis MK",
  },
  {
    subtitle: "Odpovědnost zájemce",
    article:
      "– příprava podloží pro instalaci MK, – instalace MK na místo, připojení na jednotlivá média, – transport MK na místo plnění včetně vykládky, – obsluhování provozu MK, – provozní média (palivo, elektřina, provoz GSM zařízení pro vyhodnocování poruchových stavů apod.)",
  },
]

const Rental_Conditions = () => {
  return (
    <>
      <div className="">
        <Title title={title} />
      </div>

      <div className="container">
        <div className="">
          <Subtitle subtitle={subtitle_1} />
        </div>

        <div className="mx-4">
          <Tertiary_Heading title={subtitle_process} />
        </div>

        <div className="mx-5 mt-4">
          {rental_process.map((item, index) => (
            <Subtitled_Article
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="mx-4">
          <Tertiary_Heading title={subtitle_rental_conditions} />
        </div>

        <div className="mx-5 mt-4">
          {rental_conditions.map((item, index) => (
            <Subtitled_Article
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="pt-2 pb-5">
          <Linked_Tertiary_Heading
            title={linked_tertiary_delivery_conditions_heading.title}
            link={linked_tertiary_delivery_conditions_heading.link}
          />
        </div>
      </div>
    </>
  )
}

export default Rental_Conditions
