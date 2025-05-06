import React from "react"
import Title from "../../Components/Title/Title"
import Subtitle from "../../Components/Subtitle/Subtitle"
import RightPictureArticle from "../../Components/RightPictureArticle/RightPictureArticle"
import LeftPictureArticle from "../../Components/LeftPictureArticle/LeftPictureArticle"

const Monitoring = () => {
  const title = "Monitoring"
  const subtitle = "Projekce"

  const article1 = {
    header: "Vzdálená podpora",
    paragraph:
      "v sídle firmy je vytvořen stálý dispečink pro každodenní obsluhu, údržbu a servis TH (tepelného hospodářství)",
    src: `${process.env.PUBLIC_URL}/img/monitoring_d_1920_1080.jpg`,
  }

  const article2 = {
    header: "Servis",
    paragraph: "pravidelné servisní prohlídky + NON STOP servis",
    src: `${process.env.PUBLIC_URL}/img/service.jpg`,
  }

  const article3 = {
    header: "Legislativa",
    paragraph:
      "legislativní činnosti v rámci vyhrazených technických zařízení (revize, kontroly, hlášení apod.)",
    src: `${process.env.PUBLIC_URL}/img/legislative.jpg`,
  }

  const article4 = {
    header: "Energetika",
    paragraph: "komplexní správa energetiky, nákupy energií a médií",
    src: `${process.env.PUBLIC_URL}/img/management.jpg`,
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
          <RightPictureArticle {...article1} />
        </div>
        <hr className="" />
        <div className="my-5">
          <LeftPictureArticle {...article2} />
        </div>
        <hr className="" />
        <div className="my-5">
          <RightPictureArticle {...article3} />
        </div>
        <hr className="" />
        <div className="my-5">
          <LeftPictureArticle {...article4} />
        </div>
      </div>
    </>
  )
}

export default Monitoring
