import { Link } from "react-router-dom"

export const HeroCard = ({ hero }) => {
  const heroImageUrl = `/assets/heroes/${ hero.id }.jpg`
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row g-0">
          <div className="col-4">
            <img className="card-img" src={ heroImageUrl } alt={ hero.superhero } />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{ hero.superhero }</h5>
              <p className="card-text">{ hero.alter_ego }</p> 
              { hero.alter_ego != hero.characters && <p className="card-text">{ hero.characters }</p>  }
              <p className="card-text">
                <small className="text-muted">{ hero.first_appearance }</small>
              </p> 
              <Link to={`/hero/${ hero.id }`}>More ...</Link>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}
