import "@testing-library/jest-dom"
import { getByRole, queryByText, render } from "@testing-library/react"

import Modal from "./Modal"

describe("Modal", () => {
  it("renders a heading", () => {
    const { container } = render(
      <Modal renderWhen={false}>
        <h1>hi</h1>
      </Modal>,
    )

    const content = queryByText(container, "hi")

    expect(content).toBeNull()
    expect(content).not.toBeInTheDocument()
  })
  it("doesn't render a heading", () => {
    const { container } = render(
      <Modal renderWhen={true}>
        <h1>hi</h1>
      </Modal>,
    )

    const content = getByRole(container, "heading")

    expect(content).toBeInTheDocument()
  })
})
