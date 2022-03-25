import React,{ useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm }from '../../hooks/useForm'
import { HeroCard } from '../hero/HeroCard';
import { getHeroByName } from '../selectors/getHeroByName';
import queryString from 'query-string';


export const SearchScreen = () => {

  const navigate = useNavigate();
  const localtion = useLocation();
  
  const { q = ''} = queryString.parse(localtion.search)

  const [formValue, handleInputChange] = useForm({
    searchtext: q ,
  })

  const { searchtext }= formValue;

  const data = useMemo(() =>  getHeroByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchtext }`)
  }


  return (
    <>
      <h1>Busqueda</h1>
      <hr/>

      <div className='row'>
        <div className='col-sm-12 col-md-3'>
          <h4>Buscar</h4>
          <hr/>

          <form onSubmit = { handleSearch }>

            <input type='text'
            placeholder='Buscar heroe'
            className='form-control'
            name='searchtext'
            autoComplete='off'
            value = { searchtext }
            onChange = { handleInputChange }/>
            
            <button type='submit' className='btn btn-primary btn-lg btn-block mt-1' style={{width: '100%'}}>Buscar...</button>

          </form>

        </div>
        
        <div className='col-sm-12 col-md-9 mt-2'>
          <h4>Resultados</h4>
          <hr/>
          
          {
                data.length >= 1 ? data.map( hero => <HeroCard key = {hero.id} { ...hero }  />) : data == []? <h3 className=' alert alert-info'>Buscar un heroe</h3>: <h3 className='alert alert-warning'>No se encontro el heroe: {q}</h3>
          }
        </div>

      </div>


    </>
  )
}
