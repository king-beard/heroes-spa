import { Fragment, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context"

export const LoginPage = () => {

  const { login } = useContext( AuthContext )
  const navigate = useNavigate()

  const onLogin = () => {
    login('King Beard')
    const lastPath = localStorage.getItem('lastPath') || '/'
    navigate(lastPath, { replace : true })
  }

  return (
    <div className="container mt-5">
      <h1>Login Page</h1>
      <hr />

      <button className="btn btn-outline-danger" onClick={ onLogin }>Login</button>
    </div>
  )
}
 