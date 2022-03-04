<script lang="ts">
  import { navigating } from "$app/stores";
  import { fly } from "svelte/transition";

  let visible: boolean = false;

  $: if (!!$navigating) {
    setTimeout(() => {
      if (!!$navigating) {
        visible = true;
      }
    }, 100);
  } else {
    visible = false;
  }
</script>

{#if visible}
  <div
    class="w-full h-1 absolute top-0 left-0 bg-blue-500 bg-opacity-20 overflow-hidden"
    transition:fly={{ y: -4, duration: 500 }}
  >
    <div
      class="h-full absolute bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-increase"
    />

    <div
      class="h-full absolute bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-decrease"
    />
  </div>
{/if}
