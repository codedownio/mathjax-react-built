import * as React from "react";
interface Props {
    keyMapProps: KeyMapProps;
    chordState?: ChordState;
    requestSetChordState?: (chordState: ChordState) => void;
}
export default function ChordHandler({ keyMapProps, chordState, requestSetChordState }: Props): any;
export declare function stringifyKeypress(event: React.KeyboardEvent): string;
export declare function tryStartChord(event: React.KeyboardEvent): null | ChordState;
export declare function handleChordEvent(chordState: ChordState, event: React.KeyboardEvent): ChordAction;
export {};
