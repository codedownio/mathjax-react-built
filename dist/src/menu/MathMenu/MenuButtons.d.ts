import * as React from "react";
import { IIconProps, IMathMenuItem } from "./Types";
interface Props {
    onButtonClick: (item: IMathMenuItem, event: React.MouseEvent) => void;
    iconProps: IIconProps;
}
declare function MenuButtons({ onButtonClick, iconProps }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof MenuButtons>;
export default _default;
