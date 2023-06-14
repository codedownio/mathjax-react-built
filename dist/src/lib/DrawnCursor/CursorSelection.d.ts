/// <reference types="react" />
interface Props {
    svg: SVGSVGElement;
    anchor: number;
    head: number;
    cursorInfo: CursorInfo;
}
export default function CursorSelection({ svg, anchor, head, cursorInfo }: Props): JSX.Element;
export declare function commonAncestor(n1: SVGGraphicsElement, n2: SVGGraphicsElement): SVGGraphicsElement;
export {};
