import React, {useEffect, useState} from 'react';
import Gate from '../Gate';
import {StyledBoard} from './style';
import Cable from "../Cable";

const Board = ({gates, setGates}) => {
    // TODO: utworzyć state przechowujace elementy osobno dla inputa i dla outputa
    // tego state przekazac do GATE
    // na podstawie warunkow potem laczyc, element z outputem jest wchlaniany przez tego z inputem
    // potem usunac element z outputem z globalnej tablicy gates
    // wywalic handleconnection bo useless ale na podstawie tego wykonac operacje na state
    // napisac funkcje w treenode do scalania
    // chyba git
    const [connection, setConnection] = useState([]);
    const [div1, setDiv1] = useState(null);
    const [div2, setDiv2] = useState(null);

    const handleConnection = (id) => {
        let tokens = id.split("-");

        //checking if id is already in array
        if(!connection.includes(tokens)){
            let contains = false;
            // checking if node id is already in array
            for(let conn of connection){
                if(conn.includes(+tokens[0])) contains = true;
            }
            if(!contains) setConnection([...connection, id]);
        }

        let node;
        for(let gate of gates){
            let potentialNode = gate.findNode(tokens[0])
            if(potentialNode) {
                node = potentialNode
                break;
            }
        }

        // clearing table if amounts of inputs is higher than allowed
        if(connection.length === 2){
            console.log("XD")
            // setConnection([id])
        }
        console.log(node);
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