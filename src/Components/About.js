import {useState} from 'react'
import '../ComponentStyles/About.css';
import landingPic from '../media/landing_photo.jpg'
import bikePic from '../media/bike_photo.jpg'
import climbPic from  '../media/climbing.jpg'
import hohPic from '../media/hoh_photo.jpg'



export default function About() {

    const pics = [landingPic, bikePic, climbPic, hohPic]

    const [picNum, setPicNum] = useState(0)
    
    
    const setPic = () => {
        return (pics[picNum])
    }

    const handlePicSelect = (e) => {
        //e.preventDefault()
        console.log(e)
        setPicNum(e.target.value)
    }
    let [content, setContent] = useState('background')

    const handleContent = (e) => {
        e.preventDefault()
        setContent(e.target.value)
    }

    const renderContent = () => {
        switch(content) {
            case 'background':
                return (<div className = 'content' id = 'background'>
                <p>Though I am now working in software, most of my background has been in mechanical engineering.
                      I received my Bachelors of science in Mechanical Engineering from Michigan Technological 
                      University in the summer of 2017.  For much of the time I attended MTU, I was a part time 
                      student, and I was working part time jobs for the majority of my time there.  I managed to 
                      pay for a significant amount of my own schooling with internships and part time jobs.  I 
                      worked as a short order cook, caterer, delivery driver, bartender, and every now and again 
                      taught a swing dance or ballroom class with a friend.  This drew out the college experience 
                      a little bit, but I graduated with much less debt that I otherwise would have. Upon graduation 
                      I quickly got a job at a tier 1 automotive supplier as an application engineer.  Different 
                      industries like to define this position differently; for automotive, think a combination of 
                      design, program management, quality, and sales. I was responsible for being the voice of the 
                      customer and primary engineering contact for customers. Our team was also responsible for new 
                      design concepts if we did not have the product the customer was looking for.  Then in 2020 
                      Covid happened.  The company that was so proud of not laying anyone off in 2008, laid a ton 
                      of people off, myself included.  To make matters worse, Ford, GM, and FCA (now Stelantis) 
                      canceled many of their orders for parts including chipsets. This cemented the automotive 
                      recession for more than a year. Of the past 24 months, I have spent around 17 of them actively 
                      job searching.  I did manage to find a position with a materials research company, but left 
                      because of an extremely hostile work environment, as well as to pursue other paths. Recently 
                      the auto industry has begun hiring again and I have been receiving calls from recruiters about 
                      entry level application and sales positions. But I have seen and been a part of that world and 
                      I don’t mean to return.</p>
            </div>);
            case 'software':
                return (<div className = 'content'>
                <p>After becoming disillusioned with The automotive industry, I settled on software as a new career 
                    path.  This was in part due to my proximity to the industry, having several good friends find very 
                    rewarding careers in software, and because it seemed to be an industry where my analytical engineer 
                    brain could thrive without the red tape and career gatekeeping prevalent in the auto industry. I 
                    became an engineer because I wanted to build cool things and solve challenging problems; and after 
                    one particularly frustrating work day, my girlfriend (also in software) put words to a thought I 
                    had had many times before, that she had built far more in less time as a software engineer than I 
                    had as a mechanical engineer.  
                    Information is also far more accessible in the software world.  If there is a new technology that 
                    I want to learn to 
                    advance my career, information and tools to do so are readily available. In the automotive industry, 
                    if you want to learn a new technology, software, or get a new certification you are mostly reliant 
                    on your employer to train you, otherwise you can end up paying tens of thousands of dollars for a 
                    license of a software suit to practice or a six sigma certification. 
                    All of this is besides the more tangible reasons for switching, higher average salary, higher average 
                    vacation time, upward mobility, lateral mobility, and the ability to live and work outside of metro 
                    Detroit and Ohio if I so choose.  
                    The short version is, after about a year of careful, though, planning, and education, I think that 
                    software is an area in which I can have a thriving career.</p>
            </div>);
            case 'personal':
                return (<div className = 'content'>
                <p>Really i’m just a guy who grew up camping all the time trying to be outdoorsy in metro-Detroit.  
                    Currently, when I am not chasing jobs and learning more about coding full time, I am spending time 
                    riding my bike(s) many miles on road and trail.  You can also find me at one of the local climbing 
                    gyms quite often where I am currently trying to break into the 5.11 range.  Time spent outdoors is 
                    usually time well spent and I try to spend quite a lot of it there.  Coming up this year I plan on 
                    riding my bike from Pittsburgh to Washington DC, as well as completing a 210 mile gravel race across
                     Michigan's lower peninsula.  I would love to start mountaineering, and climbing some of the big 
                     peaks out west, but that comes with time and money neither of which I have much of at the moment.</p>
            </div>);
        }
    }
    const testPage = () => {
        console.log(renderContent())
    }

    return(
        <div className = 'About-container'>
            <div className = 'carousel-container'>
                <img className = 'displayed-pic'  src = {setPic()} alt = 'semi proffesional phto of Todd'/>
                <div className = 'radio-buttons'>
                    <input type="radio" name="displayed-photo" value={0} onChange = {(e) => {handlePicSelect(e)}}/>
                    <input type="radio" name="displayed-photo" value={1} onChange = {(e) => {handlePicSelect(e)}}/>
                    <input type="radio" name="displayed-photo" value={2} onChange = {(e) => {handlePicSelect(e)}}/>
                    <input type="radio" name="displayed-photo" value={3} onChange = {(e) => {handlePicSelect(e)}}/>
                </div>
            </div>
            <div className = 'info-container'>
                <div className = 'button-container'>
                    <button style = {{
                    //  borderBottom: content === 'background'? 'none' : '2px solid #59c1ee',
                    //  backgroundColor: content === 'background'? '#ecf8fd' : '#c8eaf9',
                     boxShadow: content === 'background'? 'none' : `inset 0px 12px 8px -10px #CCC, inset 0px -12px 8px -10px #CCC, inset 0 0 12px 5px #ccc`}} className = 'contentSelect' value = 'background' onClick = {handleContent}>Background</button>
                    <button style = {{
                        // borderBottom: content === 'software'? 'none' : '2px solid #59c1ee',
                        // backgroundColor: content === 'software'? '#ecf8fd' : '#c8eaf9',
                        boxShadow: content === 'software'? 'none' : `inset 0px 12px 8px -10px #CCC, inset 0px -12px 8px -10px #CCC, inset 0 0 12px 5px #ccc`}} className = 'contentSelect' value = 'software' onClick = {handleContent}>Why Software</button>
                    <button style = {{
                        // borderBottom: content === 'personal'? 'none' : '2px solid #59c1ee',
                        // backgroundColor: content === 'personal'? '#ecf8fd' : '#c8eaf9',
                        boxShadow: content === 'personal'? 'none' : `inset 0px 12px 8px -10px #CCC, inset 0px -12px 8px -10px #CCC, inset 0 0 12px 5px #ccc`}} className = 'contentSelect' value = 'personal' onClick = {handleContent}>Personal</button>
                </div>
                {renderContent()}
            </div>
            <button onClick = {testPage} >test</button>
        </div>
    )
}