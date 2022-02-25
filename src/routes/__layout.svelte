<script lang="ts">
  import Sidebar from "$lib/components/sidebar/sidebar.svelte";
  import Header from "$lib/components/header/header.svelte";
  import "../app.css";
</script>

<div class="w-full h-screen flex">
  <Sidebar />

  <div class="flex-1 flex flex-col">
    <Header />

    <main class="flex-1 block p-6 overflow-auto">
      <slot />
    </main>
  </div>
</div>
