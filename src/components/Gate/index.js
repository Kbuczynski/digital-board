import React, {useEffect, useRef, useState} from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

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

const Gate = ({node, handleNewValue}) => {
    const [icon, setIcon] = useState('');
    const [inputsArr, setInputsArr] = useState([]);
    const [rotate, setRotate] = useState(0);
    const [value, setValue] = useState(0);
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

    // const handlePosition = (e) => {
    //     const target = e.target;
    //     const position = getOffset(target);
    //     console.log(position)
    //
    //     handleNewPosition(node.id, position);
    // }

    return (
        <>
            <Draggable
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
            >
                <div className="handle" id={node.id} o>
                    <StyledRotate src={rotateImg} alt="rotate" onClick={() => setRotate(rotate + 90)}/>
                    {node.gate.name === "INPUT" ? value : ""}

                    <StyledGate rotate={rotate}>
                        <StyledGateInputsWrapper inputs={node.gate.inputs}>
                            {
                                inputsArr.map((index) => <StyledGateInput id={`${node.id}-input-${index}`} key={index}
                                                                          onClick={() => {

                                                                          }}/>)

                            }
                        </StyledGateInputsWrapper>

                        <StyledGateSymbol src={icon} alt={node.gate.name} onClick={handleValue}/>

                        {
                            node.gate.name !== "DIODE" &&
                            <StyledGateOutputWrapper>
                                <StyledGateOutput id={`${node.id}-output`} onClick={() => {

                                }}/>
                            </StyledGateOutputWrapper>
                        }

                    </StyledGate>
                </div>
            </Draggable>
            {node.descendants.map((descendant, index) => {
                return <Gate key={`${descendant.gate.name}-${index}`} node={descendant} handleNewValue={handleNewValue}
                              />
            })}
        </>
    );
}

Gate.propTypes = {
    gate: PropTypes.shape({
        name: PropTypes.string.isRequired,
        operation: PropTypes.func,
        symbol: PropTypes.string.isRequired,
        inputs: PropTypes.number,
    }),
}

export default Gate;