<script lang="ts">
  import clsx from "clsx";
  import { getContext } from "svelte";
  import { type DropdownItemProps as Props, dropdownItem } from ".";

  let { aClass, children, href, activeClass, liClass, class: className, ...restProps }: Props = $props();

  const activeUrlStore = getContext("activeUrl") as { subscribe: (callback: (value: string) => void) => void };
  let sidebarUrl = $state("");
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });

  let active = $state(false);
  $effect(() => {
    active = sidebarUrl ? href === sidebarUrl : false;
  });

  const { anchor, activeAnchor } = dropdownItem();
  let finalClass = $derived([active ? activeAnchor({ class: clsx(activeClass, className) }) : anchor({ class: clsx(aClass, className) })]);
</script>

<li class={liClass}>
  {#if href}
    <a {href} {...restProps} class={finalClass}>
      {@render children()}
    </a>
  {:else}
    <div class={finalClass}>
      {@render children()}
    </div>
  {/if}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: aClass: any;
@props:children: any;
@props:href: any;
@props:activeClass: any;
@props:liClass: any;
@props:class: string;
-->
