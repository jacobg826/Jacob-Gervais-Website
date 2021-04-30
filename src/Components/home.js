import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import myFace from './images/my_face.jpg'


function Home () {
    return (
        <div>
            <div className="welcome">
                <div className="text-box">
                    <h1 className="text-style">
                        Hello, my name is Jacob. I am an electrical engineer and software developer from Bellingham, Washington.
                    </h1>
                </div>
                <img src={myFace} className ="my-face" />
            </div>
            
        </div>
    )
}

export default Home