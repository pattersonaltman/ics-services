import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () =>  {

        return (
          <header>
            <h1 className="display-2">ICS-Services</h1>

            <nav className='navbar navbar-expand-lg bg-light'>
                <div className='container-fluid'>
                    
                    <Link className='navbar-brand' to='/'>Home</Link>

                    <button className='navbar-toggler' 
                            type='button' 
                            data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' 
                            aria-label='Toggle navigation' >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    
                    <div className='collapse navbar-collapse'
                         id='navbarNavAltMarkup'>
                        <div className='navbar-nav'>

                            <Link className='nav-link' to='/view'>Services</Link>

                            <Link className='nav-link' to='/add'>Add Service</Link>

                        </div>
                    
                    </div>
                    <div className='collapse navbar-collapse'
                         id='navbarNavAltMarkup'>
                        <div className='navbar-nav'>

                            <Link className='nav-link' to='/register'>Register</Link>

                            <Link className='nav-link' to='/login'>Login</Link>

                        </div>
                    
                    </div>

                </div>
            </nav>

            <div style={{height: "1.5rem"}}></div>

        </header>
        );
    }


export default Navbar;