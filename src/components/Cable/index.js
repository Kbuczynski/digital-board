import {useEffect, useState} from "react";
import { StyledCable } from "./style";

const Cable = ({ gates, node, gateX, gateY }) => {
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [length, setLength] = useState(0);
    const [angle, setAngle] = useState(0);

    useEffect(() => {
        const connect = (thickness = 6.4) => { // draw a line connecting elements
            let parentNode;
            for(let gate of gates){
                let potentialNode = gate.findNode(node.parent)
                if(potentialNode) {
                    parentNode = potentialNode
                    break;
                }
            }

            if (parentNode === undefined) return;

            const off1 = node;
            const off2 = parentNode;

            // bottom right
            const x1 = off1.x;
            const y1 = off1.y - 100;
            // top right
            const x2 = off2.x;
            const y2 = off2.y - 100;
            // distance
            const length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
            // center
            const cx = ((x1 + x2) / 2) - (length / 2);
            const cy = ((y1 + y2) / 2) - (thickness / 2) * 40;
            // angle
            const deg = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);

            setLength(length);
            setLeft(cx);
            setTop(cy);
            setAngle(deg);
        }

        connect();
    }, [gateX, gateY]);



    return (
        <StyledCable left={left} top={top} length={length} angle={angle} />
    )
}

export default Cable;