import { Fragment } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { DCPage, HeroPage, MarvelPage, SearchPage } from "../pages"
import { Navbar } from "../../ui/components"

export const HeroesRoutes = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage/>} />
          <Route path="dc" element={<DCPage/>} />
          <Route path="hero" element={<HeroPage/>} />
          <Route path="search" element={<SearchPage/>} />
          <Route path="/" element={<Navigate to="marvel"/>} />
        </Routes>
      </div>
    </Fragment>
  )
}
