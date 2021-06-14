import React, { useState, useEffect } from 'react';
import Board from '../components/Board';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import {GATES} from '../data/gates';
import TreeNode from "../tree/TreeNode";
import GateReturner from "../data/GateReturner";

const Index = () => {
    const [gates, setGates] = useState([]);

    useEffect(() => {
        let gt = new GateReturner();
        const NOT = GATES[0];
        const OR = GATES[1];
        const NOR = GATES[2];
        const AND = GATES[3];
        const NAND = GATES[4];
        const XOR = GATES[5];
        const XNOR = GATES[6];
        const DIODE = GATES[7];
        const INPUT = GATES[8];

        // const root = new TreeNode(gt.getGate("DIODE"), 1);
        //
        // const or1 = new TreeNode(gt.getGate("OR"), root.depth + 1);
        // root.add(or1);
        //
        // const or2 = new TreeNode(gt.getGate("OR"), or1.depth + 1);
        // const and2 = new TreeNode(gt.getGate("AND"), or1.depth + 1);
        // or1.add(or2, and2);
        //
        // const i31 = new TreeNode(gt.getGate("INPUT"), or2.depth + 1);
        // const i32 = new TreeNode(gt.getGate("INPUT"), or2.depth + 1);
        // or2.add(i31, i32);

        // let circut = root.findChildren().flat(Infinity).sort((item1, item2) => item1.depth - item2.depth);
        // console.table(circut);
        // console.log(root.result());

        // setGates([root]);


    }, [])

    return (
        <Layout>
{/*            <div style={{*/}
{/*    width: 300,*/}
{/*    height: 100,*/}
{/*    backgroundColor: 'red'*/}
{/*}}*/}
{/*    onClick={() => {*/}
{/*        console.log(gates)*/}
{/*    }}/>*/}
            <Menu gates={gates} setGates={setGates} />
            <Board gates={gates} setGates={setGates} />
        </Layout>
    );
}

export default Index;