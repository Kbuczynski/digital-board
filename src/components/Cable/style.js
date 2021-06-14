import styled from "styled-components";

export const StyledCable = styled.div`
    height: 0.2rem;
    background-color: #000;
    line-height: 1px;
    position: absolute;
    left: ${ ({ left }) => `${left}px`};
    top: ${ ({ top }) => `${top}px`};
    width: ${ ({ length }) => `${length}px`};
    transform: ${ ({ angle }) => `rotate(${angle}deg)`};
  z-index: -1;
`;