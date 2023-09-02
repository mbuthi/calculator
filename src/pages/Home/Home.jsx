import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import "./Home.css"
const Home = () => {
    return (
        <>
        <Navbar />
        <div className="body">
            <Card />
        </div>
        </>
    )
}

export default Home