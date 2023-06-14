/// <reference types="react" />
import { Subject } from "rxjs";
import { IMenuEvent } from "../menu/MathMenu/Types";
interface Props {
    initialTex: string;
    initialSelection: [number, number];
    menuEventSubject: Subject<IMenuEvent>;
    onRequestClear?: () => void;
}
export declare function App({ initialTex, initialSelection, menuEventSubject, onRequestClear }: Props): JSX.Element;
declare const _default: typeof App;
export default _default;
