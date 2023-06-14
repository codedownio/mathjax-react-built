import * as React from "react";
import { Props as ConverterProps } from "../../web_modules/mathjax-src/js/converter";
declare type IMenuEvent = import("../menu/MathMenu/Types").IMenuEvent;
declare type Subject<T> = import("rxjs").Subject<T>;
export interface Props {
    inline: boolean;
    tex: string;
    cursors: CursorInfo[];
    converterProps: ConverterProps;
    cursorParams?: Partial<CursorParams>;
    reticleSettings?: ReticleInfo;
    chordState?: ChordState;
    requestSetChordState?: (chordState: ChordState) => void;
    commandState?: CommandState;
    commandDropdownTheme?: CommandDropdownTheme;
    commandDropdownDelayMs?: number;
    showXml?: boolean;
    dropdownAttachment?: HTMLElement;
    enableKeyMap?: boolean;
    keyMapProps?: KeyMapProps;
    menuEventSubject?: Subject<IMenuEvent>;
    svgParentRef: React.RefObject<HTMLDivElement>;
}
export default function MathJaxEditable({ inline, tex, cursors, cursorParams, reticleSettings, chordState, requestSetChordState, commandState, commandDropdownTheme, commandDropdownDelayMs, showXml, dropdownAttachment, enableKeyMap, keyMapProps, menuEventSubject, svgParentRef, converterProps }: Props): JSX.Element;
export {};
