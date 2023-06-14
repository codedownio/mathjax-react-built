/// <reference types="react" />
interface Props {
    svg: SVGSVGElement;
    cursorBB: any;
    cursorInfo: CursorInfo;
    horizontalPaddingPx: number;
    verticalPaddingPx: number;
}
export default function CursorLabel({ svg, cursorBB, cursorInfo, horizontalPaddingPx, verticalPaddingPx }: Props): JSX.Element;
export {};
