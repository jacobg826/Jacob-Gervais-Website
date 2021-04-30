import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import myFace from './images/my_face.jpg'
import CustomBtn from './CustomBtn'
import './Projects.css'


function Projects () {
    return (
        <div>
            <div className="project-layout">
                <h1 className="projects-text" > 
                I've had the opprotunity to work on a handful of projects. These projects ranged 
                from low level digital circuit design all the way up to high level android development. 
                </h1>
            </div>
            <div className="project-grid">
                <CustomBtn txt="Faithlife"/>
                <CustomBtn txt="BelayHu"/>
                <CustomBtn txt="Pipelined Processor"/>
                <CustomBtn txt="Portfolio"/>
            </div>
        </div>
    )
}

export default Projects