class TreeNode {
    constructor(gate, depth) {
        this.gate = gate;
        this.descendants = [];
        this.parent = null;
        this.depth = depth;
    }

    result() {
        const {input, operation} = this.gate;

        if(this.descendants.length === 0 && input !== 0){
            return -1;
        }

        switch (input){
            case 0:
                return operation();
            case 1:
                return this.descendants[0].result();
            case 2:
                let left = this.descendants[0].result();
                let right = this.descendants[1].result();
                return operation(left, right)
            default: return -1
        }
    }
}

export default TreeNode;