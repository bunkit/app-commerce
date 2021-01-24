import React from "react";
import { Wrapper, Item, Img, Container } from "./style";
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
Slider.Container = ({ children, color, ...restProps }) => {
    return <Container bgColor={color}>{children}</Container>;
};
Slider.Img = ({ children, ...restProps }) => {
    return <Img {...restProps}>{children}</Img>;
};
Slider.Left = ({ children, ...restProps }) => {
    return <Item {...restProps}>{children}</Item>;
};
Slider.Right = ({ children, ...restProps }) => {
    return <Item {...restProps}>{children}</Item>;
};
Slider.Title = ({ children, ...restProps }) => {
    return <Item {...restProps}>{children}</Item>;
};
Slider.Subtitle = ({ children, ...restProps }) => {
    return <Item {...restProps}>{children}</Item>;
};

Slider.Detail = ({ children, ...restProps }) => {
    return <Item {...restProps}>{children}</Item>;
};

Slider.Product = ({ children, ...restProps }) => {
    return <Item {...restProps}>{children}</Item>;
};

Slider.Promo = ({ children, ...restProps }) => {
    return <Item {...restProps}>{children}</Item>;
};
Slider.Link = ({ children, ...restProps }) => {
    return <Item {...restProps}>{children}</Item>;
};

export default Slider;
