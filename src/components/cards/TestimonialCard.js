import React from "react";
import "../../styles/cards/TestimonialCard.css";

const TestimonialCard = ({ position, testimonial, avatar, name, status }) => {
    return (
        <div className="TestimonialCard" style={{ marginTop: position }}>
            <div className="testimonial__header">
                <img src={avatar} alt="Customer Avatar" />
                <div className="testimonial__header__information">
                    <p className="customer__name">{name}</p>
                    <p className="customer__status">{status}</p>
                </div>
            </div>
            <div className="testimonial__body">
                <p>"{testimonial}"</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
