export default function handleBackslash(props: KeyMapProps): void;
export declare function handleCommandKeystroke(props: KeyMapProps, location: CursorLocation, charCode: number): void;
export declare function handleCommandBackspace(props: KeyMapProps, location: CursorLocation): void;
export declare function completeCommand(props: KeyMapProps, location: CursorLocation, useSuggested: boolean): void;
export declare function handleCommandReplacingRange(props: KeyMapProps, command: string, [begin, end]: [number, number], environmentContents?: string): void;
export declare function getPrefixRangeFromCommandNode(location: CursorLocation, commandNode: SVGGraphicsElement): [number, number];
