export declare function getTexStart(node: SVGGraphicsElement): number | null;
export declare function getTexEnd(node: SVGGraphicsElement): number | null;
export declare function getTexStartInner(node: SVGGraphicsElement): number | null;
export declare function getTexEndInner(node: SVGGraphicsElement): number | null;
export declare function getTexType(node: SVGGraphicsElement): string;
export declare function getTexEnv(node: SVGGraphicsElement): string;
export declare function isHole(node: SVGGraphicsElement): boolean;
export declare function isCommandInProgress(node: SVGGraphicsElement): boolean;
export declare function commandInProgressContainer(node: SVGGraphicsElement): SVGGraphicsElement | undefined;
export declare function isCommandInProgressDescendant(node: SVGGraphicsElement): boolean;
export declare function reverseDirection(direction: Direction): "left" | "right" | "up" | "down";
export declare const debugMovement = false;
export declare function showNode(node: SVGGraphicsElement): string;
export declare function showDirection(direction: Direction): string;
export declare function parent(node: SVGGraphicsElement): SVGGraphicsElement;
export declare function child(node: SVGGraphicsElement, index: number): SVGGraphicsElement;
export declare function childIndex(node: SVGGraphicsElement, child: any): number | null;
export declare function firstChild(node: SVGGraphicsElement): SVGGraphicsElement;
export declare function lastChild(node: SVGGraphicsElement): SVGGraphicsElement;
/**
 * Return the first value of an array that is a number or string
 */
export declare function or(...args: Array<MoveResultOrNull | undefined>): MoveResultOrNull;
export declare function forChildren<T>(node: SVGGraphicsElement, cb: (child: SVGGraphicsElement) => void | T): T | null;
export declare function forChildrenReverse<T>(node: SVGGraphicsElement, cb: (child: SVGGraphicsElement) => void | T): T | null;
export declare function midpoint(bb: BoundingBox): number;
export declare const isKarma: boolean;
export declare const nullBB: BoundingBox;
export declare function makeId(length: number): string;
export declare function closestCandidate<T extends Node>(candidates: NodeListOf<T>, fn: (arg: T) => number): T;
