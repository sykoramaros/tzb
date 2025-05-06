import React from "react"
import "./Contacts.css"
import Title from "../../Components/Title/Title"
import HorizontalScrollingContainer from "../../Components/HorizontalScrollingContainer/HorizontalScrollingContainer"

const Contacts = () => {
  const title = "Kontaktujte nás"

  const contact_person = [
    {
      name: "Eva Nováková",
      email: "eva.novakova@example.com",
      phone: "+420 602 345 678",
      src: `${process.env.PUBLIC_URL}/img/person7.jpg`,
      job_position: "Projektová manažerka",
    },
    {
      name: "Martin Dvořák",
      email: "martin.dvorak@example.com",
      phone: "+420 733 112 245",
      src: `${process.env.PUBLIC_URL}/img/person1.jpg`,
      job_position: "Vedoucí servisu",
    },
    {
      name: "Petra Horáková",
      email: "petra.horakova@example.com",
      phone: "+420 604 987 321",
      src: `${process.env.PUBLIC_URL}/img/person5.jpg`,
      job_position: "Technická podpora",
    },
    {
      name: "Jakub Svoboda",
      email: "jakub.svoboda@example.com",
      phone: "+420 721 554 889",
      src: `${process.env.PUBLIC_URL}/img/person4.jpg`,
      job_position: "Specialista na kotelny",
    },
    {
      name: "Lucie Králová",
      email: "lucie.kralova@example.com",
      phone: "+420 603 458 112",
      src: `${process.env.PUBLIC_URL}/img/person6.jpg`,
      job_position: "Obchodní zástupkyně",
    },
    {
      name: "David Beneš",
      email: "david.benes@example.com",
      phone: "+420 777 123 456",
      src: `${process.env.PUBLIC_URL}/img/person2.jpg`,
      job_position: "Administrátor",
    },
  ]

  return (
    <>
      <div className="">
        <Title title={title} />
      </div>

      <div className="m-5">
        <div className="container p-5 rounded-3 border border-1 shadow-sm">
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="input-group mb-3">
                <span className="input-group-text">Jméno a příjmení</span>
                <input
                  type="text"
                  aria-label="First name"
                  className="form-control"
                />
                <input
                  type="text"
                  aria-label="Last name"
                  className="form-control"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Email
                </span>
                <input
                  type="email"
                  className="form-control"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <span className="input-group-text">@</span>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Telefon
                </span>
                <input
                  type="tel"
                  className="form-control"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Zpráva</span>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                ></textarea>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile02"
                />
                <label className="input-group-text" for="inputGroupFile02">
                  Nahrát
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label className="form-check-label" for="defaultCheck1">
                  Zavolejte mi prosím
                </label>
              </div>
              <button type="submit" class="btn text-white bg-green btn-lg">
                Poslat
              </button>
            </div>
            <small className="text-muted mt-2">
              * Formulář je potřeba propojit s konkrétní firemní emailovou
              adresou
            </small>
          </div>
        </div>
      </div>

      <div
        className="row w-100"
        style={{ minHeight: "250px", overflow: "hidden" }}
      >
        <div
          className="d-flex flex-nowrap hide-scrollbar justify-content-center align-items-center"
          style={{
            overflowX: "auto",
            overflowY: "hidden",
            width: "100%",
            height: "100%",
            // paddingBottom: "0rem",
          }}
        >
          {contact_person.map((item, index) => (
            <div key={index} style={{ minWidth: "250px", marginRight: "1rem" }}>
              <HorizontalScrollingContainer
                title={item.name}
                subheading={item.email}
                info={item.phone}
                footer={item.job_position}
                src={item.src}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Contacts
