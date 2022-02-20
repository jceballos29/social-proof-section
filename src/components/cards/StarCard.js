import React, { useEffect, useState } from "react";
import "../../styles/cards/StarCard.css";

import star from "../../images/icon-star.svg";

const StarCard = ({ title, stars, className }) => {
    const [marginRight, setMarginRight] = useState(0);

    useEffect(() => {
        if (className === "top") {
            setMarginRight(100);
        } else if (className === "middle") {
            setMarginRight(50);
        } else {
            setMarginRight(0);
        }
    }, [className]);

    return (
        <div className="StarCard" style={{ marginRight: marginRight }}>
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
