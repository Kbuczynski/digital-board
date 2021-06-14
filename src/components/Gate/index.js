import React, {useEffect, useRef, useState} from 'react';
import Draggable from 'react-draggable';

import rotateImg from "../../assets/rotate.svg";
import {
    StyledGate,
    StyledGateInput,
    StyledGateInputsWrapper,
    StyledGateOutput,
    StyledGateOutputWrapper,
    StyledGateSymbol,
    StyledRotate
} from './style';
import {getOffset} from "../../utils/getOffset";
import Cable from "../Cable";

const Gate = ({gates, node, handleNewValue, handleNewPositions, setInputNodeId, setOutputNodeId}) => {
    const [icon, setIcon] = useState('');
    const [inputsArr, setInputsArr] = useState([]);
    const [rotate, setRotate] = useState(0);
  const [value, setValue] = useState(node.gate.value);
    const [gateX, setGateX] = useState(node.x);
    const [gateY, setGateY] = useState(node.y);

    const {gate} = node;

    useEffect(() => {
        const {gate} = node;

        const importSVG = async () => {
            const importedIcon = await import(`../../assets/${gate.symbol}`);
            setIcon(importedIcon.default);
        }

        const handleInputs = () => {
            const arr = [];
            for (let i = 0; i < gate.inputs; i++) arr.push(i);
            setInputsArr(arr);
        }

        importSVG();
        handleInputs();
    }, [gate.symbol, gate.inputs]);

    const handleValue = () => {
        const newValue = +!value;

        if (node.gate.name === "INPUT") {
            setValue(newValue);
            handleNewValue(node.id, newValue);
        }
    }


    const handlePosition = (e) => {
        setGateX(e.screenX)
        setGateY(e.screenY);
        gate.x = e.screenX;
        gate.y = e.screenY;
        handleNewPositions(node.id, e.screenX, e.screenY);
    }

    return (
        <>
            <Draggable
                handle=".handle"
                defaultPosition={{x: node.x, y: node.y}}
                onDrag={handlePosition}
            >
                <div className="handle" id={node.id} o>
                    <StyledRotate src={rotateImg} alt="rotate" onClick={() => setRotate(rotate + 90)}/>
                    {node.gate.name === "INPUT" ? value : ""}

                    <StyledGate rotate={rotate}>
                        <StyledGateInputsWrapper inputs={node.gate.inputs}>
                            {
                                inputsArr.map((index) => <StyledGateInput id={`${node.id}-input-${index}`} key={index}
                                                                          onClick={() => {
                                                                            setInputNodeId(+node.id)
                                                                          }}/>)

                            }
                        </StyledGateInputsWrapper>

                        <StyledGateSymbol src={icon} alt={node.gate.name} onClick={handleValue}/>

                        {
                            node.gate.name !== "DIODE" &&
                            <StyledGateOutputWrapper>
                                <StyledGateOutput id={`${node.id}-output`} onClick={() => {
                                    setOutputNodeId(+node.id)
                                }}/>
                            </StyledGateOutputWrapper>
                        }

                    </StyledGate>
                </div>
            </Draggable>

            {
                <Cable gates={gates} node={node} gateX={gateX} gateY={gateY} />
            }

            {node.descendants.map((descendant, index) => {

                return <Gate key={`${descendant.gate.name}-${index}`} gates={gates} node={descendant} handleNewValue={handleNewValue}
                             handleNewPositions={handleNewPositions}  setInputNodeId={setInputNodeId} setOutputNodeId={setOutputNodeId}/>
            })}
        </>
    );
}

export default Gate;