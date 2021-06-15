import React, { useEffect, useState } from 'react';
import { GATES } from '../../data/gates';
import { StyledMenu, StyledMenuItem } from "./style";
import TreeNode from "../../tree/TreeNode";
import GateReturner from "../../data/GateReturner";

const Menu = ({ gates, setGates }) => {
    const [icons, setIcons] = useState([]);
    let gt = new GateReturner();

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

    const handleClick = (gate) => setGates([...gates, new TreeNode(gt.getGate(gate.name), 1)])

    const simulate = () => {
        if(gates.length !== 1){
            alert("No gates or gates are not connected to each other")
            return;
        }
        let tree = gates[0].findChildren().flat(Infinity);
        let containsDiode = false;
        for(const node of tree){
            if(node.gate.name === "DIODE") containsDiode = true;
        }
        if(!containsDiode){
            alert("The system does not have a diode")
            return;
        }
        if(!gates[0].isTreeCompleted()){
            alert("The system is not complete")
            return;
        }

        const result = gates[0].result();
        alert(`Output: ${+result}`);
    }

    return (
        <StyledMenu>
            {
                GATES.map((gate, index) =>
                    <StyledMenuItem key={gate.name} onClick={() => handleClick(gate)} title={gate.name}>
                        <img src={icons[index]} alt={gate.name} />
                    </StyledMenuItem>
                )
            }
                <StyledMenuItem onClick={simulate} >
                    SIMULATE
                </StyledMenuItem>
                <StyledMenuItem onClick={() => {setGates([])}} >
                    CLEAR
                </StyledMenuItem>
        </StyledMenu>
    );
}

export default Menu;