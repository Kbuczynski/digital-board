import React, {useEffect, useState} from 'react';
import Gate from '../Gate';
import {StyledBoard} from './style';
import Cable from "../Cable";
import {getOffset} from "../../utils/getOffset";

const Board = ({gates, setGates}) => {
    // TODO: utworzyć state przechowujace elementy osobno dla inputa i dla outputa
    // tego state przekazac do GATE
    // na podstawie warunkow potem laczyc, element z outputem jest wchlaniany przez tego z inputem
    // potem usunac element z outputem z globalnej tablicy gates
    // wywalic handleconnection bo useless ale na podstawie tego wykonac operacje na state
    // napisac funkcje w treenode do scalania
    // chyba git
    const [inputNodeId, setInputNodeId] = useState(null);
    const [outputNodeId, setOutputNodeId] = useState(null);
    const [div1, setDiv1] = useState(null);
    const [div2, setDiv2] = useState(null);

    const handleNewValue = (id, value) => {
        const newGates = gates;
        let node;
        for(let gate of gates){
            let potentialNode = gate.findNode(id);
            if(potentialNode){
                node = potentialNode;
                break;
            }
        }
        if(node) node.changeValue(id,value);
        setGates(newGates);
    }

    useEffect(() => {
        console.log("INPUT:", inputNodeId)
        console.log("OUTPUT:", outputNodeId)
        if(inputNodeId && outputNodeId){
            if(inputNodeId !== outputNodeId){
                let inputNode;
                let outputNode;
                let outputNodeIndex;
                for(let gate of gates){
                    let potentialNode = gate.findNode(inputNodeId);
                    if(outputNodeId == +gate.id) outputNode = gate;
                    if(potentialNode){
                        inputNode = potentialNode;
                        break;
                    }
                }
                for(let i = 0; i < gates.length; i++) {
                    if(outputNodeId === +gates[i].id){
                        outputNode = gates[i];
                        outputNodeIndex = i;
                    }
                }

                if(outputNode && !outputNode.parent){
                    let tempNode = outputNode;
                    tempNode.depth = inputNode.depth + 1
                    inputNode.add(tempNode);
                    let gates2 = gates;
                    gates2.splice(outputNodeIndex, 1);
                    setGates(gates2);
                    // console.log("INPUTNODE: ", inputNode);
                    // console.log("OUTPUT: ", outputNode);
                    // console.log("CONNECTING")
                }

                setInputNodeId(null);
                setOutputNodeId(null);
            }
        }
    }, [inputNodeId, outputNodeId])

    return (
        <StyledBoard>
            {
                gates.map((node, index) => <Gate key={`${node.gate.name}-${index}`} node={node} handleNewValue={handleNewValue} setInputNodeId={setInputNodeId} setOutputNodeId={setOutputNodeId}/>)
            }

            <Cable output={div1} input={div2}/>
        </StyledBoard>
    );
}

export default Board;