<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import Todos from "$lib/components/todo/todo.svelte";
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <Todos />
</section>
