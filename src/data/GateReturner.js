class NOTGate {
    constructor() {
        this.name = "NOT";
        this.operation = (a) => !a;
        this.symbol = "NOT.svg"
        this.inputs = 1;
        this.x = 0;
        this.y = 0;
    }
}

class ORGate {
    constructor() {
        this.name = "OR";
        this.operation = (a,b) => a | b;
        this.symbol = "OR.svg"
        this.inputs = 2;
        this.x = 0;
        this.y = 0;
    }
}

class NORGate {
    constructor() {
        this.name = "NOR";
        this.operation = (a,b) => !(a | b);
        this.symbol = "NOR.svg"
        this.inputs = 2;
        this.x = 0;
        this.y = 0;
    }
}

class ANDGate {
    constructor() {
        this.name = "AND";
        this.operation = (a,b) => a & b;
        this.symbol = "AND.svg"
        this.inputs = 2;
        this.x = 0;
        this.y = 0;
    }
}

class NANDGate {
    constructor() {
        this.name = "NAND";
        this.operation = (a,b) => !(a & b);
        this.symbol = "NAND.svg"
        this.inputs = 2;
        this.x = 0;
        this.y = 0;
    }
}

class XORGate {
    constructor() {
        this.name = "XOR";
        this.operation = (a,b) => a ^ b;
        this.symbol = "XOR.svg"
        this.inputs = 2;
        this.x = 0;
        this.y = 0;
    }
}

class XNORGate {
    constructor() {
        this.name = "XNOR";
        this.operation = (a,b) => !(a ^ b);
        this.symbol = "XNOR.svg"
        this.inputs = 2;
        this.x = 0;
        this.y = 0;
    }
}

class DIODEGate {
    constructor() {
        this.name = "DIODE";
        this.operation = (a) => 0;
        this.symbol = "DIODE.svg"
        this.inputs = 1;
        this.x = 0;
        this.y = 0;
    }
}

class INPUTGate {
    constructor() {
        this.name = "INPUT";
        this.value = 0
        this.operation = (value) => value;
        this.symbol = "INPUT.svg"
        this.inputs = 0;
        this.x = 0;
        this.y = 0;
    }
}

class GateReturner {
    getGate(type){
        switch (type){
            case "NOT": return new NOTGate();
            case "OR": return new ORGate();
            case "NOR": return new NORGate();
            case "AND": return new ANDGate();
            case "NAND": return new NANDGate();
            case "XOR": return new XORGate();
            case "XNOR": return new XNORGate();
            case "DIODE": return new DIODEGate();
            case "INPUT": return new INPUTGate();
            default: return null;
        }
    }
}

export default GateReturner;