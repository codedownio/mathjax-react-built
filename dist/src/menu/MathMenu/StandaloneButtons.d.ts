import * as React from "react";
import { IIconProps, IMathMenuItem } from "./Types";
interface Props {
    onButtonClick: (item: IMathMenuItem, event: React.MouseEvent) => void;
    isInsideMatrix: boolean;
    iconProps: IIconProps;
}
export declare const iconButtonProps: {
    size: string;
    style: {
        margin: string;
    };
};
declare function StandaloneButtons({ onButtonClick, isInsideMatrix, iconProps }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof StandaloneButtons>;
export default _default;
