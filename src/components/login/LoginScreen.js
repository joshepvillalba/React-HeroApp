import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

import cover from '../../assets/marvelvsdc.jpg';

export const LoginScreen = () => {

  const { dispatch } = useContext( AuthContext )

  const navigate = useNavigate();

  const handleLogin = () => {

    const action = {
      type: types.login,
      payload: {name:'Prueba'}
    }

    dispatch(action)

    const lastPath = localStorage.getItem('lastPath') || '/marvel';
    const search = localStorage.getItem('search') || ''; 

    navigate(lastPath+search,{
      replace:true
    })
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr/>

      <div className = 'row '>

        <div className='col-sm col-lg-4 align-self-center'>
            <button className='btn btn-primary btn-lg btn-block active' style={{width:'100%'}} onClick={handleLogin}>
              Login
            </button>
        </div>

        <div className='col-sm col-lg-8 mt-2 align-self-center'>
          <img className='img-fluid' src={cover} alt='caratula'/>
        </div>



      </div>

    </div>
  )
}
