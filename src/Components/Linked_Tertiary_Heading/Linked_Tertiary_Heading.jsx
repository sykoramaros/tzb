import React from "react"
import { Link } from "react-router-dom"

const Linked_Tertiary_Heading = ({ linked_tertiary_heading }) => {
  return (
    <>
      <div className="my-4">
        <h3 className="text-center display-5 fw-normal">
          <Link to="/project" className="text-decoration-none green">
            {linked_tertiary_heading}
          </Link>
        </h3>
      </div>
    </>
  )
}

export default Linked_Tertiary_Heading
