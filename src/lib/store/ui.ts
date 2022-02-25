import { writable } from "svelte/store";

export const ui = writable({
  sidebar: false,
});
