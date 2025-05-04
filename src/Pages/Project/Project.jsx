import React from "react"
import Title from "../../Components/Title/Title"
import Subtitle from "../../Components/Subtitle/Subtitle"
import Left_Picture_Article from "../../Components/Left_Picture_Article/Left_Picture_Article"
import Right_Picture_Article from "../../Components/Right_Picture_Article/Right_Picture_Article"
import Left_Picture_List from "../../Components/Left_Picture_List/Left_Picture_List"
import Right_Picture_List from "../../Components/Right_Picture_List/Right_Picture_List"

const Project = () => {
  const title = "Statické"
  const subtitle = "Projekce"

  const article1 = {
    header: "Studie a projekty",
    paragraph:
      "Zajišťujeme kompletní zpracování studií a projektové dokumentace včetně získání všech potřebných vyjádření od dotčených orgánů a správců sítí. Díky našim zkušenostem a znalosti místních podmínek nabízíme efektivní a spolehlivé řešení pro každý projekt.",
    src: `${process.env.PUBLIC_URL}/img/scheme_1920_1080.jpg`,
  }

  const article2 = {
    header: "Povolení",
    paragraph:
      "Zabezpečujeme veškeré náležitosti potřebné pro získání stavebního povolení, včetně přípravy dokumentace a jednání s příslušnými úřady. Celý proces vyřídíme profesionálně a bez zbytečných průtahů.",
    src: `${process.env.PUBLIC_URL}/img/projection_1920_1080.jpg`,
  }

  const list1 = {
    header: "Studie a projekty",
    list: [
      {
        list_header: "Studie",
        list_item: "koncepce tepelného hospodářství",
      },
      {
        list_header: "DUR",
        list_item: "dokumentace pro územní řízení",
      },
      {
        list_header: "DSP",
        list_item: "dokumentace pro stavební povolení",
      },
      {
        list_header: "DPS",
        list_item: "dokumentace pro provedení stavby",
      },
      {
        list_header: "DSPS",
        list_item: "dokumentace skutečného provedení stavby",
      },
      {
        list_header: "3D projekty",
        list_item: "u složitých celků (VZT, zdroje tepla apod.)",
      },
      {
        list_header: "Diagnostika",
        list_item: "měření na současném stavu (průtoky apod.)",
      },
    ],
    src: `${process.env.PUBLIC_URL}/img/studies_projects_1920_1080.jpg`,
  }
  const list2 = {
    header: "Digitalizace dokumentace",
    list: [
      {
        list_header: "DWG",
        list_item: "digitalizace do editovatelného formátu",
      },
      {
        list_header: "PDF",
        list_item: "digitalizace do pevného formátu (skenování)",
      },
      {
        list_header: "ARCHÍV",
        list_item: "vytvoření archivní dokumentace včetně členění",
      },
      {
        list_header: "SPRÁVA",
        list_item: "udržování a průběžná aktualizace dokumentace",
      },
    ],
    src: `${process.env.PUBLIC_URL}/img/archive_documents_1920_1080.jpg`,
  }

  return (
    <>
      <div className="">
        <Title title={title} />
      </div>
      <div className="">
        <Subtitle subtitle={subtitle} />
      </div>
      <div className="container px-3 my-5">
        <div className="my-5">
          <Right_Picture_Article {...article1} />
        </div>
        <hr className="" />
        <div className="my-5">
          <Left_Picture_Article {...article2} />
        </div>
        <hr className="" />
        <div className="my-5">
          <Left_Picture_List {...list1} />
        </div>
        <hr className="" />
        <div className="my-5">
          <Right_Picture_List {...list2} />
        </div>
      </div>
    </>
  )
}

export default Project
