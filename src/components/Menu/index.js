import React, {useEffect, useRef, useState} from 'react';
import { GATES } from '../../data/gates';
import { StyledMenu, StyledMenuItem } from "./style";
import TreeNode from "../../tree/TreeNode";
import GateReturner from "../../data/GateReturner";

import { w3cwebsocket as W3CWebSocket } from "websocket";

const Menu = ({ gates, setGates }) => {
    const [icons, setIcons] = useState([]);
    const [conneting, setConnecting] = useState(true);
    const ws = useRef(null);
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

    useEffect(() => {
        ws.current = new W3CWebSocket('ws://51.178.80.190:8000');
        ws.current.onopen = () => {
            console.log("ws opened");
            setConnecting(false);
        }
        ws.current.onclose = () => console.log("ws closed");

        return () => {
            ws.current.close();
        };
    }, [])

    const handleClick = (gate) => setGates([...gates, new TreeNode(gt.getGate(gate.name), 1)])

    const handleBroadcast = () => {
        if(conneting) return;
        ws.current.send(JSON.stringify(gates));
        // setTimeout(() => {
        //     ws.current.onmessage = function(e) {
        //         if(typeof e.data !== e.data){
        //             let potentialGates = JSON.parse(e.data);
        //             let array = [];
        //             for(let gate of potentialGates){
        //                 array.push(TreeNode.from(gate))
        //             }
        //             setGates(array);
        //         }
        //     }
        // }, 500)
    }

    useEffect(() => {
        console.log("BEFORE: ", gates);
        ws.current.onmessage = function(e) {
            if(typeof e.data !== e.data){
                let potentialGates = JSON.parse(e.data);
                let array = [];
                for(let gate of potentialGates){
                    array.push(TreeNode.from(gate))
                }
                setGates(array);
                console.log("AFTER: ", gates)
            }
        }
    })

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
                <StyledMenuItem onClick={() => {handleBroadcast()}} >
                    BROADCAST
                </StyledMenuItem>
        </StyledMenu>
    );
}

export default Menu;