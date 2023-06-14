import * as React from "react";
interface Props {
    tex: string;
    inline: boolean;
    svgText: string;
    elemProps: Partial<React.HTMLAttributes<HTMLDivElement>>;
    didRender: () => void;
    svgParentRef: React.RefObject<HTMLDivElement>;
    svgIsUpdatingRef: React.MutableRefObject<boolean>;
}
/**
   The purpose of this component is to only re-render the SVG when the underlying TeX changes.
   This usually ensures that the SVG is actually present in the DOM when the cursor drawing
   components access the svgParentRef.
   This might not work if you try to render a MathEditable with an active cursor at the beginning.
*/
export default class SVGRenderer extends React.Component<Props> {
    shouldComponentUpdate({ tex, inline, svgText, elemProps, didRender, svgParentRef, svgIsUpdatingRef }: Props): boolean;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
export {};
