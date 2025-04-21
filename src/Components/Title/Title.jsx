import React from "react"

const Title = ({ title }) => {
  return (
    <>
      <div className="bg-light-gray py-2">
        <h1 className="font-8 gray fw-semibold ms-2">{title}</h1>
      </div>
    </>
  )
}

export default Title
