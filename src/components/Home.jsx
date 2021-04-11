import React from 'react'
import homeImg from '../assests/home/homeImg.svg'
import SvgColor from 'react-svg-color'
import homeVideo from '../assests/home/homevideo.mp4'

const Home = () => {
    // const homeImgStyle ={    height: "28rem"    }
    return ( <> 
        <section className="section home-container">
            <div className="sec-header home-header">
                <h1>Hej!! I am JIMMY!</h1>
            </div>
            <div className="home-content">
                <SvgColor svg={homeImg} width={150}    colors={["#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7",  "#FFFDF7",  "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7", "#FFFDF7"]}   />
            </div>
            <div className="home-video-container">
                <video className="home-video" autoPlay muted loop src={homeVideo} />
            </div>

        </section>
    
    </>);
}
export default Home;