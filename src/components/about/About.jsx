import React, {useState} from 'react';
import AboutShort from './AboutShort';
import AboutLong from './AboutLong';
import aboutImg from '../../assests/about/aboutImg.png'

const About = () => {
    const [ shortIntro, setShortIntro ] = useState(false);
    const [ longIntro, setLongIntro ] = useState(false);
    
    // function shortOrLong(e){
    //     const selected = e.target.outerText;
    //     const newstate = selected.toLowerCase() + "Intro";
    //     const setNewstate = "set" + selected.charAt(0) + selected.slice(1).toLowerCase() + "Intro";
    //     setNewstate(!newstate)
    // }
    function toShort(){
        if(shortIntro !== true){
            setShortIntro(!shortIntro)
            setLongIntro( false )
        }
    }
    function toLong(){
        if(longIntro !== true){
            setLongIntro(!longIntro)
            setShortIntro( false )
        }
    }


return ( <> 
        <section className="section">
            <div className="sec-header">
                <h1>About</h1>
            </div>
            <article className="sec-content about-content"> 
                <div className="about-img-container">
                    <img className="about-img" src={aboutImg} alt="anout"/>
                </div>
                <div className="sec-btn-box">
                    <button className="sec-btn short" onClick={toShort} >SHORT</button>
                    <button className="sec-btn long" onClick={toLong} >LONG</button>
                </div>
                { shortIntro && <AboutShort />}
                { longIntro && <AboutLong />}
                



            </article>
        </section>
    </>);
}
 
export default About;




