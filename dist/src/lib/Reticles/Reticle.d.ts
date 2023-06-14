/// <reference types="react" />
interface Props {
    node: SVGGraphicsElement;
    reticleSettings: ReticleInfo | undefined;
}
export default function Reticle({ node, reticleSettings }: Props): JSX.Element;
export {};
