import React, {useEffect, useState} from 'react';
import Gate from '../Gate';
import {StyledBoard} from './style';
import Cable from "../Cable";
import {getOffset} from "../../utils/getOffset";

const Board = ({gates, setGates}) => {
    const [connection, setConnection] = useState([]);
    const [div1, setDiv1] = useState(null);
    const [div2, setDiv2] = useState(null);

    const handleConnection = (id) => {
        // console.log(id);
        let tokens = id.split("-");
        setConnection(...[tokens[0]]);
        // console.log(connection)
    }

    const handleNewValue = (id, value) => {
        const newGates = gates;
        gates[0].changeValue(id, value);
        setGates(newGates);
    }

    // const handleNewPositions = (id, positions) => {
    //     const newGates = gates;
    //     console.log(positions)
    //     gates[0].updatePosition(id, positions.left, positions.top);
    //     setGates(newGates);
    // }

    useEffect(() => {
        const d1 = document.getElementById(gates[2]?.id);
        const d2 = document.getElementById(gates[1]?.id);

        if (getOffset(d1) !== div1 || getOffset(d2) !== div2) {
            setDiv1(getOffset(d1));
            setDiv2(getOffset(d2));
        }

    }, [gates])

    return (
        <StyledBoard>
            {
                gates.map((node, index) => <Gate key={`${node.gate.name}-${index}`} node={node} handleNewValue={handleNewValue} handleConnection={handleConnection} />)
            }

            <Cable output={div1} input={div2}/>
        </StyledBoard>
    );
}

export default Board;