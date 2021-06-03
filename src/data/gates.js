export const GATES = [
    {
        name: "NOT",
        operation: (a) => !a,
        symbol: "NOT.svg",
        input: 1,
    },
    {
        name: "OR",
        operation: (a, b) => a | b,
        symbol: "OR.svg",
        input: 2,
    },
    {
        name: "NOR",
        operation: (a, b) => !(a | b),
        symbol: "NOR.svg",
        input: 2,
    },
    {
        name: "AND",
        operation: (a, b) => a & b,
        symbol: "AND.svg",
        input: 2,
    },
    {
        name: "NAND",
        operation: (a, b) => !(a & b),
        symbol: "NAND.svg",
        input: 2,
    },
    {
        name: "XOR",
        operation: (a, b) => a ^ b,
        symbol: "XOR.svg",
        input: 2,
    },
    {
        name: "XNOR",
        operation: (a, b) => !(a ^ b),
        symbol: "XNOR.svg",
        input: 2,
    },
    {
        name: "DIODE",
        operation: (a) => a,
        symbol: "XNOR.svg",
        input: 1,
    },
    {
        name: "INPUT0",
        operation: () => 0,
        symbol: "XNOR.svg",
        input: 0
    },
    {
        name: "INPUT1",
        operation: () => 1,
        symbol: "XNOR.svg",
        input: 0
    },
]