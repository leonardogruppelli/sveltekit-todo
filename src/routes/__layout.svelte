<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ url }) => ({
    props: {
      url,
    },
  });
</script>

<script lang="ts">
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
  import Header from "$lib/components/header/header.svelte";
  import Transition from "$lib/components/transition/transition.svelte";
  import "../app.css";

  export let url: string;
</script>

<div class="w-full h-screen flex">
  <Sidebar />

  <div class="flex-1 flex flex-col">
    <Header />

    <main class="flex-1 block p-6 overflow-auto">
      <Transition {url}>
        <slot />
      </Transition>
    </main>
  </div>
</div>
