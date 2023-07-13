import React from "react";

import "./CenterTextCard.css";

const CenterTextCard = ({ boldText, normalText, backgroundImage }) => {

    return (
        <div className="center-text-card
            flex flex-col justify-center items-center
            w-full h-full m-3 cursor-pointer
            bg-cover bg-center bg-no-repeat
            relative shadow-xl 
            transition-all duration-200 ease-in-out hover:shadow-2xl">
            
            {/* Background Image */}
            <div className="center-text-card__background
                w-full h-full filter brightness-50 opacity-70
                absolute top-0 left-0
                bg-cover bg-center bg-no-repeat rounded-lg"
                style={{ backgroundImage: `url(${backgroundImage})` }}>
            </div>
            
            <div className="center-text-card__text-container
                flex flex-col justify-center items-center
                text-white text-center p-4 z-10">

                <h1 className="center-text-card__bold-text
                    text-4xl font-bold mb-3">
                    {boldText}
                </h1>

                <h1 className="center-text-card__normal-text
                    text-2xl font-light">
                    {normalText}
                </h1>

            </div>
        </div>
    );
};

export default CenterTextCard;
