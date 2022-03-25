import React,{ useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from '../selectors/getHeroById';

export const HeroScreen = () => {

  const navigate = useNavigate();

  const handleReturn = () =>{    
    navigate(-1)
  }

  const {heroId} = useParams();

  const hero = useMemo(() => getHeroById(heroId), [ heroId ])

  if(!hero){
    return <Navigate to='/' />
  }

  const imagePath = heroImages(`./${hero.id}.jpg`)

  return (
    <div className='row mt-5'>
      <div className='col-sm-12 col-md-4'>
        <img src={ imagePath } alt={hero.superhero} className='animate__animated  animate__fadeInLeft img-fluid' />
      </div>

      <div className='col-sm-12 col-md-8 animate__animated animate__flash'> 
        <h3>{ hero.superhero }</h3>
        <hr/>
        <ul className='list-group '>
          <li className='list-group-item'><b>Alter ego: </b>{ hero.alter_ego }</li>
          <li className='list-group-item'><b>publisher: </b>{ hero.publisher }</li>
          <li className='list-group-item'><b>First appearance: </b>{ hero.first_appearance }</li>
          <li className='list-group-item'><b>characters: </b>{ hero.characters }</li>
        </ul>

        {/* <h5 className='mt-2'>characters</h5>
        <p>{hero.characters}</p> */}

        <hr/>
        <button className='btn btn-outline-info' onClick={handleReturn}>
          Regresar
        </button>
      </div>

    </div>
  )
}
