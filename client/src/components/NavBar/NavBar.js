import React from "react";
import { Link } from "react-router-dom";

let NavBar = () => {
    const tabs = [ 'home', 'portal', 'writer', 'reader']

    return(
        <nav>
            <ul>
                {tabs.map(tab => (
                    <li key={tab}>
                        <Link to={'/'+ tab}>{tab}</Link>
                    </li>
                )
                )}
            </ul>
        </nav>
    )
}

export default NavBar

