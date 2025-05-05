import React from "react"
import Title from "../../Components/Title/Title"
import Subtitle from "../../Components/Subtitle/Subtitle"
import Subtitled_Article from "../../Components/Subtitled_Article/Subtitled_Article"
import Linked_Tertiary_Heading from "../../Components/Linked_Tertiary_Heading/Linked_Tertiary_Heading"

const title = "Mobilní"

const subtitle_1 = "Dodací podmínky"

const linked_tertiary_rental_conditions_heading = {
  title: "Pronájem",
  link: "/rental-conditions",
}

const delivery_conditions = [
  {
    subtitle: "DAP",
    article:
      "Delivered at place – s dodáním na ujednané místo určení – dle INCOTERMS 2010, riziko i přepravní náklady přechází z prodávajícího na kupujícího okamžikem, kdy prodávající dá produkt k dispozici kupujícímu na příchozím prostředku připravené k vykládce v ujednaném místě určení, importní celní odbavení včetně nákladů na clo je již na riziko a náklady kupujícího",
  },
]

const duties = [
  {
    subtitle: "Podloží",
    article:
      "příprava pevného podloží pro instalaci produktu o hmotnosti cca 10 až 15 tun (panely, betonové patky, asfaltová plocha atd.)",
  },
  {
    subtitle: "Vyložení",
    article:
      "produktu z vozidla v místě plnění, zajištění jeřábu s nosností min. 28 tun",
  },
  {
    subtitle: "Napojení médií",
    article:
      "připojení produktu na jednotlivá média, naplnění produktu médií, 100% připravenost ke zprovoznění servisem",
  },
  {
    subtitle: "Provozní média",
    article:
      "zajištění médii potřebných k provozu (palivo, elektřina, voda, chemie, provoz GSM zařízení pro vyhodnocování poruchových stavů a provoz internetu pro dálkové napojení)",
  },
  {
    subtitle: "Legislativa",
    article: "stavební povolení nebo povolení k provozu",
  },
]

const guarantee = [
  {
    subtitle: "Záruka",
    article:
      "2 roky s podmínkou, že dispečink výrobce bude dálkově napojen na produkt, aby bylo možné provádět dálkové poradenství a kontrolu produktu",
  },
]

const startup = [
  {
    subtitle: "Zprovoznění",
    article: "produktu zajistí prodávající v místě plnění",
  },
  {
    subtitle: "Servis",
    article:
      "je zajištěn vlastními pracovníky nebo smluvními partnery, dle typu produktu",
  },
  {
    subtitle: "Šéfmontáž",
    article: "lze na přání zajistit – samostatná cena",
  },
]

const payment_terms = [
  {
    subtitle: "Běžný prodej",
    article: "1. záloha 45%, 2. faktura po převzetí 45%, po zprovoznění 10%",
  },
]

const schedule = [
  {
    subtitle: "Termín dodání - (teplovodní)",
    article:
      "15 – 25 týdnů dle typu produktu od podpisu smlouvy a od zaplacení zálohy",
  },
  {
    subtitle: "Termín dodání - (parní)",
    article:
      "20 – 25 týdnů dle typu produktu od podpisu smlouvy a od zaplacení zálohy",
  },
]

const Delivery_Conditions = () => {
  return (
    <>
      <div className="">
        <Title title={title} />
      </div>
      <div className="container">
        <div className="">
          <Subtitle subtitle={subtitle_1} />
        </div>

        <div className="mx-5 mt-4">
          {delivery_conditions.map((item, index) => (
            <Subtitled_Article
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="mx-5 mt-4">
          {duties.map((item, index) => (
            <Subtitled_Article
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="mx-5 mt-4">
          {guarantee.map((item, index) => (
            <Subtitled_Article
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="mx-5 mt-4">
          {startup.map((item, index) => (
            <Subtitled_Article
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="mx-5 mt-4">
          {payment_terms.map((item, index) => (
            <Subtitled_Article
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="mx-5 mt-4">
          {schedule.map((item, index) => (
            <Subtitled_Article
              key={index}
              subtitle={item.subtitle}
              article={item.article}
            />
          ))}
        </div>

        <div className="pt-2 pb-5">
          <Linked_Tertiary_Heading
            title={linked_tertiary_rental_conditions_heading.title}
            link={linked_tertiary_rental_conditions_heading.link}
          />
        </div>
      </div>
    </>
  )
}

export default Delivery_Conditions
