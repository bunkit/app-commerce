import styled, { createGlobalStyle } from "styled-components";
import { fontFamily, fontSize, color } from "./configStyle";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${fontFamily.body};
	color: ${color.darkGrape};
    background: white;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
    text-shadow: rgba(0,0,0,.01) 0 0 1px;
    margin: 0;
	padding: 0;
    width: 100%;
    overflow-x: hidden;
    font-size: ${fontSize.base};
  }
  * {
      box-sizing:border-box;
      margin:0;
      padding:0;
  }
  a {
      color:inherit;
      text-decoration:none;
      &:hover,&:focus {
          color:${color.orangeTacao}
      }
      transition: color .2s ease-in-out;
  }
  .slick-dots {
    left:0
  }
  .slick-prev, .slick-next {
      width:30px;
      height:30px;
  }
  .slick-prev {
      left:-15px;
  }
  .slick-next {
    right:-15px;
  }
  .slick-prev:before, .slick-next:before {
      color:#927266;
      font-size:30px;
  }
`;

export default GlobalStyle;


// export 
