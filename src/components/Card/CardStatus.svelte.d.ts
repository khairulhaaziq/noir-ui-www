import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        status?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CardStatusProps = typeof __propDef.props;
export type CardStatusEvents = typeof __propDef.events;
export type CardStatusSlots = typeof __propDef.slots;
export default class CardStatus extends SvelteComponentTyped<CardStatusProps, CardStatusEvents, CardStatusSlots> {
}
export {};
