import React from "react";
import {Link} from "react-router-dom"
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div classname="title-hero">
                <h1>Pathways</h1>
                <p>this is a description of the app</p>              
            </div>
            <div classname = "profile-select">
                <div>
                    <h2>Create a new Path</h2>
                    <Link to={'/writer'}>
                    <button classname="btn">Get Started!</button>
                    </Link>
                </div>
                <div>
                    <h2>Find a new adventure</h2>
                    <Link to={'/reader'}>
                    <button classname="btn">Get Started!</button>
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default Home;
