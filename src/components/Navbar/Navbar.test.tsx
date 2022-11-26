import "@testing-library/jest-dom"
import { getByRole, render } from "@testing-library/react"
import Navbar from "./Navbar"

describe("Navbar", () => {
  it("renders a Navbar", () => {
    const { container } = render(<Navbar />)

    const header = getByRole(container, "heading")

    expect(header).toBeInTheDocument()
  })
})
