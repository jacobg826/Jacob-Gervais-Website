import React from 'react'
import MarleyAndMe from './images/Marley_and_me.jpg'
import './About.css'


function About () {
    return (
        <div className="page-layout">
            <div>
                <h1 className='about-text'>
                    I am a recent graduate from the University of Washington with
                    a degree in Electrical and Computer Engineering.
                </h1>
            
                <h1 className='about-text'>
                    I am skilled in Android mobile app development from my professional experience at Faithlife.
                    I am proficient as an embedded system engineer due to coursework and projects I have pursued.  
                </h1>

                <h1 className='about-text'>
                    I am seeking employment at a company where I can continue to learn
                    and grow my skills as an engineer. 
                </h1>
            </div>
            <img src={MarleyAndMe} className ="marley-and-me" />
        </div>
    )
}

export default About