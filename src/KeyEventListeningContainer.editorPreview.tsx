import { Component, ReactNode, createElement } from "react";
// import { HelloWorldSample } from "./components/HelloWorldSample";
import { KeyEventListeningContainerPreviewProps } from "../typings/KeyEventListeningContainerProps";

export class preview extends Component<KeyEventListeningContainerPreviewProps> {
    render(): ReactNode {
        return <div></div>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/KeyEventListeningContainer.css");
}
