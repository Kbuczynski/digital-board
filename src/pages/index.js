import React, { useState } from 'react';
import Board from '../components/Board';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import {GATES} from '../data/gates';
import TreeNode from "../tree/TreeNode";

const Index = () => {
    const [gates, setGates] = useState([]);

    // const NOT = GATES[0];
    // const OR = GATES[1];
    // const NOR = GATES[2];
    // const AND = GATES[3];
    // const NAND = GATES[4];
    // const XOR = GATES[5];
    // const XNOR = GATES[6];
    // const DIODE = GATES[7];
    // const INPUT0 = GATES[8];
    // const INPUT1 = GATES[9];
    //
    // const root = new TreeNode(DIODE, 1);
    //
    // const or1 = new TreeNode(OR, root.depth + 1);
    // root.descendants.push(or1);
    //
    // const or2 = new TreeNode(OR, or1.depth + 1);
    // const and2 = new TreeNode(AND, or1.depth + 1);
    // or1.descendants.push(or2, and2);
    //
    // const i1 = new TreeNode(INPUT1, or2.depth + 1);
    // const i2 = new TreeNode(INPUT0, or2.depth + 1);
    // or2.descendants.push(i1, i2);
    // and2.descendants.push(i2, i2);
    //
    // console.log(root)
    // console.log(root.result());

    return (
        <Layout>
            <Menu gates={gates} setGates={setGates} />
            <Board gates={gates} setGates={setGates} />
        </Layout>
    );
}

export default Index;