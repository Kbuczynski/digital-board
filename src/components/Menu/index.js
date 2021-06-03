import React, { useEffect, useState } from 'react';
import { GATES } from '../../data/gates';
import { StyledMenu, StyledMenuItem } from "./style";

const Menu = ({ gates, setGates }) => {
    const [icons, setIcons] = useState([]);

    useEffect(() => {

        const handleSVG = () => {
            const arr = [];

            GATES.map(async (gate) => {
                const importedIcon = await import(`../../assets/${gate.symbol}`);
                arr.push(importedIcon.default)
                setIcons([...arr, importedIcon.default]);
            })
        }

        handleSVG();
    }, [])

    const handleClick = (gate) => setGates([...gates, gate])

    return (
        <StyledMenu>
            {
                GATES.map((gate, index) => 
                    <StyledMenuItem key={gate.name} onClick={() => handleClick(gate)} >
                        <img src={icons[index]} alt={gate.name} />
                    </StyledMenuItem>
                )
            }
        </StyledMenu>
    );
}

export default Menu;