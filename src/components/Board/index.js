import React from 'react';
import Gate from '../Gate';
import { StyledBoard } from './style';

const Board = ({ gates, setGates }) => {

    return (
        <StyledBoard>
            {
                gates.map((gate, index) => <Gate key={`${gate.name}-${index}`} gate={gate} />)
            }
        </StyledBoard>
    );
}

export default Board;