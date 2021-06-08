import React from 'react'
import MarleyAndMe from './images/Marley_and_me.jpg'
import './About.css'

import AndroidIcon from '@material-ui/icons/Android';
import PowerIcon from '@material-ui/icons/Power';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import HttpIcon from '@material-ui/icons/Http';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';

import './Skills.css'

function About () {
    return (
        <div>
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

            <div className="skills-page-layout">
                <div className="skills-text-layout">
                    <h1 className="skills-text">I have many skills as an engineer. I have strong communication skills and 
                        the ability to solve ambiguous and difficult problems. I have a strong understanding
                        of both low level and high level programming and I am an enthusiastic learner. 
                    </h1>
                </div>
                <div className="skills-text-layout">
                    <h1 className="skills-text">
                        Here are some of the specific areas I am skilled in:
                    </h1>
                </div>
                <div className ="skill-grid">
                    <div id="skill-item">
                        <div className="icon">
                            <AndroidIcon style={{ height: '150', width: '150' }}/>
                        </div>
                        <h2 className="item-text" > Android Development</h2>
                    </div>
                    <div id ="skill-item">
                    <div className="icon">
                            <PowerIcon style={{ height: '150', width: '150' }}/>
                        </div>
                        <h2 className="item-text" > Embedded Systems</h2>
                    </div>
                    <div id = "skill-item">
                        <div className="icon">
                            <HttpIcon style={{ height: '150', width: '150' }}/>
                        </div>
                        <h2 className="item-text" > Web Development</h2>
                    </div>
                    <div id = "skill-item">
                        <div className="icon">
                        <PeopleIcon style={{ height: '150', width: '150' }}/>
                        </div>
                        <h2 className="item-text" > Technical Commuication</h2>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default About