import './index.scss'
import { Loader } from 'react-loaders'
import { AnimatedLetters } from '../AnimatedLetters'
import {useState, useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet'
import { useMediaQuery } from 'react-responsive'
export const Contact = () => {

    const fillRedOptions = {fillColor : 'red'}
    const [letterClass,setLetterClass] = useState('text-animate')
    const form = useRef();
    const isMobile = useMediaQuery({query:'(min-width:760px)'})
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm(
            'service_ogjyx3h',
            'template_yrxpvzo',
            form.current,
            '4bErQKAf02N4fIMh0'
          )
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass = {letterClass} stringArray={['C','o','n','t','a','c','t',' ','m','e','.']} 
                    idx = {15}/>
                </h1>
                <p>
                    I'm really interested in new opportunities to learn new technologies that I can apply not only in my projects
                    but also in different jobs.If you have any request or question please don't hesitate to write using the following form.
                </p>
                <div className='contact-form'>
                <form  ref = {form} onSubmit = {sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name = 'name' placeholder='Name' required/>
                        </li>
                        <li className='half'>
                            <input type='email' name = 'email' placeholder='Email' required/>
                        </li>
                        <li>
                            <input placeholder='Subject' type = 'text' name = 'subject' required/>
                        </li>
                        <li>
                            <textarea placeholder='Message' name = 'message' required/>
                        </li> 
                        <li>
                           <input type='submit' className='flat-button' value = 'SEND'/>
                        </li>      
                    </ul>
                </form>
            </div>
            </div>
            {isMobile ? <div className='info-map'>
                Juan Sebastian Galvis,
                <br/>
                Canada,
                <br/>
                Toronto, ON
                <br />
                <span>sebas8812@gmail.com</span>
            </div> : null}
           
        <div className="map-wrap">
          <MapContainer center={[43.777702, -79.233238]} zoom={11}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Circle center={[43.777702, -79.233238]}
                pathOptions = {fillRedOptions}
                radius = {3500}>
                <Popup>
                    Currently living around here
                </Popup>
            </Circle>
          </MapContainer>
        </div>
           
        </div>
        <Loader type='pacman'/>
        </>
        
    )
}