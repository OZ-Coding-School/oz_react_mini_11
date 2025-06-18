import styled from "styled-components";

const BlurBackground = styled.div.attrs((props) => ({
    "data-visible": props.visible,
}))`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    /* border: 5px solid black;
    border-radius: 30%; */
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent 70%), ${(props) => `url(${props.img})`};
    filter: blur(20px) brightness(0.5);
    opacity: ${(props) => (props.visible ? 1 : 0)};
    transition: opacity 0.6s ease-in-out;
    pointer-events: none;
`;

export default BlurBackground;
