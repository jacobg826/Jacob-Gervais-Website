import React from 'react'
import MarleyAndMe from './images/Marley_and_me.jpg'
import './About.css'


function About () {
    return (
        <div className="page-layout">
            <div>
                <h1 className='about-text'>
                    I am a recent graduate from the University of washington with
                    a degree in Electrical and Computer Engineering
                </h1>
            
                <h1 className='about-text'>
                    I am seeking out a career at a company that fosters learning and growth 
                    so I can continue to improve my skills as an engineer. I hope to work on 
                    interesting projects with motivated and skilled peers
                </h1>

                <h1 className='about-text'>
                    When I'm not working on code you can find me somewhere in the woods of the Pacific
                    Northwest. I love mountain biking, hiking, trail running, and rock climbing.
                </h1>
            </div>
            <img src={MarleyAndMe} className ="marley-and-me" />
        </div>
    )
}

export default About