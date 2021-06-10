import React from 'react'
import myFace from './images/my_face.jpg'
import './images.css'


function Home () {
    return (
        <div>
            <div className="welcome">
                <div className="text-box">
                    <h1 className="text-styl">
                        Hello, my name is Jacob. I am an electrical engineer and software developer from Bellingham, Washington.
                    </h1>
                </div>
                <img src={myFace} className ="my-face" />
            </div>
            
        </div>
    )
}

export default Home