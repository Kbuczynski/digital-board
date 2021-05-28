import styled from 'styled-components'

export const StyledGate = styled.div`
    display: flex;
    cursor: move;
`;

export const StyledGateInputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`;

export const StyledGateInput = styled.div`
    height: .25rem;
    width: 1rem;
    background-color: ${ ({ theme }) => theme.colors.primary };
`;

export const StyledGateSymbol = styled.img``;

export const StyledGateOutputWrapper = styled.div`
    margin: auto 0;
`;

export const StyledGateOutput = styled.div`
    height: .25rem;
    width: 1rem;
    background-color: ${ ({ theme }) => theme.colors.primary };
`; 