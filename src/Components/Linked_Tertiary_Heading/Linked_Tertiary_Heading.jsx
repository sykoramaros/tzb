import React from "react"
import { Link } from "react-router-dom"

const Linked_Tertiary_Heading = ({ linked_tertiary_heading }) => {
  return (
    <>
      <div>
        <h3 className="text-center font-8 fw-normal">
          <Link to="/project" className="text-decoration-none green">
            {linked_tertiary_heading}
          </Link>
        </h3>
      </div>
    </>
  )
}

export default Linked_Tertiary_Heading
