import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
import './index.scss'
import {AnimatedLetters} from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import {Logo} from './Logo'
import { Loader } from 'react-loaders'
import { useMediaQuery } from 'react-responsive'
 export const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate') 
    const nameArray = ['e','b','a','s','t','i','a','n']
    const jobArray = ['w','e','b','','d','e','v','e','l','o','p','e','r','.']
    const isMobile = useMediaQuery({query: '(min-width: 760px)'})
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
      }, [])
    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass } _14`}>'m</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass} stringArray = {nameArray}
                    idx = {15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} stringArray = {jobArray}
                    idx = {23}/>
                </h1>
                <h2>FrontEnd Developer / BackEnd Developer / MERN Stack</h2>
                {isMobile ?
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                    : null    
                }
                
            </div>
            <Logo></Logo>

        </div>
        <Loader type = 'pacman'/>
        </>
        
    )
}

