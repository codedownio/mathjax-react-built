export declare function nodeContainsSvgPoint(node: SVGGraphicsElement, x: any, y: any): boolean;
export declare function screenCoordsToSvgCoords(svg: SVGSVGElement, x: number, y: number): DOMPoint;
export declare function getSVGBBox(elem: SVGGraphicsElement, relativeTo: SVGGraphicsElement): {
    x: number;
    y: number;
    width: number;
    height: number;
};
