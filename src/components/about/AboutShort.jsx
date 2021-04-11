import React from 'react';
import { SiAboutDotMe } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import { IoLanguageSharp } from "react-icons/io5";
import { FaSass, FaHtml5, FaGithub } from 'react-icons/fa';
import { SiJquery, SiReact, SiAdobephotoshop, SiNetlify } from "react-icons/si";
const AboutLong = () => {
    return ( 
        <div className="about-text short-about">
            <div className="about-background">
                <h3><SiAboutDotMe/></h3>
                <ul>
                    <li>
                        <li>#Taiwanese</li>
                        <li>#Heidelberg University</li>
                        <li>#Exchange Student at Kyoto University</li>
                        <li>#Master of Art</li>
                        <li></li>
                    </li>
                </ul>
            </div>
            <div className="about-skills-lang">
                    <h3><IoLanguageSharp /></h3>
                    <ul>
                        <li>#Mandarin</li>
                        <li>#Japanese</li>
                        <li>#English</li>
                        <li>#German</li>
                    </ul>
                </div>
            <div className="about-skills-coding">
                    <h3><BsCodeSlash/></h3>
                    <ul>
                        <li><FaHtml5/></li>
                        <li><FaSass/></li>
                        <li><SiJquery/></li>
                        <li><SiReact/></li>
                        <li><SiAdobephotoshop/></li>
                        <li><FaGithub/></li>
                        <li><SiNetlify/></li>
                    </ul>
            </div>
        </div>
    );
}
 
export default AboutLong;