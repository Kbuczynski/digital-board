import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

import { StyledGate, StyledGateInput, StyledGateInputsWrapper, StyledGateOutput, StyledGateOutputWrapper, StyledGateSymbol } from './style';

const Gate = ({ gate: { name, operation, symbol, inputs = 1 } }) => {
    const [icon, setIcon] = useState('');

    useEffect(() => {
        const importSVG = async () => {
            const importedIcon = await import(`../../assets/${symbol}`);
            setIcon(importedIcon.default);
        }

        importSVG();
    }, [symbol]);

    return (
        <Draggable
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            // grid={[25, 25]}
        >
            <StyledGate className="handle">
                <StyledGateInputsWrapper>
                    <StyledGateInput />
                    <StyledGateInput />
                </StyledGateInputsWrapper>

                <StyledGateSymbol src={icon} alt={name} />

                <StyledGateOutputWrapper>
                    <StyledGateOutput />
                </StyledGateOutputWrapper>
            </StyledGate>
        </Draggable>
    );
}

Gate.propTypes = {
    gate: PropTypes.shape({
        name: PropTypes.string.isRequired,
        operation: PropTypes.func.isRequired,
        symbol: PropTypes.string.isRequired,
        inputs: PropTypes.number,
    }),
}

export default Gate;