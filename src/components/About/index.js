import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faFigma, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')



  useEffect(() => {
    return() => {
      setLetterClass('text-animate-hover')
    }
  })


  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters 
             letterClass={letterClass}
             strArray={['A','b','o','u','t',' ','M','e']}
             idx={15}
          />
        </h1>
        <p>
          I'm a very ambitious front-end developer looking for a role in an established company with the opportunity to work with the latest technologies on challenging and diverse projects
        </p>
        <p>
          I'm creative, enthusiastic, confident and more over humble perpetually working on improving my chops one design problem at a time
        </p>
        <p>
          If I need to define myself in one sentence that would be 'A creative design enthusiast with frontend skills who wants to create visually stunning and user friendly ergonomic designs'.
        </p>
        <p>
        "Design adds value faster than it adds costs." <br />
              -- Joel Spolsky creator of Trello
        </p>

      </div>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faReact} color='#ffd700'/>
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#ffd700'/>
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#ffd700'/>
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faFigma} color='#ffd700'/>
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#ffd700'/>
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color='#ffd700'/>
            </div>

          </div>

        </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default About