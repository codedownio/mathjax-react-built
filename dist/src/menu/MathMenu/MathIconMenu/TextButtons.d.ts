import * as React from "react";
import { IMathMenuItem } from "../Types";
interface Props {
    button: any;
    onButtonClick: (item: IMathMenuItem, event: React.MouseEvent) => void;
}
export default function TextButtons({ button, onButtonClick }: Props): JSX.Element;
export {};
