import React, { useEffect, useState } from "react";
import "../../styles/cards/StarCard.css";

import star from "../../images/icon-star.svg";

const StarCard = ({ title, stars, position }) => {
    const desktop = window.innerWidth > 1024; 

    return (
        <div className="StarCard" style={ desktop ? { marginRight: position } : null}>
            <div className="stars">
                {Array(stars)
                    .fill(star)
                    .map((star, i) => (
                        <img key={i} src={star} alt="star" />
                    ))}
            </div>
            <h5>{title}</h5>
        </div>
    );
};

export default StarCard;
