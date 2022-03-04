<script lang="ts">
  import Logo from "$lib/assets/svg/logo.svg";
  import Menu from "svelte-material-icons/Menu.svelte";
  import Chevron from "svelte-material-icons/ChevronDown.svelte";
  import { ui } from "$lib/store/ui";

  function toggle() {
    $ui.sidebar = !$ui.sidebar;
  }
</script>

<header
  class="h-20 flex items-center justify-between px-6 bg-white border-b border-b-gray-400 md:justify-end"
>
  <button class="md:hidden" on:click={toggle}>
    <Menu size="40px" />
  </button>

  <div class="h-3/6 md:hidden">
    <Logo />
  </div>

  <button>
    <Chevron size="40px" />
  </button>
</header>
