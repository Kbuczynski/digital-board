import React, { useState, useEffect } from 'react';
import Board from '../components/Board';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import {GATES} from '../data/gates';
import TreeNode from "../tree/TreeNode";

const Index = () => {
    const [gates, setGates] = useState([]);

    useEffect(() => {
        const NOT = GATES[0];
        const OR = GATES[1];
        const NOR = GATES[2];
        const AND = GATES[3];
        const NAND = GATES[4];
        const XOR = GATES[5];
        const XNOR = GATES[6];
        const DIODE = GATES[7];
        const INPUT = GATES[8];

        const root = new TreeNode(DIODE, 1);

        const or1 = new TreeNode(OR, root.depth + 1);
        root.descendants.push(or1);

        const or2 = new TreeNode(OR, or1.depth + 1);
        const and2 = new TreeNode(AND, or1.depth + 1);
        or1.descendants.push(or2, and2);

        const i31 = new TreeNode(INPUT, or2.depth + 1);
        const i32 = new TreeNode(INPUT, or2.depth + 1);
        const i33 = new TreeNode(INPUT, and2.depth + 1);
        const i34 = new TreeNode(INPUT, and2.depth + 1);
        or2.descendants.push(i31, i32);
        and2.descendants.push(i33, i34);

        let circut = root.findChildren().flat(Infinity).sort((item1, item2) => item1.depth - item2.depth);

        console.log(gates)
        console.log(root.result());

        setGates([root]);
    }, [])

    return (
        <Layout>
            <Menu gates={gates} setGates={setGates} />
            <Board gates={gates} setGates={setGates} />
        </Layout>
    );
}

export default Index;