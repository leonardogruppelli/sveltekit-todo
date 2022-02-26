import { writable, type Writable } from "svelte/store";
import { browser } from "$app/env";
import type { ITodo } from "$lib/components/todo/todo.types";

export let todos: Writable<ITodo[]> = writable<ITodo[]>(
  browser
    ? localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
    : []
);

todos.subscribe(
  (value) => browser && localStorage.setItem("todos", JSON.stringify(value))
);
