import styled from 'styled-components'

export const StyledGate = styled.div`
    display: flex;
    position: relative;
    cursor: pointer;
    transform: ${ ({ rotate }) => `rotate(${rotate}deg)` };
    transition: transform .1s ease;
`;

export const StyledRotate = styled.img`
    position: absolute;
    top: -.5rem;
    right: 0;
    width: 20px;
    cursor: pointer;
`;

export const StyledGateInputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${ ({inputs}) => inputs > 1 ? "space-between" : "center"};
    align-items: flex-end;
`;

export const StyledGateInput = styled.div`
    height: .25rem;
    width: 1rem;
    background-color: ${ ({ theme }) => theme.colors.primary };
`;

export const StyledGateSymbol = styled.img`
    width: 75px;
    cursor: move;
`;

export const StyledGateOutputWrapper = styled.div`
    margin: auto 0;
`;

export const StyledGateOutput = styled.div`
    height: .25rem;
    width: 1rem;
    background-color: ${ ({ theme }) => theme.colors.primary };
`; 