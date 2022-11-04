import { writable } from "svelte/store";

export const page = writable('home');
export const users = writable([]);
export const currentUser = writable(false);