import { Fragment } from "react"
import { HeroCard } from "../components"

export const SearchPage = () => {
  return (
    <Fragment>
      <h1>Search Page</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form>
            <input 
              type="text"
              className="form-control"
              placeholder="Search a hero"
              name="searchText"
              autoComplete="off"
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
            No hero with <b>ABC</b>
          </div>

          {/* <HeroCard /> */}
        </div>
      </div>
    </Fragment>
  )
}
   