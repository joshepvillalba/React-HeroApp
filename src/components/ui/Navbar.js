import React,{ useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const context = useContext(AuthContext);

    const { user, dispatch } = context;

    const navigate = useNavigate();

    const handleLogout = () =>{
        
        dispatch({ type: types.logout })

        navigate('/login',{replace:true})
    }

    const [toggle, setToggle] = useState('collapse');
    

    const handleMenu = () =>{
        setToggle(toggle === 'collapse' ? 'show' : 'collapse');
        console.log(toggle);
    }

    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark animate__bounceIn">
            <div className="container-fluid">
            <Link 
                className="navbar-brand" 
                to="/"
            >
                HeroApp
            </Link>
            <button onClick = {handleMenu} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className={ toggle + " navbar-collapse"} id="navbarSupportedContent">

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => isActive ? "nav-item nav-link active ": "nav-item nav-link"}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                    className={ ({isActive}) => isActive ? "nav-item nav-link active ": "nav-item nav-link"}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                    className={ ({isActive}) => isActive ? "nav-item nav-link active ": "nav-item nav-link"}
                        to="/search"
                    >
                        Search
                    </NavLink>
                    
                </div>
            </div>

            <div className=" navbar-collapse-sm d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                    <span className='nav-item nav-link text-info' >{ user.name }</span>

                    <button 
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>    
            </div>
            </div>
        </nav>

    )
}