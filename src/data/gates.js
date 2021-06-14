export const GATES = [
    {
        name: "NOT",
        operation: (a) => !a,
        symbol: "NOT.svg",
        inputs: 1,
    },
    {
        name: "OR",
        operation: (a, b) => a | b,
        symbol: "OR.svg",
        inputs: 2,
    },
    {
        name: "NOR",
        operation: (a, b) => !(a | b),
        symbol: "NOR.svg",
        inputs: 2,
    },
    {
        name: "AND",
        operation: (a, b) => a & b,
        symbol: "AND.svg",
        inputs: 2,
    },
    {
        name: "NAND",
        operation: (a, b) => !(a & b),
        symbol: "NAND.svg",
        inputs: 2,
    },
    {
        name: "XOR",
        operation: (a, b) => a ^ b,
        symbol: "XOR.svg",
        inputs: 2,
    },
    {
        name: "XNOR",
        operation: (a, b) => !(a ^ b),
        symbol: "XNOR.svg",
        inputs: 2,
    },
    {
        name: "DIODE",
        operation: (a) => a,
        symbol: "DIODE.svg",
        inputs: 1,
    },
    {
        name: "INPUT",
        value: 0,
        operation: (value) => value,
        symbol: "INPUT.svg",
        inputs: 0,
    }
]