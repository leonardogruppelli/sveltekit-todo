export function clickoutside(element: HTMLElement) {
  function click(event: ClickEvent) {
    if (element && !element.contains(event.target) && !event.defaultPrevented) {
      element.dispatchEvent(
        new CustomEvent(
          "clickoutside",
          element as CustomEventInit<typeof element>
        )
      );
    }
  }

  document.addEventListener("click", click, true);

  return {
    destroy() {
      document.removeEventListener("click", click, true);
    },
  };
}
