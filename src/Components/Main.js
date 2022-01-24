import {Link} from 'react-router-dom';
import '../ComponentStyles/main.css';
import landingPic from '../media/landing_photo.jpg'


export default function Main({currentUser, setCurrentUser}) {

    return(
        <div className = 'landing-container'>
            {/* <div className = 'pic-container'>
                <img className = 'landing-pic' src = {landingPic} alt = "decent photo of Todd"/>
            </div> */}
            <div className = 'aside'>
                <h1>Todd Krieger</h1>
                <h2>Developer, Engineer, for Hire</h2>
                <p className = 'landing-description'>Hi, I'm Todd Krieger, and I made this site. If you are here, hopefuly you are considering me for a job.
                    Feel free to click around to learn more about me and my work.
                </p>
                <button>Enter</button>
            </div>
        </div>
    )
}
