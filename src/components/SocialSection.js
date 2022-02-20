import React from "react";
import "../styles/SocialSection.css";

import StarCard from "./cards/StarCard";

import backgroundTopDesktop from "../images/bg-pattern-top-desktop.svg";
import backgroundBottomDesktop from "../images/bg-pattern-bottom-desktop.svg";
import backgroundTopMobile from "../images/bg-pattern-top-mobile.svg";
import backgroundBottomMobile from "../images/bg-pattern-bottom-mobile.svg";

import starsItems from "../utils/starsItems";
import customerTestimonial from "../utils/customerTestimonial";
import TestimonialCard from "./cards/TestimonialCard";

const SocialSection = () => {
    const mobile = window.innerWidth <= 1024;

    return (
        <div className="SocialSection">
            <img
                src={mobile ? backgroundTopMobile : backgroundTopDesktop}
                alt="Background Top"
                className="social__background__top"
            />
            <img
                src={mobile ? backgroundBottomMobile : backgroundBottomDesktop}
                alt="Background Bottom"
                className="social__background__bottom"
            />
            <div className="social__content">
                <div className="social__content__information">
                    <h1>10,000+ of our user love our products.</h1>
                    <p>
                        We only provide great products combined with excellent
                        customer service. See what our satisfied customer are
                        saying about our services.
                    </p>
                </div>
                <div className="social__content__stars">
                    {starsItems.map(({ id, title, position, stars }) => (
                        <StarCard
                            key={id}
                            stars={stars}
                            title={title}
                            position={position}
                        />
                    ))}
                </div>
                <div className="social__content__testimonial">
                    {customerTestimonial.map(
                        ({ id, position, testimonial, avatar, name, status }) => (
                            <TestimonialCard
                                key={id}
                                avatar={avatar}
                                name={name}
                                status={status}
                                position={position}
                                testimonial={testimonial}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default SocialSection;
