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
  .my-masonry-grid {
        display: -webkit-box; /* Not needed if autoprefixing */
        display: -ms-flexbox; /* Not needed if autoprefixing */
        display: flex;
        margin-left: -5px; /* gutter size offset */
        width: auto;
    }
    .my-masonry-grid_column {
        padding-left: 5px; /* gutter size */
        background-clip: padding-box;
    }

    /* Style your items */
    .my-masonry-grid_column > div { /* change div to reference your elements you put in     <Masonry> */
        background: grey;
        margin-bottom: 5px;
        overflow:hidden;
    }
`;

export default GlobalStyle;

export const Container = styled.div`
    width: 1170px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
    *zoom: 1;
`;
export const ContainerMedium = styled(Container)`
    width: 700px;
`;
export const ContainerHeader = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 60px;
    width: 100%;
`;
export const HeaderFull = styled.div`
    background: #e9edeb;
`;

// export 
