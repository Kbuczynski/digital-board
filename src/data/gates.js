export const GATES = [
    {
        name: "NOT",
        operation: (a) => !a,
        symbol: "NOT.svg",
    },
    {
        name: "OR",
        operation: (a, b) => a | b,
        symbol: "OR.svg",
    },
    {
        name: "NOR",
        operation: (a, b) => !(a | b),
        symbol: "NOR.svg",
    },
    {
        name: "AND",
        operation: (a, b) => a & b,
        symbol: "AND.svg",
    },
    {
        name: "NAND",
        operation: (a, b) => !(a & b),
        symbol: "NAND.svg",
    },
    {
        name: "XOR",
        operation: (a, b) => a ^ b,
        symbol: "XOR.svg",
    },
    {
        name: "XNOR",
        operation: (a, b) => !(a ^ b),
        symbol: "XNOR.svg",
    },
]