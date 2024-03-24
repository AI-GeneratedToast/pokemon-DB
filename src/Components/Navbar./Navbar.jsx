import React from 'react'
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import pokeball from '../../Assets/pokeball.png';
import { Button } from 'bootstrap';

export const Navbar = () => {
    


  return (
    <div>
        <nav class="navbar Small shadow mb-5">
            <Container fluid>
                <img
                    src={pokeball}
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                />
                <span class="navbar-brand mb-0 h1 fs-3">Pokemon-DB</span>

                <input type='text'
                    placeholder='Pokemon Name'
                />
            </Container>
        </nav>
    </div>
  )
}
