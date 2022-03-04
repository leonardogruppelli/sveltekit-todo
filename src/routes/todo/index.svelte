<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async () => {
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        resolve();
      }, 3000)
    );

    return {};
  };
</script>

<script lang="ts">
  import Todos from "$lib/components/todo/todo.svelte";
</script>

<svelte:head>
  <title>Todo</title>
</svelte:head>

<section>
  <Todos />
</section>
