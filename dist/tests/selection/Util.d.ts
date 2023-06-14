declare type Dir = "left" | "right" | "up" | "down";
declare type MoveFn = (anchorAndHead: [number, number], direction: Dir, expected: [number, number]) => void;
export declare function testMovement(tex: string, cb: (fn: MoveFn) => void): void;
export declare function ltrChain(anchor: number, headPositions: number[], move: any): void;
export declare function rtlChain(anchor: number, headPositions: number[], move: any): void;
export {};
