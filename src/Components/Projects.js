import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import ShopIcon from '@material-ui/icons/Shop';
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

        const [earthClick, setEarth] = useState(false);
        const handleEarth = () => setEarth(!earthClick); 

        const [veriClick, setVeri] = useState(false);
        const handleVeri = () => setVeri(!veriClick); 

        return (
            <div>
                <div className="project-layout">
                    <h1 className="projects-text" > 
                    I've had the opprotunity to work on a wide variety of projects. These projects ranged 
                    from low level digital circuit design to high level android development. 
                    </h1>
                </div>
                <div className="project-grid">
                    
                <ReactCardFlip isFlipped={FaithlifeClick} flipDirection="vertical">
                    <div className="flip-front" onClick={handleFaithlife}>
                        <h1 className = "flip-text"> Faithlife Mobile App</h1>
                        <h3 className = "flip-text">Software Developer Intern</h3>
                    </div>

                    <div className="flip-back" onClick={handleFaithlife}>
                        <h2 className="flip-back-text"> Software Developer intern</h2>
                        <h4 className="flip-back-text"> 
                            Worked on a remote team to create an android mobile app for
                            Faithlife’s social media product that allows members of churches to interact with each other.  
                        </h4>
                        <h4 className="flip-back-text"> 
                            Authored high quality Kotlin and XML code for various features of the app while participating
                            in daily Scrum meetings and communicating across teams to designers and web developers.
                        </h4>
                        <h4 className="flip-back-text"> 
                        Delivered impactful features to the mobile app such as automated message suggestions by utilizing 
                        on device ML, and a directory feature to search and contact members of your church. 
                        </h4>
                        <a 
                        href="https://play.google.com/store/apps/details?id=com.faithlife.mobile&hl=en_US&gl=US"
                        target="_blank">
                            <ShopIcon/>
                        </a>
                    </div>
                </ReactCardFlip>

                <ReactCardFlip isFlipped={BelayHuClick} flipDirection="vertical">
                    <div className="flip-front" onClick={handleBelayHu}>
                        <h1 className = "flip-text"> Senior Capstone: BelayHu</h1>
                        <h3 className = "flip-text">Lead Electrical Engineer</h3>
                    </div>

                    <div className="flip-back" onClick={handleBelayHu}>
                        <h2 className="flip-back-text"> Lead Embedded System Engineer</h2>
                        <h4 className="flip-back-text"> 
                            Led a small remote team of 5 engineers to develop an automated rock climbing belay system
                            that allows climbers to ascend walls without a human belayer. 
 
                        </h4>
                        <h4 className="flip-back-text"> 
                            Served as the team lead by planning milestones, managing time, and assigning tasks; while solving
                            difficult and ambiguous problems, and navigating unforeseen roadblocks.  
                        </h4>
                        <h4 className="flip-back-text"> 
                            Completed a prototype design of the belay system on schedule by implementing Python and C
                            code and utilizing embedded system technologies such as UART, I2C, SPI, and ADCs.
                        </h4>
                        <a href="https://youtu.be/drQGYvJ-_U8" target="_blank">watch the demo</a>
                    </div>
                </ReactCardFlip>

                <ReactCardFlip isFlipped={portClick} flipDirection="vertical">
                    <div className="flip-front" onClick={handlePort}>
                        <h1 className = "flip-text"> Personal Portfolio</h1>
                        <h3 className = "flip-text">Software Engineer</h3>
                    </div>

                    <div className="flip-back" onClick={handlePort}>
                        <h2 className="flip-back-text"> Software Engineer</h2>
                        <h3 className="flip-back-text"> 
                            Designed and implemented this website to create a platform to display
                            my work experience as an engineer.  
                        </h3>
                        <h3 className="flip-back-text"> 
                            Utilized ReactJS, HTML, and CSS to create a clean and professional looking website.  
                        </h3>
                    </div>
                </ReactCardFlip>

                <ReactCardFlip isFlipped={earthClick} flipDirection="vertical">
                    <div className="flip-front" onClick={handleEarth}>
                        <h1 className = "flip-text">Earth News</h1>
                        <h3 className = "flip-text">Software Engineer</h3>
                    </div>

                    <div className="flip-back" onClick={handleEarth}>
                        <h2 className="flip-back-text"> Software Engineer</h2>
                        <h3 className="flip-back-text"> 
                            Implemented a news aggregator website to create a site to view and share news.
                        </h3>
                        <h3 className="flip-back-text"> 
                            Authored code in ReactJS, HTML, and CSS to create a clean and professional looking news site.  
                        </h3>
                        <a href="https://earthnews.netlify.app" target="_blank">Check it out here</a>
                    </div>
                </ReactCardFlip>

                <ReactCardFlip isFlipped={procClick} flipDirection="vertical">
                    <div className="flip-front" onClick={handleProc}>
                        <h1 className = "flip-text"> SEAL</h1>
                        <h3 className = "flip-text">Electrical Engineer</h3>
                    </div>

                    <div className="flip-back" onClick={handleProc}>
                        <h2 className="flip-back-text">Electrical Engineer</h2>
                        <h3 className="flip-back-text">
                            Collaborated on the AeroSpec project
                            to help create a fully modular real-time air quality sensor system by prototyping and manufacturing PCBs.
                        </h3>
                        <h3 className="flip-back-text"> 
                            Conducted research to minimize the size of the PCB and communicated progress at weekly team meetings. 
                        </h3>
                    </div>
                </ReactCardFlip>
                
                <ReactCardFlip isFlipped={veriClick} flipDirection="vertical">
                    <div className="flip-front" onClick={handleVeri}>
                        <h1 className = "flip-text">Pipelined Processor</h1>
                        <h3 className = "flip-text">Computer Architect</h3>
                    </div>

                    <div className="flip-back" onClick={handleVeri}>
                        <h2 className="flip-back-text">Computer Architect</h2>
                        <h3 className="flip-back-text"> 
                            Built a pipelined processor up from the logic gate level using SystemVerilog
                        </h3>
                        <h3 className="flip-back-text"> 
                            Tested the processor by running sorting algorithms on the processor and analyzing the 
                            results in ModelSim. 
                        </h3>
                       
                    </div>
                </ReactCardFlip>
                </div>
            </div>
        )
    }

export default Projects