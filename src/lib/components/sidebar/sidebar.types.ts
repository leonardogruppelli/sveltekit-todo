import type { Writable } from "svelte/store";
import type { SvelteComponent } from "svelte";

export interface IRoute {
  path: string;
  text: string;
  icon?: new (...args) => SvelteComponent;
}
