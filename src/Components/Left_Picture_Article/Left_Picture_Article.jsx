import React from "react"

const Left_Picture_Article = ({ header, paragraph, src }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2">
        <div className="d-none d-sm-flex justify-content-center align-items-center">
          <img className="w-21" src={src} alt="" />
        </div>
        <div className="d-flex flex-column justify-content-center gap-2">
          <h3 className="font-5 fw-medium text-center text-sm-start">
            {header}
          </h3>
          <p className="font-3 fw-normal text-center text-sm-start">
            {paragraph}
          </p>
        </div>
        <div className="d-sm-none my-3"></div>
        <div className="d-sm-none d-flex justify-content-center align-items-center">
          <img className="w-21" src={src} alt="" />
        </div>
      </div>
    </>
  )
}

export default Left_Picture_Article
