import styled from 'styled-components'

export const StyledMenu = styled.ul`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border: solid ${ ({theme}) => theme.colors.primary } .2rem;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    display: flex;
    justify-content: center;
    list-style-type: none;
`;

export const StyledMenuItem = styled.li`
    padding: 2rem;
  cursor: pointer;
`;