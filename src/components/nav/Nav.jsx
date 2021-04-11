import React from 'react'
import { Link } from "react-router-dom";
import { navitems }  from "./navitems"

const Nav = () => {
    return ( <> 
        <nav>
            <div className="nav-header">
                <h1>
                    JIMMY.3
                </h1>
            </div>
            <div className="nav-content"> 
                <ul>
                    {navitems.map((item, index) => {
                        return(
                            <Link to={item.url} key={index}>
                                <li >
                                    <a className={item.cName} href={item.url}>
                                        {item.itemName}
                                    </a>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </nav> 




    
    </>);
}
 
export default Nav;