import {
    writable
} from 'svelte/store';

export const item = writable({});
export const details = writable(false);
export const carepath = writable(0);