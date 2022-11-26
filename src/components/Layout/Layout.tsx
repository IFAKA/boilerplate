import { IChild } from "@/models"
import { useLocation } from "react-router-dom"
import { Footer } from "../Footer"
import { Navbar } from "../Navbar"

const Layout = ({ children }: IChild) => {
  const { pathname } = useLocation()
  return (
    <>
      <Navbar />
      <div
        className={`${
          pathname === "/" ? "grid place-items-center" : "flex justify-center"
        } w-full h-[calc(100vh-96px)] overflow-auto`}
      >
        <div
          className={`max-w-3xl w-full p-4 ${
            pathname === "/" && "grid gap-4 mb-10"
          }`}
        >
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Layout
