import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages"
import { HeroesRoutes } from "../heroes/routes"
import { PrivateRoute } from "./PrivateRoute"

export const AppRouter = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />
      </Routes>
    </Fragment>
  )
}
