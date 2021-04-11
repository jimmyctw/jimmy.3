import React, { useState } from 'react'
import Coding from './Coding'
import Photoshop from './Photoshop'

const Works = () => {
    const [ codingState, setCodingState ] = useState(false);
    const [ photoshopState, setPhotoshopState ] = useState(false);

    function showCoding(){
        if(codingState !== true){
            setCodingState(!codingState)
            setPhotoshopState( false )
        }
    }
    function showPhotoshop(){
        if(photoshopState !== true){
            setPhotoshopState(!photoshopState)
            setCodingState( false )
        }
    }

    return ( <> 
        <section className="section">
            <div className="sec-header">
                <h1>Works</h1>
            </div>
            <div className="sec-content">
                <div className="sec-btn-box">
                    <button className="sec-btn" onClick={showCoding}>Coding Projects</button>
                    <button className="sec-btn" onClick={showPhotoshop}>Photoshop Works</button>
                </div>           
                    { codingState && <Coding /> }
                    { photoshopState && <Photoshop /> }

            </div>


        </section>
    </>);
}
 
export default Works;