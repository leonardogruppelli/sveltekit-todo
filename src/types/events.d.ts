declare namespace svelte.JSX {
  interface HTMLProps<T> {
    onclickoutside?: (e: CustomEvent) => void;
  }
}
