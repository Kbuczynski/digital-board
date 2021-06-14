import React, {useEffect, useState} from 'react';
import Gate from '../Gate';
import {StyledBoard} from './style';
import Cable from "../Cable";
import {getOffset} from "../../utils/getOffset";

const Board = ({gates, setGates}) => {
    const [inputNodeId, setInputNodeId] = useState(null);
    const [outputNodeId, setOutputNodeId] = useState(null);

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
                    let code = inputNode.add(tempNode);
                    let gates2 = gates;
                    if(code === 0) gates2.splice(outputNodeIndex, 1);
                    setGates(gates2);
                }

                setInputNodeId(null);
                setOutputNodeId(null);
            }
        }
    }, [inputNodeId, outputNodeId])

    const handleNewPositions = (id, x, y) => {
        let node;
        for(let gate of gates){
            let potentialNode = gate.findNode(id);
            if(potentialNode){
                node = potentialNode;
                break;
            }
        }

        if (node) {
            const newGates = gates;
            gates[0].updatePosition(node, x, y);
            setGates(newGates);
        }
    }


    return (
        <StyledBoard>
            {

                gates.map((node, index) => <Gate key={`${node.gate.name}-${index}`} gates={gates} node={node} handleNewValue={handleNewValue} handleNewPositions={handleNewPositions}setInputNodeId={setInputNodeId} setOutputNodeId={setOutputNodeId} />)
            }

        </StyledBoard>
    );
}

export default Board;