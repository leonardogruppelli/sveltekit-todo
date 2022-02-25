<script lang="ts">
  export let onClick: () => void;
</script>

<button
  class="w-12 h-12 flex items-center justify-center bg-blue-500 shadow-md rounded-md text-3xl text-white"
  on:click={onClick}
>
  <slot />
</button>
