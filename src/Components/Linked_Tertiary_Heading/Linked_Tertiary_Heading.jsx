import React from "react"
import { Link } from "react-router-dom"

const Linked_Tertiary_Heading = ({ title, link }) => {
  return (
    <>
      <div className="my-4">
        <h3 className="text-center display-5 fw-normal">
          <Link to={link} className="text-decoration-none green">
            {title}
          </Link>
        </h3>
      </div>
    </>
  )
}

export default Linked_Tertiary_Heading
