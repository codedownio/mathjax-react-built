/// <reference types="react" />
import { IIconProps } from "./Types";
export interface Props {
    iconButtonElement: any;
    title: string;
    className: string;
    onButtonClick: (item: any, event: any) => void;
    iconProps: IIconProps;
    button: any;
}
export default function MathIconMenu({ iconButtonElement, title, className, onButtonClick, iconProps, button }: Props): JSX.Element;
