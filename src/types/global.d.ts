declare interface InputEvent extends Event {
  currentTarget: EventTarget & HTMLInputElement;
}

declare interface ClickEvent extends Event {
  target: EventTarget & HTMLInputElement;
}
