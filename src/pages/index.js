import React, { useState, useEffect } from 'react';
import Board from '../components/Board';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import {GATES} from '../data/gates';
import TreeNode from "../tree/TreeNode";
import GateReturner from "../data/GateReturner";

const Index = () => {
    const [gates, setGates] = useState([]);

    return (
        <Layout>
            <Menu gates={gates} setGates={setGates} />
            <Board gates={gates} setGates={setGates} />
        </Layout>
    );
}

export default Index;