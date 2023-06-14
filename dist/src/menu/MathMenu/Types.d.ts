export interface IMathMenuItem {
    name?: string;
    icon?: any;
    tex?: string;
    rawTex?: string;
    pos?: number;
    key?: string;
    children?: IMathMenuItem[];
    type?: "text" | "icon";
    special?: string;
    ctrlKey?: boolean;
    shiftKey?: boolean;
    chord?: string;
    disabled?: string;
    isSeparator?: boolean;
}
export interface IMatrixItem {
    rows: number;
    columns: number;
    command: string;
}
export interface IIconProps {
    color: string;
    highlightColor: string;
}
export declare type IMenuEvent = {
    kind: "item";
    item: IMathMenuItem;
} | {
    kind: "matrix";
    matrix: IMatrixItem;
};
