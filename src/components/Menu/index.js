import React, { useEffect, useState } from 'react';
import { GATES } from '../../data/gates';
import { StyledMenu, StyledMenuItem } from "./style";
import TreeNode from "../../tree/TreeNode";

const Menu = ({ gates, setGates }) => {
    const [icons, setIcons] = useState([]);

    useEffect(() => {
        const arr = [];

        GATES.map(async (gate) => {
            const importedIcon = await import(`../../assets/${gate.symbol}`);
            arr.push(importedIcon.default)
        })

        setTimeout(() => setIcons(arr), 1000);
    }, [])

    const handleClick = (gate) => setGates([...gates, new TreeNode(gate, 1)])

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