import GateReturner from "../data/GateReturner";

class TreeNode {
    constructor(gate, depth) {
        this.gate = gate;
        this.descendants = [];
        this.parent = null;
        this.depth = depth;
        this.x = 0;
        this.y = 0;
        this.id = Date.now() + Math.floor(Math.random() * 100000);
        this.complete = this.descendants.length == this.gate.inputs ? true : false;
    }

    static from(json){
        let gate = new GateReturner().getGate(json.gate.name);
        if(json.gate.name === "INPUT"){
            gate.value = json.gate.value;
            gate.x = json.gate.x;
            gate.y = json.gate.y;
        }
        let node = new TreeNode(gate,json.depth);
        node.id = json.id;
        node.parent = json.parent;
        node.depth = json.depth;
        node.x = json.x;
        node.y = json.y;
        let desc = [];
        for(const dd of json.descendants){
            console.log("DD: ", dd);
            desc.push(TreeNode.from(dd));
        }
        node.descendants = desc;
        // node.descendants = json.descendants.forEach((descendant) => new TreeNode(descendant))
        node.complete = json.complete;

        return node
    }

    isTreeCompleted(){
        let completed = true;
        let nodes = this.findChildren().flat(Infinity);
        for(const node of nodes){
            if(!node.complete){
                completed = false;
            }
        }
        return completed;
    }

    add(...nodes){
        let code = -1;
        if(nodes.length <= this.gate.inputs && this.descendants.length < this.gate.inputs)
        for(let node of nodes){
            node.parent = this.id;
            this.descendants.push(node);
            code = 0;
        }
        if(this.descendants.length == this.gate.inputs){
            this.complete = true;
        }

        return code;
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
        const node = this.findNode(id);
        node.gate.value = value;
    }

    updatePosition(node, x, y) {
        node.x = x;
        node.y = y;
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