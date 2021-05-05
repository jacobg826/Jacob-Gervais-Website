import React from 'react'
import AndroidIcon from '@material-ui/icons/Android';
import PowerIcon from '@material-ui/icons/Power';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import HttpIcon from '@material-ui/icons/Http';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';

import './Skills.css'

function Skills () {
    return (
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
            <div>
                <div id="skill-item">
                    <AndroidIcon style={{ height: '150', width: '150' }}/>
                    <h2 className="item-text" > Android Development</h2>
                </div>
                <div id ="skill-item">
                    <PowerIcon style={{ height: '150', width: '150' }}/>
                    <h2 className="item-text" > Embedded Systems</h2>
                </div>
                <div id ="skill-item">
                    <BluetoothIcon style={{ height: '150', width: '150' }}/>
                    <h2 className="item-text" > Communication Protocols:</h2>
                    <h2 className="item-text" > UART, I2C, SPI, etc.</h2>
                </div>
                <div id = "skill-item">
                    <HttpIcon style={{ height: '150', width: '150' }}/>
                    <h2 className="item-text" > Web Development</h2>
                </div>
                <div id = "skill-item">
                <PeopleIcon style={{ height: '150', width: '150' }}/>
                <h2 className="item-text" > Technical Commuication</h2>
                </div>
            </div>
        </div>
    )
}

export default Skills