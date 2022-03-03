<script lang="ts">
  import { fly } from "svelte/transition";

  const duration: number = 300;

  export let url: string;
</script>

{#key url}
  <div
    in:fly={{ x: -10, duration, delay: duration }}
    out:fly={{ x: 10, duration }}
  >
    <slot />
  </div>
{/key}
