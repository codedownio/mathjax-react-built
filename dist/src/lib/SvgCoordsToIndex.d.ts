declare type IndexInfo = IIndexNotFound | IIndexValue;
interface IIndexNotFound {
    tag: "not_found";
}
interface IIndexValue {
    tag: "index_value";
    index: number;
}
export declare function svgCoordsToIndex(node: SVGGElement, x: number, y: number): IndexInfo;
export {};
