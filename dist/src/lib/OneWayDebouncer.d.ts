interface Props {
    enabled: boolean;
    children: any;
    delay: number;
    setVisible: (visible: boolean) => void;
}
export default function OneWayDebouncer({ enabled, children, delay, setVisible }: Props): any;
export {};
