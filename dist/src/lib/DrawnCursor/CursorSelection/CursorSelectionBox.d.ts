/// <reference types="react" />
interface Props {
    svg: SVGSVGElement;
    cursorInfo: CursorInfo;
    boundingBox: BoundingBox;
}
export default function CursorSelectionBox({ svg, cursorInfo, boundingBox }: Props): JSX.Element;
export {};
