import {useEffect, useState} from "react";
import { StyledCable } from "./style";
import {getOffset} from "../../utils/getOffset";

const Cable = ({ gates, node, gateX, gateY }) => {
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [length, setLength] = useState(0);
    const [angle, setAngle] = useState(0);

    useEffect(() => {
        const connect = (thickness = 6.4) => {
                let parentNode;
            for(let gate of gates){
                let potentialNode = gate.findNode(node.parent)
                if(potentialNode) {
                    parentNode = potentialNode
                    break;
                }
            }

            if (parentNode === undefined) return;

            const off1 = getOffset(document.getElementById(`${node.id}-output`));
            const off2 = getOffset(document.getElementById(`${parentNode.id}-input-0`));

            if (off2 === undefined) return;

            // bottom right
            const x1 = off1.left - off1.width;
            const y1 = off1.top + off1.height + 110;
            // top right
            const x2 = off2.left + off2.width - 10;
            const y2 = off2.top + 110;
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
    });

    return (
        <StyledCable left={left} top={top} length={length} angle={angle} />
    )
}

export default Cable;