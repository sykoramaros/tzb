import React from "react"
import Carousel from "../../Components/Carousel/Carousel"

const Try = () => {
  const pictures = [
    {
      src: `${process.env.PUBLIC_URL}/img/800_600.png`,
      text: "800 x 600",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/1024_768.png`,
      text: "1024 x 768",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/1920_1080.png`,
      text: "1920 x 1080",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/2560_1440.png`,
      text: "2560 x 1440",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/120_120.png`,
      text: "120 x 120",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/250_250.png`,
      text: "250 x 250",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/800_600w.png`,
      text: "800 x 600w",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/1024_768w.png`,
      text: "1024 x 768w",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/1920_1080w.png`,
      text: "1920 x 1080w",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/2560_1440w.png`,
      text: "2560 x 1440w",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/120_120w.png`,
      text: "120 x 120w",
    },
    {
      src: `${process.env.PUBLIC_URL}/img/250_250w.png`,
      text: "250 x 250w",
    },
  ]
  return (
    <>
      {/*<h1>Hello</h1>*/}
      {/*<h2>Hello</h2>*/}
      {/*<h3>Hello</h3>*/}
      {/*<h4>Hello</h4>*/}
      {/*<h5>Hello</h5>*/}
      {/*<h6>Hello</h6>*/}

      <div className="h-55 font-55" style={{ border: "3px solid magenta" }}>
        fib-55
      </div>
      <div className="h-34 font-34" style={{ border: "3px solid darkgreen" }}>
        fib-34
      </div>
      <div className="h-21 font-21" style={{ border: "3px solid gold" }}>
        fib-21
      </div>
      <div className="h-13 font-13" style={{ border: "3px solid orange" }}>
        fib-13
      </div>
      <div className="h-8 font-8" style={{ border: "3px solid red" }}>
        fib-8
      </div>
      <div className="h-5 font-5" style={{ border: "3px solid plum" }}>
        fib-5
      </div>
      <div className="h-3 font-3" style={{ border: "3px solid purple" }}>
        fib-3
      </div>
      <div className="h-2 font-2" style={{ border: "3px solid lightblue" }}>
        fib-2
      </div>
      <div className="h-1 font-1" style={{ border: "3px solid blue" }}>
        fib-1
      </div>

      <div
        className="mx-auto h-34 bg-light-gray"
        style={{ overflow: "hidden" }}
      >
        <Carousel picture={pictures} />
      </div>
    </>
  )
}

export default Try
