import styled from "styled-components/macro";

export const Wrapper = styled.div`
    /* width: 100%; */
    /* padding: 20px; */
`;
export const Item = styled.div`
    /* width: 100%; */
    padding: 20px;
    background: ${(props) => props.bgColor};
`;
export const Img = styled.img`
    width: 100%;
    object-fit: cover;
    height: 500px;
`;
