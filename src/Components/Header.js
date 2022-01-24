import {Link} from 'react-router-dom'
import '../ComponentStyles/header.css';

export default function Header({currentUser, setCurrentUser}) {

    return(
        <div className = 'header'>
            <Link className = 'internal-link' to = '/'>Home</Link>
            <Link className = 'internal-link' to = '/work'>Work</Link>
            <Link className = 'internal-link' to = '/about'>About</Link>
        </div>
    )
}