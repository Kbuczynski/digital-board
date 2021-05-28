import React, { useState } from 'react';
import Board from '../components/Board';
import Layout from '../components/Layout';
import Menu from '../components/Menu';

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