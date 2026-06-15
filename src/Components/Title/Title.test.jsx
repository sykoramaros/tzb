import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Title from "./Title"

describe("Title", () => {
  it("renders the title text", () => {
    render(<Title title="Testovací nadpis" />)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Testovací nadpis")
  })

  it("renders hr separator", () => {
    const { container } = render(<Title title="Test" />)
    expect(container.querySelector("hr")).toBeInTheDocument()
  })
})
