/// <reference types="react" />
declare type Theme = import("@mui/material").Theme;
import { IMatrixItem } from "./Types";
import { DisplayElemsContextType } from "./Context";
export interface Props {
    resolve: (matrix: IMatrixItem) => void;
    reject: () => void;
}
export default function MatrixModal({ resolve, reject }: Props): JSX.Element;
export declare function renderToPage(theme: Theme, displayElems: DisplayElemsContextType): Promise<unknown>;
export {};
