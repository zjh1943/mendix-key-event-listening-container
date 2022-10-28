import React, { ReactNode, createElement, useEffect, useRef } from "react";
// import { HelloWorldSample } from "./components/HelloWorldSample";

import {
    KeyEventListeningContainerContainerProps,
    KeyEventListenersType,
    EventTypeEnum
} from "../typings/KeyEventListeningContainerProps";

import "./ui/KeyEventListeningContainer.css";

interface SimpleKeyEvent {
    key: string;
    altKey: boolean;
    shiftKey: boolean;
    ctrlKey: boolean;
}

export const KeyEventListeningContainer = (props: KeyEventListeningContainerContainerProps): ReactNode => {
    const thisRef = useRef<HTMLInputElement>(null);

    const onKeyEvent = (eventType: EventTypeEnum, event: SimpleKeyEvent): void => {
        props.keyEventListeners.forEach((listener: KeyEventListenersType) => {
            let trigger = true;
            if (listener.eventType !== eventType || event.key !== listener.keyCode) {
                trigger = false;
            }

            if (listener.altKey === "yes" && !event.altKey) {
                trigger = false;
            }
            if (listener.altKey === "no" && event.altKey) {
                trigger = false;
            }

            if (listener.ctrlKey === "yes" && !event.ctrlKey) {
                trigger = false;
            }
            if (listener.ctrlKey === "no" && event.ctrlKey) {
                trigger = false;
            }

            if (listener.shiftKey === "yes" && !event.shiftKey) {
                trigger = false;
            }
            if (listener.shiftKey === "no" && event.shiftKey) {
                trigger = false;
            }

            if (trigger) {
                listener.handler?.execute();
            }
        });
    };

    const onDivKeyUp = (e: React.KeyboardEvent<HTMLDivElement>): void => {
        onKeyEvent("keyup", e);
    };
    const onDivKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
        onKeyEvent("keydown", e);
    };

    useEffect((): any => {
        if (props.bindToWindow) {
            const onWindowKeyUp = (e: KeyboardEvent): any => {
                onKeyEvent("keyup", e);
            };
            const onWindowKeyDown = (e: KeyboardEvent): any => {
                onKeyEvent("keydown", e);
            };

            window.addEventListener("keyup", onWindowKeyUp);
            window.addEventListener("keydown", onWindowKeyDown);

            return () => {
                window.removeEventListener("keyup", onWindowKeyUp);
                window.removeEventListener("keydown", onWindowKeyDown);
            };
        }
    });

    const divProps: any = {};
    if (!props.bindToWindow) {
        divProps.onKeyUp = onDivKeyUp;
        divProps.onKeyDown = onDivKeyDown;
    }
    return (
        <div className={props.class} style={props.style} ref={thisRef} {...divProps}>
            {props.content}
        </div>
    );
};
