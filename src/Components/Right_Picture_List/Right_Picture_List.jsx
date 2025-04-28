import React from "react"

const Right_Picture_List = ({ header, list, src }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2">
        <div className="d-flex flex-column justify-content-center gap-2">
          <h3 className="font-5 fw-medium text-center text-sm-start">
            {header}
          </h3>
          <ul className="">
            {list.map((ls, index) => (
              <li key={index}>
                <h4 className="font-3 fw-medium">{ls.list_header}</h4>
                <p>{ls.list_item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="d-none d-sm-flex justify-content-center align-items-center">
          <img className="w-21" src={src} alt="" />
        </div>
        <div className="d-sm-none my-3"></div>
        <div className="d-sm-none d-flex justify-content-center align-items-center">
          <img className="w-21" src={src} alt="" />
        </div>
      </div>
    </>
  )
}

export default Right_Picture_List
