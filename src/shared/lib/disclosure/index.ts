import { createEvent, createStore, EventCallable, StoreWritable } from "effector"
import { useUnit } from "effector-react"

export interface Disclosure {
    $state: StoreWritable<boolean>
    open: EventCallable<void>
    close: EventCallable<void>
    toggle: EventCallable<void>
}

export interface UseDisclosure {
    state: boolean
    open(): void
    close(): void
    toggle(): void
}

export const createDisclosure = (defaultState = false): Disclosure => {
    const $state = createStore<boolean>(defaultState)

    const open = createEvent()
    const close = createEvent()
    const toggle = createEvent()

    $state.on(open, () => true).on(close, () => false).on(toggle, (state) => !state)

    return {
        $state,
        open,
        close,
        toggle
    }
}

export const useDisclosure = ($disclosure: Disclosure): UseDisclosure => useUnit({
    state: $disclosure.$state,
    open: $disclosure.open,
    close: $disclosure.close,
    toggle: $disclosure.toggle
})