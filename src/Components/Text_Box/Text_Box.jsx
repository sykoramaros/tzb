import React from "react"

const Text_Box = ({ text }) => {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <p className="col-9 col-sm-7 fs-5 fw-normal text-center">{text}</p>
      </div>
    </>
  )
}

export default Text_Box
