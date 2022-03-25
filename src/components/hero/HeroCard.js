import React from 'react'
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const imagePath = heroImages(`./${id}.jpg`)

  return (
    // col-sm-12 col-md-6 col-lg-4

    <div className='animate__animated animate__fadeInDown'>
        <div className='card'>
            <div className='row no-gutters'>
                <div className='col-4'>
                    <img src = {imagePath} className = 'card-img-top' alt={superhero} />
                </div>
                <div className='col-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{superhero}</h5>
                        <p className='card-text'> {alter_ego} </p>

                        {
                            // (alter_ego !==characters) && <p className='text-muted'>{characters}</p>
                            (alter_ego !==characters) ? <p className='text-muted'>{characters}</p>: <p className='text-muted'>No hay mas personajes con este avatar</p>
                        }

                        <p className='card-text'>
                            <small className='text-muted'>{ first_appearance }</small>
                        </p>

                        <Link to = {`/hero/${id}`}>
                            Más información
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
