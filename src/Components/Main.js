import {Link} from 'react-router-dom';
import '../ComponentStyles/main.css';
import landingPic from '../media/landing_photo.jpg'
import fbPic from '../media/fb.png'
import igPic from '../media/ig.jpg'
import linkedInPic from '../media/linkedin.jpg'
import gitHubPic from '../media/github.png'
import resume from '../PDFs/Krieger-Flatiron-Resume-02.pdf'


export default function Main() {

    return(
        <div className = 'landing-container'>
            {/* <div className = 'pic-container'>
                <img className = 'landing-pic' src = {landingPic} alt = "decent photo of Todd"/>
            </div> */}
            <div className = 'aside'>
                <h1 className = 'landing-name'>Todd Krieger</h1>
                <h2 className = 'landing-sub'>Developer, Engineer, for Hire</h2>
                <p className = 'landing-description'>Hi, I'm Todd Krieger, and I made this personal site from scratch. If you are here, hopefuly you are considering me for a job.
                    Feel free to click around to learn more about me and my work, or download my 
                    <a href = {resume} download> <b>Resume</b></a>.
                </p>
                <div className = 'social-links'>
                    <a className = 'social-link' target = '_blank' href = 'https://www.facebook.com/todd.krieger.14/'><img className = 'social-pic' src = {fbPic}/></a>
                    <a className = 'social-link' target = '_blank' href = 'https://www.instagram.com/toddwkrieger/'><img className = 'social-pic' src = {igPic}/></a>
                    <a className = 'social-link' target = '_blank' href = 'https://www.linkedin.com/in/todd-krieger-forhire/'><img className = 'social-pic' src = {linkedInPic}/></a>
                    <a className = 'social-link' target = '_blank' href = 'https://github.com/bashfulnovice'><img className = 'social-pic' src = {gitHubPic}/></a>
                </div>
            </div>
        </div>
    )
}
