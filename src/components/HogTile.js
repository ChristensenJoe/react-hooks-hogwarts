import React from "react";

function HogTile({ name, specialty, greased, weight, highestMedal, image }) {
    return (
        <div className="ui eight wide column">
            <div className="ui card">
                <div className="image">
                    <img src={image} alt="pigImage"/>
                </div>
                <div className="content">
                    <span className="header">{name}</span>
                    <div className="description">
                        {`Specialty: ${specialty}`}
                    </div>
                    <div className="description">
                        {`Highest Medal: ${highestMedal} | Weight: ${weight}`}
                    </div>
                </div>
                <div className="extra content">
                    <span>
                        {greased ? `Is Greased` : `Is not Greased`}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default HogTile;