import * as CodeMirror from "codemirror";
import { IMenuEvent } from "../../src/menu/MathMenu/Types";
interface ITestCallbacks {
    texAndCursorShouldBe: (tex: string, cursor: number | [number, number]) => void;
    clearCountShouldBe: (expected: number) => void;
    triggerMenuEvent: (event: IMenuEvent) => void;
}
export declare function testEdit(label: string, tex: string, initialCursor: number, cb: (cm: CodeMirror.Editor, stuff: ITestCallbacks) => void): void;
export declare function triggerKeydown(cm: CodeMirror.Editor, keyCode: any, extra?: {}): void;
export declare function triggerKeydownWithKey(cm: CodeMirror.Editor, key: string, extra?: {}): void;
export declare function triggerKeypress(cm: CodeMirror.Editor, keyCode: any, extra?: {}): void;
export declare function triggerKeyMap(cm: CodeMirror.Editor, k: string): void;
export declare function triggerBackspace(cm: CodeMirror.Editor): void;
export declare function triggerDelete(cm: CodeMirror.Editor): void;
export declare function triggerSpace(cm: CodeMirror.Editor): void;
export declare function triggerKey(cm: CodeMirror.Editor, key: string): void;
export declare function triggerBackslash(cm: CodeMirror.Editor): void;
export declare function triggerTab(cm: CodeMirror.Editor): void;
export declare function triggerShiftTab(cm: CodeMirror.Editor): void;
export declare function triggerEnter(cm: CodeMirror.Editor): void;
export declare function triggerControlEnter(cm: CodeMirror.Editor): void;
export declare function triggerControlShiftEnter(cm: CodeMirror.Editor): void;
export {};
