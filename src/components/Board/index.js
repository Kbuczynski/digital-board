import React, {useEffect, useState} from 'react';
import Gate from '../Gate';
import {StyledBoard} from './style';
import Cable from "../Cable";

const Board = ({gates, setGates}) => {
    const [connection, setConnection] = useState([]);
    const [div1, setDiv1] = useState(null);
    const [div2, setDiv2] = useState(null);

    const handleConnection = (id) => {
        console.log(id);
        let tokens = id.split("-");
        setConnection(...[tokens[0]]);
        console.log(connection)
    }

    const handleNewValue = (id, value) => {
        const newGates = gates;
        gates[0].changeValue(id, value);
        setGates(newGates);
    }

    useEffect(() => {
        setDiv1(document.getElementById(gates[0]?.id));
        setDiv2(document.getElementById(gates[0]?.descendants[0]?.id));
    }, [])

    return (
        <StyledBoard>
            {
                gates.map((node, index) => <Gate key={`${node.gate.name}-${index}`} node={node} handleNewValue={handleNewValue} handleConnection={handleConnection}/>)
            }

            {
                div1 !== null && <Cable output={div1} input={div2}/>
            }
        </StyledBoard>
    );
}

export default Board;