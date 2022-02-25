<script lang="ts">
  export let value: string;
  export let name: string;
  export let label: string = "";
  export let placeholder: string = "";
  export let raw: boolean = false;

  function update(event: InputEvent) {
    value = event.currentTarget.value;
  }
</script>

<div
  class="group h-12 flex flex-col justify-center rounded-md transition-all duration-300 overflow-hidden"
  class:px-2={!raw}
  class:py-1={!raw}
  class:bg-white={!raw}
  class:border={!raw}
  class:border-gray-400={!raw}
  class:shadow-md={!raw}
  class:focus-within:ring-1={!raw}
  class:focus-within:ring-blue-500={!raw}
>
  {#if label}
    <label
      for={name}
      class="text-xs select-none transition-colors duration-300 group-focus-within:text-blue-500"
    >
      {label}
    </label>
  {/if}

  <div class="flex items-center gap-1">
    <input
      id={name}
      {name}
      type="text"
      {value}
      placeholder={placeholder || ""}
      class="bg-transparent outline-none text-sm transition-colors duration-300"
      class:focus:text-blue-500={raw}
      on:input={update}
    />

    <slot name="icon" />
  </div>
</div>
