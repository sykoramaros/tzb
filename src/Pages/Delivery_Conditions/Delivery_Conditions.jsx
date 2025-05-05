import React from "react"
import Title from "../../Components/Title/Title"
import Subtitle from "../../Components/Subtitle/Subtitle"
import Subtitled_Article from "../../Components/Subtitled_Article/Subtitled_Article"

const title = "Mobilní"

const subtitle_1 = "Dodací podmínky"

const delivery_conditions = [
  {
    subtitle: "DAP",
    article:
      "Delivered at place – s dodáním na ujednané místo určení – dle INCOTERMS 2010, riziko i přepravní náklady přechází z prodávajícího na kupujícího okamžikem, kdy prodávající dá produkt k dispozici kupujícímu na příchozím prostředku připravené k vykládce v ujednaném místě určení, importní celní odbavení včetně nákladů na clo je již na riziko a náklady kupujícího",
  },
]

const duties = [
  {
    subtitle: "PODLOŽÍ",
    article:
      "příprava pevného podloží pro instalaci produktu o hmotnosti cca 10 až 15 tun (panely, betonové patky, asfaltová plocha atd.)",
  },
  {
    subtitle: "VYLOŽENÍ",
    article:
      "produktu z vozidla v místě plnění, zajištění jeřábu s nosností min. 28 tun",
  },
  {
    subtitle: "NAPOJENÍ MÉDIÍ",
    article:
      "připojení produktu na jednotlivá média, naplnění produktu médií, 100% připravenost ke zprovoznění servisem",
  },
  {
    subtitle: "PROVOZNÍ MÉDIA",
    article:
      "zajištění médii potřebných k provozu (palivo, elektřina, voda, chemie, provoz GSM zařízení pro vyhodnocování poruchových stavů a provoz internetu pro dálkové napojení)",
  },
  {
    subtitle: "LEGISLATIVA",
    article: "stavební povolení nebo povolení k provozu",
  },
]

const guarantee = [
  {
    subtitle: "ZÁRUKA",
    article:
      "2 roky s podmínkou, že dispečink výrobce bude dálkově napojen na produkt, aby bylo možné provádět dálkové poradenství a kontrolu produktu",
  },
]

const startup = [
  {
    subtitle: "ZPROVOZNĚNÍ",
    article: "produktu zajistí prodávající v místě plnění",
  },
  {
    subtitle: "SERVIS",
    article:
      "je zajištěn vlastními pracovníky nebo smluvními partnery, dle typu produktu",
  },
  {
    subtitle: "ŠÉFMONTÁŽ",
    article: "lze na přání zajistit – samostatná cena",
  },
]

const payment_terms = [
  {
    subtitle: "BĚŽNÝ PRODEJ",
    article: "1. záloha 45%, 2. faktura po převzetí 45%, po zprovoznění 10%",
  },
]

const schedule = [
  {
    subtitle: "TERMÍN DODÁNÍ - (TEPLOVODNÍ)",
    article:
      "15 – 25 týdnů dle typu produktu od podpisu smlouvy a od zaplacení zálohy",
  },
  {
    subtitle: "TERMÍN DODÁNÍ - (PARNÍ)",
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
    </>
  )
}

export default Delivery_Conditions
