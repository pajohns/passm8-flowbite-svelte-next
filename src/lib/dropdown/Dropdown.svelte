<script lang="ts">
  import clsx from "clsx";
  import Popper from "flowbite-svelte-custom/utils/Popper.svelte";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { type DropdownProps as Props, dropdown } from "./";
  import DropdownGroup from "./DropdownGroup.svelte";

  let { children, simple = false, placement = "bottom", offset = 2, class: className, backdropClass, activeUrl = "", ...restProps }: Props = $props();

  const { base } = $derived(dropdown());
  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);

  $effect(() => {
    activeUrlStore.set(activeUrl ?? "");
  });
</script>

<!-- Dropdown menu -->

<Popper {...restProps} {placement} {offset} class={base({ class: clsx(className) })}>
  {#if simple}
    <DropdownGroup>
      {@render children()}
    </DropdownGroup>
  {:else}
    {@render children()}
  {/if}
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:simple: any = false;
@props:placement: any = "bottom";
@props:offset: any = 2;
@props:class: string;
@props:backdropClass: any;
@props:activeUrl: any = "";
-->
