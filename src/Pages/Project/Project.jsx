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
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit possimus, explicabo modi nostrum beatae expedita alias officiis consequuntur non magnam.",
    src: `${process.env.PUBLIC_URL}/img/logo.png`,
  }

  const article2 = {
    header: "Inženýrská činnost",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit possimus, explicabo modi nostrum beatae expedita alias officiis consequuntur non magnam.",
    src: `${process.env.PUBLIC_URL}/img/logo.png`,
  }

  const article3 = {
    header: "Digitalizace dokumentace",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit possimus, explicabo modi nostrum beatae expedita alias officiis consequuntur non magnam.",
    src: `${process.env.PUBLIC_URL}/img/logo.png`,
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
    src: `${process.env.PUBLIC_URL}/img/logo.png`,
  }

  return (
    <>
      <div className="bg-light-gray pb-1">
        <Title title={title} />
      </div>
      <div className="pb-5">
        <Subtitle subtitle={subtitle} />
      </div>
      <div className="container-fluid px-8 pb-13">
        <div className="">
          <Right_Picture_Article {...article1} />
        </div>
        <hr className="my-8" />
        <div className="">
          <Left_Picture_Article {...article2} />
        </div>
        <hr className="my-8" />
        <div className="">
          <Right_Picture_Article {...article3} />
        </div>
        <hr className="my-8" />
        <div className="">
          <Left_Picture_List {...list1} />
        </div>
        <hr className="my-8" />
        <div className="">
          <Right_Picture_List {...list1} />
        </div>
      </div>
    </>
  )
}

export default Project
