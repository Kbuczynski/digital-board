import {useEffect, useState} from "react";
import { StyledCable } from "./style";

const Cable = ({ output, input }) => {
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [length, setLength] = useState(0);
    const [angle, setAngle] = useState(0);

    const getOffset = (el) => {
        const rect = el.getBoundingClientRect();

        return {
            left: rect.left + window.pageXOffset,
            top: rect.top + window.pageYOffset,
            width: rect.width || el.offsetWidth,
            height: rect.height || el.offsetHeight
        };
    }

    useEffect(() => {
        const connect = (div1, div2, thickness = 6.4) => { // draw a line connecting elements
            const off1 = getOffset(div1);
            const off2 = getOffset(div2);

            // bottom right
            const x1 = off1.left + off1.width;
            const y1 = off1.top + off1.height;
            // top right
            const x2 = off2.left + off2.width;
            const y2 = off2.top;
            // distance
            const length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
            // center
            const cx = ((x1 + x2) / 2) - (length / 2);
            const cy = ((y1 + y2) / 2) - (thickness / 2);
            // angle
            const deg = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);

            setLength(length);
            setLeft(cx);
            setTop(cy);
            setAngle(deg);
        }

        console.log("ds")

        connect(output, input);
    }, [output, input]);



    return (
        <StyledCable left={left} top={top} length={length} angle={angle}/>
    )
}

export default Cable;