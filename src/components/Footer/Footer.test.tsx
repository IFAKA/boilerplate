import "@testing-library/jest-dom"
import { getAllByRole, render } from "@testing-library/react"
import Footer from "./Footer"

describe("Footer", () => {
  it("renders a heading", () => {
    const { container } = render(<Footer />)

    const anchors = getAllByRole(container, "link")

    expect(anchors.length).not.toBe(3)
    expect(anchors.length).toBe(4)
  })
})
