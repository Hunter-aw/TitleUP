import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './navbarcss.css';

class Navbar extends Component {
    render() {
        return(
            <div>
                <nav>
                <Link to='/'><img src = {require('../titleUP.png')} alt ="logo"></img> </Link>
                <span className ='navContainer'>
                <ul>
                    <li className='navLink'><Link to ='/about'>About Us</Link></li>
                    <li className='navLink'>Our Products
                    <ul class="dropdown" aria-label="submenu">
                        <li ><Link to="/TagGenerator">Top Tag Generator</Link></li>
                        <li ><Link to="/Ngrams">Key Terms and Phrases</Link></li>
                        <li ><Link to="/TitleGen">Title Generator</Link></li>
                    </ul>
                    </li>
                    <li className='navLink'><Link to ='/donate'>Donate</Link></li>
                </ul>
                </span>
                </nav>
            </div>
        )
    }
}

export default Navbar