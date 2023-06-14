import * as React from "react";
import { IIconProps, IMathMenuItem } from "../Types";
interface Props {
    button: any;
    onButtonClick: (item: IMathMenuItem, event: React.MouseEvent) => void;
    iconProps: IIconProps;
}
export default function IconButtons({ button, onButtonClick, iconProps }: Props): JSX.Element;
export {};
