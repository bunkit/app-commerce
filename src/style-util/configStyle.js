const FONT_PRIMARY = `'Playfair Display', helvetica, serif`;
const FONT_SUBHEADING = `'Biryani', helvetica, serif`;
const FONT_HEADING = `'Hind Madurai', helvetica, serif`;

export const fontFamily = {
    heading: FONT_PRIMARY,
    subheading: FONT_SUBHEADING,
    body: FONT_HEADING,
};

export const fontSize = {
    xxs: `0.512em`,
    xs: `0.64em`,
    sm: `0.8em`,
    base: `16px`,
    md: `1.25em`,
    lg: `1.953em`,
    xl: `2.441em`,
    xxl: `3.052em`,
    hero: `3.815em`,
};

export const color = {
    brownFerra: "#7E6C6A",
    brownSpringWood: "#EAE3DA",
    dark: "#000000",
    darkGrape: "#454148",
    defaultWhite: "#FFFFFF",
    greenApple: "#DAEADB",
    grey: "#858585",
    orangeTacao: "#F8A585",
    purpleSolitude: "#DADAEA",
    whiteLily: "#E9EDEB",
    whiteSmoke: "#F4F4F4",
    borderGrey: "#BCBCBC",
    borderLine: "#C4C4C4",
};

export const border = {
    shadow: "3px 2px 20px 1px rgba(182, 182, 182, 0.33)",
};


export const Container = `
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
