import * as React from "react";
interface Props {
    cursorInfo: CursorInfo;
    svgParentRef: React.RefObject<HTMLDivElement>;
    reticleSettings: ReticleInfo;
}
export default function Reticles({ cursorInfo, svgParentRef, reticleSettings }: Props): JSX.Element;
export {};
