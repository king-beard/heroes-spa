import { useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"
import { useMemo } from "react"

export const HeroPage = () => {
  const { id } = useParams() 
  const navigate = useNavigate()
  const hero = useMemo( () => getHeroById( id ), [ id ])
  const heroImageUrl = `/assets/heroes/${ hero.id }.jpg`

  const onNavigateBack = () => navigate(-1)

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img className="img-thumbnail animate__animated animate__fadeInLeft" src={ heroImageUrl } alt={ hero.superhero } />
      </div>
      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b>{ hero.alter_ego }</li>
          <li className="list-group-item"><b>Publisher: </b>{ hero.publisher }</li>
          <li className="list-group-item"><b>First Appearance: </b>{ hero.first_appearance }</li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{ hero.characters }</p>
        <button className="btn btn-outline-danger" onClick={ onNavigateBack }>back</button>
      </div>
    </div>
  )
}
   