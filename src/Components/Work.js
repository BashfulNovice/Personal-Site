import {useState} from 'react'
import '../ComponentStyles/work.css';

export default function Header() {



    return(
        <div className = 'workContainer'>
            <div className = 'carouselContainer'>
                <div className = 'carousel'>
                    <div className = 'inner' style = {{transform: "translateX(-100%)"}}>
                        <div className = 'projectCard'>First</div>
                        <div className = 'projectCard'>Seccond</div>
                        <div className = 'projectCard'>Third</div>
                        <div className = 'projectCard'>Fourth</div>
                    </div>
                </div>
            </div>
        </div>
    )
}