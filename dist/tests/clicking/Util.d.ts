interface ITestCallbacks {
    cursorShouldBe: (cursor: number | [number, number]) => void;
}
export declare function testClick(label: string, tex: string, cb: (stuff: ITestCallbacks) => void): void;
export declare function miAtPos(pos: number): SVGElement;
export declare function clickLeftSide(elem: SVGElement): void;
export declare function clickRightSide(elem: SVGElement): void;
export declare function clickTopSide(elem: SVGElement): void;
export declare function clickBottomSide(elem: SVGElement): void;
export declare function clickHalfwayDown(elem: SVGElement, horizontalAmount: number, verticalAmount: number): void;
export {};
