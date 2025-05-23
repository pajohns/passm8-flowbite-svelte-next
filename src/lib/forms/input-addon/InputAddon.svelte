<script lang="ts">
  import { clampSize } from "flowbite-svelte-custom";
  import type { SizeType } from "flowbite-svelte-custom/types";
  import { getContext } from "svelte";
  import { twMerge } from "tailwind-merge";
  import { type InputAddonProps as Props } from ".";

  let { children, class: className, size, isError, ...restProps }: Props = $props();
  let background: boolean = getContext("background");
  let group: { size: SizeType } = getContext("group");
  const errorBgClasses = 'bg-red-500 text-gray-200';

  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500",
    error: 'border-red-500 dark:border-red-600',
  };

  const darkBgClasses = {
    base: "dark:bg-gray-600 dark:text-gray-400",
    tinted: "dark:bg-gray-500 dark:text-gray-300"
  };

  const divider = {
    base: "dark:border-e-gray-700 dark:last:border-e-gray-600",
    tinted: "dark:border-e-gray-600 dark:last:border-e-gray-500"
  };

  const textSizes = { sm: "sm:text-xs", md: "text-sm", lg: "sm:text-base" };
  const prefixPadding = { sm: "px-2", md: "px-3", lg: "px-4" };

  // size: explicit, inherited, default
  let _size = size || clampSize(group?.size) || "md";

  let divClass: string = twMerge(textSizes[_size], prefixPadding[_size], "text-gray-500 bg-gray-200", background ? darkBgClasses.tinted : darkBgClasses.base, background ? divider.tinted : divider.base, background ? borderClasses["tinted"] : borderClasses["base"], "inline-flex items-center border", group && "not-first:-ms-px", "first:rounded-s-lg last:rounded-e-lg", isError ? borderClasses['error'] : '', isError ? errorBgClasses : '', className);
</script>

<div {...restProps} class={divClass}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:class: string;
@props:size: any;
-->
