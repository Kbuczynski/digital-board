import React from 'react';
import Gate from '../Gate';
import { StyledBoard } from './style';

const Board = ({ gates, setGates }) => {


    return (
        <StyledBoard>
            {
                gates.map((gate, index) => <Gate key={`${gate.gate.name}-${index}`} gate={gate.gate} descendants={gate.descendants}/>)
            }
        </StyledBoard>
    );
}

export default Board;