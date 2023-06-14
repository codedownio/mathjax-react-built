import * as React from "react";
interface Props {
    suggestion: string;
    index: number;
    commandState: CommandState;
    setCommandState: (commandState: CommandState) => void;
    theme: CommandDropdownTheme;
    leftOffsetPx: number;
}
declare const Suggestion: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default Suggestion;
