import React from "react";
import {Link} from "react-router-dom"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header/>
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
            <Footer/>
        </div>
    )
}

export default Home;
