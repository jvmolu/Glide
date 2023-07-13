import React from "react";

import "./HomePage.css";
import CenterTextCard from "../../Components/CenterTextCard/CenterTextCard";
import MainCarousel from "../../Components/MainCarousel/MainCaraousel";


const HomePage = () => {

    var items = [
        {
            name: "Apple",
            surname: "iPhone 14",
            class: "Skins",
            description: "Protect and personalize yours with a removable full-color skin!",
        },
        {
            name: "Laptop",
            surname: "",
            class: "Skins",
            description: "Protect and personalize yours with a removable full-color skin!",
        }
    ]

    return (

        <div className="home-page">
            
            <h1 className="text-3xl font-bold underline">Home Page</h1>

            <MainCarousel items={items} />
            
            <CenterTextCard
                boldText="Laptop" 
                normalText="Skins" 
                backgroundImage={"https://static.decalgirl.com/assets/img/home/thebest-3.2.jpg"}
            />

            <CenterTextCard
                boldText="Mobile" 
                normalText="Skins" 
                backgroundImage={"https://static.decalgirl.com/assets/img/home/thebest-1.2.jpg"} 
            />

        </div>
    )
}


export default HomePage;