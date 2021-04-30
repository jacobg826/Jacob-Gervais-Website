import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import myFace from './images/my_face.jpg'
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
            <AndroidIcon style={{ height: '150', width: '150' }}/>
            <PowerIcon style={{ height: '150', width: '150' }}/>
            <BluetoothIcon style={{ height: '150', width: '150' }}/>
            <HttpIcon style={{ height: '150', width: '150' }}/>
            <PeopleIcon style={{ height: '150', width: '150' }}/>
            <WorkIcon style={{ height: '150', width: '150' }}/>

        </div>
    )
}

export default Skills