<script lang="ts">
  import Input from "../input/Input.svelte";
  import Button from "../button/Button.svelte";
  import Search from "svelte-material-icons/Magnify.svelte";
  import Plus from "svelte-material-icons/Plus.svelte";
  import Blank from "svelte-material-icons/RadioboxBlank.svelte";
  import Checked from "svelte-material-icons/RadioboxMarked.svelte";
  import Star from "svelte-material-icons/StarOutline.svelte";
  import Starred from "svelte-material-icons/Star.svelte";
  import Delete from "svelte-material-icons/TrashCan.svelte";
  import { nanoid } from "nanoid";
  import { fade, scale } from "svelte/transition";
  import type { ITodo } from "./Todo.types";

  let search: string = "";
  let name: string = "";
  let todos: ITodo[] = [];

  $: sorted = todos
    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (a.done && !a.starred && b.done && b.starred) {
        return 1;
      }

      if (a.done && a.starred && b.done && !b.starred) {
        return -1;
      }

      if (!a.done && b.done) {
        return 1;
      }

      if (a.done && !b.done) {
        return -1;
      }

      if (!a.starred && b.starred) {
        return 1;
      }

      if (a.starred && !b.starred) {
        return -1;
      }

      return a.created.getTime() - b.created.getTime();
    });

  function add(): void {
    todos = [
      ...todos,
      {
        id: nanoid(),
        text: name,
        done: false,
        starred: false,
        created: new Date(),
      },
    ];

    name = "";
  }

  function check(id: string): void {
    const index: number = todos.findIndex((todo) => todo.id === id);

    todos[index].done = !todos[index].done;
  }

  function star(id: string): void {
    const index: number = todos.findIndex((todo) => todo.id === id);

    todos[index].starred = !todos[index].starred;
  }

  function remove(id: string): void {
    todos = todos.filter((todo) => todo.id !== id);
  }
</script>

<div class="w-[800px] max-w-3/4">
  <div class="flex items-center justify-between gap-1 mb-2">
    <h1 class="text-3xl font-bold uppercase">Todolist</h1>

    <div class="flex gap-1">
      <Input
        name="search"
        label="Search"
        placeholder="Search tasks"
        bind:value={search}
      >
        <i slot="icon" class="text-gray-500">
          <Search />
        </i>
      </Input>

      <Input
        name="name"
        label="Name"
        placeholder="Task name"
        bind:value={name}
      />

      <Button onClick={add}>
        <Plus />
      </Button>
    </div>
  </div>

  <ul class="flex flex-col gap-2">
    <li
      class="h-16 flex items-center px-4 bg-white border border-gray-300 shadow-lg rounded-lg font-bold"
    >
      <i class="grow-0 shrink-0 basis-10" />

      <p class="flex-1">Name</p>

      <p class="flex-0 basis-20 text-right">Actions</p>
    </li>

    {#if !sorted.length}
      <li
        class="h-14 flex items-center justify-center px-4 bg-white border border-gray-300 shadow-lg rounded-lg"
        in:fade={{ duration: 300, delay: 500 }}
        out:fade={{ duration: 300 }}
      >
        <p>No result found...</p>
      </li>
    {:else}
      {#each sorted as todo, index (todo.id)}
        <li
          class="h-14 flex items-center px-4 bg-white border border-gray-300 shadow-lg rounded-lg transition-colors duration-300"
          class:bg-gray-200={todo.done}
          class:text-gray-500={todo.done}
          class:hover:border-blue-500={!todo.done}
          in:scale={{ duration: 300, delay: !index ? 500 : 0 }}
          out:fade={{ duration: 300 }}
        >
          <div class="grow-0 shrink-0 basis-10 flex items-center">
            <button
              class="m-0 bg-transparent border-none transition-colors text-xl"
              class:text-gray-500={!todo.done}
              class:text-blue-500={todo.done}
              class:hover:text-blue-500={!todo.done}
              on:click={() => check(todo.id)}
            >
              {#if todo.done}
                <Checked />
              {:else}
                <Blank />
              {/if}
            </button>
          </div>

          <div class="flex-1" class:line-through={todo.done}>
            <Input name={todo.text} raw bind:value={todo.text} />
          </div>

          <div
            class="flex-0 basis-20 flex items-center justify-end gap-1 text-xl"
          >
            <button
              class="m-0 bg-transparent border-none transition-colors"
              class:text-gray-500={!todo.starred}
              class:text-yellow-500={todo.starred}
              class:hover:text-yellow-500={!todo.starred}
              on:click={() => star(todo.id)}
            >
              {#if todo.starred}
                <Starred />
              {:else}
                <Star />
              {/if}
            </button>

            <button
              class="m-0 bg-transparent border-none text-gray-500 transition-colors hover:text-red-500"
              on:click={() => remove(todo.id)}
            >
              <Delete />
            </button>
          </div>
        </li>
      {/each}
    {/if}
  </ul>
</div>
