import * as React from "react";
import { DisplayElemsContextType } from "./MathMenu/Context";
import { IIconProps, IMenuEvent } from "./MathMenu/Types";
declare type Subject<T> = import("rxjs").Subject<T>;
export interface Props {
    eventSubject: Subject<IMenuEvent>;
    chordState?: ChordState;
    displayElems: DisplayElemsContextType;
    iconProps?: IIconProps;
    isInsideMatrix: boolean;
    extraStyles?: React.CSSProperties;
    chordMessageColor?: string;
}
export default function Math({ chordState, displayElems, iconProps, isInsideMatrix, eventSubject, extraStyles, chordMessageColor }: Props): JSX.Element;
export {};
