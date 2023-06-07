import './index.scss';

import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import LogoT from '../../assets/images/logoT.png';
import sub from '../../assets/images/sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faDribbble, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () =>  (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
        <img src={LogoT}  alt="logo" />
        <img className='sub' src={sub}  alt="sub" />  
        </Link>
        <nav>
          <NavLink exact='true' activeclassname='active' to='/'>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
          </NavLink>
          <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
            <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
          </NavLink>
          <NavLink exact='true' activeclassname='active' className='portfolio-link' to='/projects'>
            <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
          </NavLink>
          <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/taruun-p/'>
              <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'
              />
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/taruun2k2'>
              <FontAwesomeIcon icon={faGithub} color='#4d4d4e'
              />
            </a>
          </li>
          <li>
            <a target='_blank' rel='noreferrer' href='https://dribbble.com/Taruun'>
              <FontAwesomeIcon icon={faDribbble} color='#4d4d4e'
              />
            </a>
          </li>
        </ul>

    </div>
  )


export default Sidebar