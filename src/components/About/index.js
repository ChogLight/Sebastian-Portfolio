import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters'
import {useState, useEffect} from 'react'
export const About = () => {

    const [letterClass,setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return(
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
                I am a full stack developer recently gratuated from Centennial College at Toronto Canada.
                Currently I am looking for a role in a established IT company to lauch my carreer.
            </p>
            <p>
                During my time at Centennial College, I was able to work with a variety of people with different ways of thinking 
                and learning from each of them while also leaving a great impression of responsibility and hard work in them. 
                Some of the projects I collaborated in were the creation of webpages in which I played the role of lead software engineer. 
                I used my knowledge in the MERN stack to help my colleagues achieve a satisfactory result in the final product.
                
            </p>
            <p>
                I'm confident about my skills and a person with an innate curiosity. I'm always looking for new
                challenges and new knowledge to learn and use in my personal projects.
                My hard work and my honesty are both things that define me.
            </p>
        </div>
        </div>
        
        
    )
}