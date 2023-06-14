/// <reference types="react" />
export interface Props {
    keyMapProps: KeyMapProps;
    commandState: CommandState;
    theme: CommandDropdownTheme;
}
export default function CommandDropdown({ keyMapProps, commandState, theme }: Props): JSX.Element;
