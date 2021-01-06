import React from "react";
import { Wrapper, Item, Img } from "./style";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = ({ children, ...resProps }) => {
    const settings = {
        dots: true,
        arrows: false,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <Wrapper>
            <Slick {...settings}>
                {children}
            </Slick>
        </Wrapper>
    );
};

Slider.Item = ({ children,color, ...restProps }) => {
    return <Item bgColor={color}>{children}</Item>;
};
Slider.Img = ({ children, ...restProps }) => {
    return <Img {...restProps}>{children}</Img>;
};

export default Slider;
