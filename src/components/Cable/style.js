import styled from "styled-components";

export const StyledCable = styled.div`
    height: 0.4rem;
    background-color: #000;
    line-height: 1px;
    position: absolute;
    left: ${ ({ left }) => `${left}px`};
    top: ${ ({ top }) => `${top}px`};
    width: ${ ({ length }) => `${length}px`};
    -moz-transform: ${ ({ angle }) => `rotate(${angle}deg })` };
    -webkit-transform: ${ ({ angle }) => `rotate(${angle}deg })` };
    -o-transform: ${ ({ angle }) => `rotate(${angle}deg })` };
    -ms-transform:: ${ ({ angle }) => `rotate(${angle}deg })` };
    transform:: ${ ({ angle }) => `rotate(${angle}deg })` };
`;