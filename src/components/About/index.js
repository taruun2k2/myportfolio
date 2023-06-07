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
             idx={15}/>
        </h1>
        <div className="content">
        <p>
        Welcome to my portfolio website! I am an aspiring frontend developer and UI designer passionate about creating beautiful and user-friendly digital experiences. With a keen eye for detail and a deep understanding of the latest design trends and web technologies, I strive to deliver seamless and visually appealing interfaces that enhance the user's journey.
        </p>
        <p>
        I possess a strong command of HTML, CSS, and JavaScript, allowing me to create and develop web applications with precision and attention to detail.In the realm of design, I am skilled in utilizing industry-standard software such as Adobe XD, Figma, Illustrator, and Photoshop. These tools enable me to conceptualize and craft visually appealing designs, create captivating icons, and manipulate images to align with project requirements.
       </p>
       <p>
       Collaboration is at the heart of my work, and I thrive in multidisciplinary teams, collaborating closely with developers, UX designers, and stakeholders to create exceptional products. I believe that effective communication and a holistic understanding of the project goals are key to delivering successful outcomes.
       </p>
       <p>
       Please take a moment to explore my portfolio, where you will find examples of my frontend development and UI design work. Feel free to reach out and let's create something amazing together!
        </p>
        <p>
        "Design adds value faster than it adds costs." <br />
              -- Joel Spolsky creator of Trello
        </p>
        </div>
        

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