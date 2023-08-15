import { Fragment } from "react"
import { useParams } from "react-router-dom"
import { getHeroById } from "../helpers"

export const HeroPage = () => {
  const { id } = useParams() 
  const hero = getHeroById( id )

  return (
    <Fragment>
      <h1>Hero Page </h1>
    </Fragment>
  )
}
   