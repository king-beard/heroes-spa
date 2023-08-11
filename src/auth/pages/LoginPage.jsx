import { Fragment } from "react"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navigate = useNavigate()

  const onLogin = () => {
    navigate("/marvel", { replace : true })
  }

  return (
    <div className="container mt-5">
      <h1>Login Page</h1>
      <hr />

      <button className="btn btn-outline-danger" onClick={ onLogin }>Login</button>
    </div>
  )
}
 