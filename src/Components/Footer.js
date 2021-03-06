import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DescriptionIcon from '@material-ui/icons/Description';
import './Footer.css'

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#000",
        ['@media (max-width:780px)']: {
            flexDirection: "column"
            }
    },
    menuItem: {
        cursor:"pointer",
        flexGrow: 1,
        ['@media (max-width:780px)']: {
            paddingBottom: "1rem"
            }
    }
})

function Footer() {
    const classes = styles()
    return (
        <div>
            <div className='footer-container'>
                <ul className='foot-menu'>
                    <li className ='foot-item'>
                        <a href="https://github.com/jacobg826" target="_blank" className='styled-foot'><GitHubIcon/></a>
                    </li>
                    <li className ='foot-item'>
                        <a 
                        href="https://www.linkedin.com/in/jacob-gervais-27b2ba195/"
                        target="_blank"
                        className='styled-foot'><LinkedInIcon/></a>
                    </li>
                    <li className = 'foot-item'>
                        <a 
                            href="https://docs.google.com/document/d/14ieLnemzck-tZVOp8IfyDz_6AmnlGg9i6GiNd-kTVGQ/edit?usp=sharing"
                            target="_blank"
                            className="styled-foot">
                             <DescriptionIcon/>
                        </a>
                    </li>
                    <li className ='foot-item'>
                        <a href="mailto:gervais.jacob@gmail.com" target="_blank" className='styled-foot'><MailOutlineIcon/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer