/**
 * This file was generated from KeyEventListeningContainer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue } from "mendix";

export type EventTypeEnum = "keyup" | "keydown";

export type ShiftKeyEnum = "ignore" | "yes" | "no";

export type CtrlKeyEnum = "ignore" | "yes" | "no";

export type AltKeyEnum = "ignore" | "yes" | "no";

export type MetaKeyEnum = "ignore" | "yes" | "no";

export interface KeyEventListenersType {
    keyCode: string;
    handler?: ActionValue;
    eventType: EventTypeEnum;
    shiftKey: ShiftKeyEnum;
    ctrlKey: CtrlKeyEnum;
    altKey: AltKeyEnum;
    metaKey: MetaKeyEnum;
}

export interface KeyEventListenersPreviewType {
    keyCode: string;
    handler: {} | null;
    eventType: EventTypeEnum;
    shiftKey: ShiftKeyEnum;
    ctrlKey: CtrlKeyEnum;
    altKey: AltKeyEnum;
    metaKey: MetaKeyEnum;
}

export interface KeyEventListeningContainerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    content?: ReactNode;
    bindToWindow: boolean;
    keyEventListeners: KeyEventListenersType[];
}

export interface KeyEventListeningContainerPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    content: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    bindToWindow: boolean;
    keyEventListeners: KeyEventListenersPreviewType[];
}
