class TreeNode {
    constructor(gate, depth) {
        this.gate = gate;
        this.descendants = [];
        this.parent = null;
        this.depth = depth;
        this.id = Date.now() + Math.floor(Math.random() * 100000);
    }

    add(...nodes){
        for(let node of nodes){
            node.parent = this.id;
            this.descendants.push(node);
        }
    }

    findNode(id){
        let nodes = this.findChildren().flat(Infinity);
        return nodes.find((node) => node.id === +id);
    }

    // deleteNode(id){
    //     let nodes = this.findChildren().flat(Infinity);
    //     return nodes.find((node) => node.id === +id);
    // }

    changeValue(id, value){
        if(this.id === +id){
            this.gate.value = value;
            return;
        }

        this.descendants.forEach((descendant) => {
            descendant.changeValue(id, value);
        })
    }

    result() {
        const {inputs, operation} = this.gate;

        if(this.descendants.length === 0 && inputs !== 0){
            return -1;
        }

        switch (inputs){
            case 0:
                return operation(this.gate.value);
            case 1:
                return this.descendants[0].result();
            case 2:
                let left = this.descendants[0].result();
                let right = this.descendants[1].result();
                return operation(left, right)
            default: return -1
        }
    }

    findChildren(){
        let nodes = [];
        nodes.push(this);

        this.descendants.forEach((descendant) => {
            const curDescendant = descendant.findChildren();
            nodes.push(curDescendant)
        })

        if(nodes.length !== 0){
            return nodes;
        }
    }
}

export default TreeNode;