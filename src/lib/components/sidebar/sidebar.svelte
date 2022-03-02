<script lang="ts">
  import Logo from "$lib/assets/svg/logo.svg";
  import Close from "svelte-material-icons/Close.svelte";
  import Home from "svelte-material-icons/Home.svelte";
  import Todo from "svelte-material-icons/Table.svelte";
  import About from "svelte-material-icons/Information.svelte";
  import { page } from "$app/stores";
  import { ui } from "$lib/store/ui";
  import { clickoutside } from "$lib/hooks/click-outside";
  import type { IRoute } from "./sidebar.spec";

  let routes: IRoute[] = [
    {
      path: "/",
      text: "Home",
      icon: Home,
    },
    {
      path: "/todo",
      text: "Todo",
      icon: Todo,
    },
    {
      path: "/about",
      text: "About",
      icon: About,
    },
  ];

  $: active = (route: string) => $page.url.pathname === route;
  $: active && close();

  function close() {
    $ui.sidebar = false;
  }
</script>

<aside
  use:clickoutside
  on:clickoutside={close}
  class="
    w-[300px]
    h-full
    max-w-[80%]
    flex-shrink-0
    fixed
    top-0
    left-0
    bg-white
    border-r
    border-r-gray-400
    transform
    -translate-x-full
    transition-transform
    duration-300
    z-10
    md:w-auto
    md:static
    md:transform-none
    lg:w-[300px]
  "
  class:transform-none={$ui.sidebar}
>
  <div class="flex justify-end p-2 md:hidden">
    <button on:click={close}>
      <Close size="40px" />
    </button>
  </div>

  <nav class="px-6 py-4 md:px-8 md:py-6">
    <div class="w-24 max-w-full mx-auto mb-6">
      <Logo />
    </div>

    <ul class="flex flex-col gap-1">
      {#each routes as route}
        <li class="h-12 md:h-auto lg:h-12">
          <a
            href={route.path}
            class="
              h-full
              flex
              items-center
              gap-2
              px-4
              rounded-md
              text-md
              transition-colors
            hover:bg-gray-100
              md:justify-center
              md:py-6
              lg:justify-start
              lg:py-0
            "
            class:bg-gray-100={active(route.path)}
            class:text-blue-500={active(route.path)}
          >
            <i class="w-6 h-6 md:w-10 md:h-10 lg:w-6 lg:h-6">
              <svelte:component this={route.icon} size="100%" />
            </i>

            <span class="md:hidden lg:inline">{route.text}</span>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</aside>
