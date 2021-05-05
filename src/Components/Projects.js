import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import './Projects.css'


function Projects () {
        const [FaithlifeClick, setClick] = useState(false);
        const handleFaithlife = () => setClick(!FaithlifeClick); 

        const [BelayHuClick, setBelay] = useState(false);
        const handleBelayHu = () => setBelay(!BelayHuClick); 

        const [procClick, setProc] = useState(false);
        const handleProc = () => setProc(!procClick); 

        const [portClick, setPort] = useState(false);
        const handlePort = () => setPort(!portClick); 

        return (
            <div>
                <div className="project-layout">
                    <h1 className="projects-text" > 
                    I've had the opprotunity to work on a handful of projects. These projects ranged 
                    from low level digital circuit design all the way up to high level android development. 
                    </h1>
                </div>
                <div className="project-grid">
                    
                <ReactCardFlip isFlipped={FaithlifeClick} flipDirection="vertical">
                    <div className="flip-front" onClick={handleFaithlife}>
                        <h1 className = "flip-text"> Faithlife</h1>
                    </div>

                    <div className="flip-back" onClick={handleFaithlife}>
                        <h2 className="flip-back-text"> Software Developer intern</h2>
                        <h3 className="flip-back-text"> Worked on a remote team on the Android mobile app.</h3>
                        <h3 className="flip-back-text"> 
                            Used Kotlin to develop features on the app such as:
                            adaptive text responses, user directory, various bugs
                        </h3>
                    </div>
                </ReactCardFlip>

                <ReactCardFlip isFlipped={BelayHuClick} flipDirection="vertical">
                    <div className="flip-front" onClick={handleBelayHu}>
                        <h1 className = "flip-text"> BelayHu</h1>
                    </div>

                    <div className="flip-back" onClick={handleBelayHu}>
                        <h2 className="flip-back-text"> Lead Embedded System Engineer</h2>
                        <h3 className="flip-back-text"> Developed a robotic climbing belay system using 2 microcontrollers.</h3>
                        <h3 className="flip-back-text"> 
                            Used Python and C for the respective microcontrollers. Used UART, I2C, and SPI in the design.
                        </h3>
                    </div>
                </ReactCardFlip>

                <ReactCardFlip isFlipped={procClick} flipDirection="vertical">
                    <div className="flip-front" onClick={handleProc}>
                        <h1 className = "flip-text"> Pipelined Processor</h1>
                    </div>

                    <div className="flip-back" onClick={handleProc}>
                        <h2 className="flip-back-text"> Computer Architect</h2>
                        <h3 className="flip-back-text"> Developed a pipelined processor using SystemVerilog.</h3>
                        <h3 className="flip-back-text"> 
                            Simulated running assembly code on the processor. 
                        </h3>
                    </div>
                </ReactCardFlip>

                <ReactCardFlip isFlipped={portClick} flipDirection="vertical">
                    <div className="flip-front" onClick={handlePort}>
                        <h1 className = "flip-text"> Personal Portfolio</h1>
                    </div>

                    <div className="flip-back" onClick={handlePort}>
                        <h2 className="flip-back-text"> Software Engineer</h2>
                        <h3 className="flip-back-text"> Designed this website right here!</h3>
                        <h3 className="flip-back-text"> 
                            Used ReactJS, HTML, and CSS to make this nice looking website.
                        </h3>
                    </div>
                </ReactCardFlip>
                </div>
            </div>
        )
    }

export default Projects