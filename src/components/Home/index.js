import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import titleT  from '../../assets/images/titleT.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';
import bg from '../../assets/images/bg1.png'
import Loader from 'react-loaders';



const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
 const nameArray = ['a','r','u','u','n']
 const jobArray =['W','e','b',' ','D','e','v','e','l','o','p','e','r','.']

 
 useEffect(() => {
  return() => {
    setLetterClass('text-animate-hover')
  }
})


  return (
    <>
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
              <span className={letterClass}>H</span> 
              <span className={`${letterClass} _12`}>i</span> 
              <br /> 
              <span className={`${letterClass} _13`}>I</span> 
              <span className={`${letterClass} _14`}>'m</span> 
            <img src={titleT} alt='dev' />
            <AnimatedLetters  letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters  letterClass={letterClass} strArray={jobArray} idx={22} />
            </h1>
            <h2>Frontend Developer and an UI/UX designer</h2>
            <Link to='/contact' className='flat-button'>Contact Me</Link>
        </div>
        <Logo letterClass={letterClass}  idx={24} />
    </div>
    <img
    className="bg"
    
    src={bg}
    alt="JavaScript,  Developer"
  />
   <Loader type='pacman' />

   
   
    </>
  )
}

export default Home