import { Fragment } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import queryString  from 'query-string'
import { HeroCard } from "../components"
import { useForm } from "../../hooks/useForm"
import { getHeroesByName } from "../helpers"

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse( location.search )
  const heroes = getHeroesByName( q )

  const { searchText, onInputChange } = useForm({ searchText : '' })

  const onSearchSubmit = ( event ) => {
    event.preventDefault()
    if( searchText.trim().length <= 1 ) return

    navigate(`?q=${ searchText }`)
  }

  return (
    <Fragment>
      <h1>Search Page</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text"
              className="form-control"
              placeholder="Search a hero"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
          </form>
          <button className="btn btn-outline-danger mt-1">Search</button>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">
            Search a hero
          </div>
          <div className="alert alert-danger">
            No hero with <b>{ q }</b>
          </div>

          {
            heroes.map( hero => <HeroCard key={ hero.id } hero={ hero } />)
          }
        </div>
      </div>
    </Fragment>
  )
}
   