import React from "react"
import Title from "../../Components/Title/Title"
import Subtitle from "../../Components/Subtitle/Subtitle"
import Left_Picture_Article from "../../Components/Left_Picture_Article/Left_Picture_Article"
import Right_Picture_Article from "../../Components/Right_Picture_Article/Right_Picture_Article"

const Project = () => {
  const title = "Statické"
  const subtitle = "Projekce"

  const article1 = {
    header: "Cena zahrnuje",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit possimus, explicabo modi nostrum beatae expedita alias officiis consequuntur non magnam.",
    src: `${process.env.PUBLIC_URL}/img/logo.png`,
  }

  const article2 = {
    header: "Cena NEzahrnuje",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit possimus, explicabo modi nostrum beatae expedita alias officiis consequuntur non magnam.",
    src: `${process.env.PUBLIC_URL}/img/logo.png`,
  }

  const article3 = {
    header: "Cena NEzahrnuje",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit possimus, explicabo modi nostrum beatae expedita alias officiis consequuntur non magnam.",
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
      </div>
    </>
  )
}

export default Project
