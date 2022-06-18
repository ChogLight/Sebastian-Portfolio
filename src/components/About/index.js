import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters'
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faNode, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { Loader } from 'react-loaders'


export const About = () => {

    const [letterClass,setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    stringArray = {['A','b','o','u','t',' ','m','e','.']}
                    idx = {15}
                />
            </h1>
            <p>
                I'm a full stack developer recently gratuated from Centennial College at Toronto Canada.
                Currently I am looking for a role in a established IT company to lauch my carreer.
            </p>
            <p>
                During my time at Centennial College, I was able to work with a variety of people with different ways of thinking 
                and learning from each of them while also leaving a great impression of responsibility and hard work in them. 
                Some of the projects I collaborated in were the creation of webpages in which I played the role of lead software engineer. 
                I used my knowledge in the MERN stack to help my colleagues achieve a satisfactory result in the final product.
                
            </p>
            <p>
                I'm confident about my skills and I'm also a person with an innate curiosity. I'm always looking for new
                challenges and new knowledge to learn and to use in my personal projects.
                My hard work and my honesty are both things that define me.
            </p>
            
        </div>
        <div className='stage-cube-cont'>
            <div className='cube-spinner'>
                <div className='face1'>
                    
                    <FontAwesomeIcon icon = {faCss3Alt} color="#00A6DE"/>
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon = {faNode} color="#17AD30"/>
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon = {faJsSquare} color="#D4E114"/>
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon = {faReact} color="#2D51AD"/>
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon = {faGitAlt} color="#E19F05"/>
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon = {faHtml5} color="#DD0031"/>
                </div>
            </div>
        </div>
        </div>
        <Loader type='pacman'/>
        </>
        
        
       
        
    )
}