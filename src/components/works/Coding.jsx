import React from 'react'
import { codingitems } from './codingitems'

const Coding = () => {
    let urlPath = '../../assests/works/coding/';
    return ( <> 
        <section className="coding-container">
            {codingitems.map((codingitem, index) => {
                return(
                    <div className="coding-item" key={index}>
                        <h1>{codingitem.projectName}</h1>
                        <img src={urlPath + codingitem.logoImg} alt=""/>
                        <p>{codingitem.projectDetails}</p>
                    </div>
                )
            })}
        </section>
    </>);
}
 
export default Coding;