import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Spinner from "./Spinner"

describe("Spinner", () => {
  it("renders a spinner", () => {
    const { container } = render(<Spinner />)

    const spinner = container.firstChild

    expect(spinner).toBeInTheDocument()
  })
})
