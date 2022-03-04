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
  import Loader from "$lib/components/loader/loader.svelte";
  import "../app.css";

  export let url: string;
</script>

<div class="w-full h-screen flex">
  <Sidebar />

  <div class="flex-1 flex flex-col">
    <Header />

    <main class="flex-1 block px-6 pt-7 pb-6 relative overflow-auto">
      <Loader />

      <Transition {url}>
        <slot />
      </Transition>
    </main>
  </div>
</div>
