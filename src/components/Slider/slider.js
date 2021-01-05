import React from "react";
// import { Container } from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "../../style-util/globalStyle";

const Logo = ({ children, ...resProps }) => {
    const settings = {
        dots: true,
        arrow: true,
        fade: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <Container>
            <Slider
                {...settings}
                style={{
                    paddingTop: "30px",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                }}
            >
                <div style={{ width: "100%" }}>
                    <img
                        style={{
                            width: "100%",
                            objectFit: "cover",
                            height: "300px",
                        }}
                        key="1"
                        src="https://source.unsplash.com/1200x600/?chair"
                        alt=""
                    />
                </div>
                <div style={{ width: "100%" }}>
                    <img
                        style={{
                            width: "100%",
                            objectFit: "cover",
                            height: "300px",
                        }}
                        key="2"
                        src="https://source.unsplash.com/1200x600/?table"
                        alt=""
                    />
                </div>
                <div style={{ width: "100%" }}>
                    <img
                        style={{
                            width: "100%",
                            objectFit: "cover",
                            height: "300px",
                        }}
                        key="3"
                        src="https://source.unsplash.com/1200x600/?ikea"
                        alt=""
                    />
                </div>
                <div style={{ width: "100%" }}>
                    <img
                        style={{
                            width: "100%",
                            objectFit: "cover",
                            height: "300px",
                        }}
                        key="4"
                        src="https://source.unsplash.com/1200x600/?sofa"
                        alt=""
                    />
                </div>
                <div style={{ width: "100%" }}>
                    <img
                        style={{
                            width: "100%",
                            objectFit: "cover",
                            height: "300px",
                        }}
                        key="4"
                        src="https://source.unsplash.com/1200x600/?train"
                        alt=""
                    />
                </div>
            </Slider>
        </Container>
    );
};

export default Logo;
