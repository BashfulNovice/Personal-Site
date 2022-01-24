import {Link} from 'react-router-dom'
import '../ComponentStyles/header.css';

export default function Header({currentUser, setCurrentUser}) {

    return(
        <div className = 'header'>
            <Link to = '/'>Home</Link>
            <Link to = '/work'>Work</Link>
            <Link to = '/about'>About</Link>
        </div>
    )
}