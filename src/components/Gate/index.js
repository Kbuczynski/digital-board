import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

import rotateImg from "../../assets/rotate.svg"; 
import { StyledGate, StyledGateInput, StyledGateInputsWrapper, StyledGateOutput, StyledGateOutputWrapper, StyledGateSymbol, StyledRotate } from './style';

const Gate = ({ gate: { name, symbol, inputs } }) => {
    const [icon, setIcon] = useState('');
    const [inputsArr, setInputsArr] = useState([]);
    const [rotate, setRotate] = useState(0);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const importSVG = async () => {
            const importedIcon = await import(`../../assets/${symbol}`);
            setIcon(importedIcon.default);
        }

        const handleInputs = () => {
            const arr = [];
            for (let i = 0; i < inputs; i++) arr.push(i);
            setInputsArr(arr);
        }

        importSVG();
        handleInputs();
    }, [symbol, inputs]);

    const handleValue = () => {
        name === "INPUT" && setValue(+!value);
    }

    return (
        <Draggable
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
        >
            <div className="handle">
                <StyledRotate src={rotateImg} alt="rotate" onClick={() => setRotate(rotate+90)} />
                {value}     

                <StyledGate rotate={rotate}>
                    <StyledGateInputsWrapper inputs={inputs}>
                        {
                            inputsArr.map((index) => <StyledGateInput key={index}/>)

                        }
                    </StyledGateInputsWrapper>

                    <StyledGateSymbol src={icon} alt={name} onClick={handleValue}/>

                    {
                        name !== "DIODE" && 
                            <StyledGateOutputWrapper>
                                <StyledGateOutput />
                            </StyledGateOutputWrapper>
                    }

                </StyledGate>
            </div>
        </Draggable>
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