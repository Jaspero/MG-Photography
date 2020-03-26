import { writable } from 'svelte/store';

export const categories = writable([]);

export let refresh = writable(false);
export let loading = writable(true);
