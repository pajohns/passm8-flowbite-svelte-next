<script lang="ts">
  import { cubicOut } from "svelte/easing";
  import { Tween } from "svelte/motion";
  import { twMerge } from "tailwind-merge";
  import { type ProgressbarProps as Props, progressbar } from ".";

  let { progress = "45", precision = 0, tweenDuration = 400, animate = false, size = "h-2.5", labelInside = false, labelOutside = "", easing = cubicOut, color = "primary", labelInsideClass, oustsideSpanClass, oustsideProgressClass, labeloutsidedivClass, divClass, ...restProps }: Props = $props();

  const _progress = new Tween(0, {
    duration: animate ? tweenDuration : 0,
    easing
  });
  const { base, labelInsideDiv, insideDiv, outsideDiv, oustsideSpan, outsideProgress } = $derived(
    progressbar({
      color,
      labelInside
    })
  );

  $effect(() => {
    _progress.set(Number(progress));
  });
</script>

{#if labelOutside}
  <div {...restProps} class={outsideDiv({ class: labeloutsidedivClass })}>
    <span class={oustsideSpan({ class: oustsideSpanClass })}>{labelOutside}</span>
    <span class={outsideProgress({ class: oustsideProgressClass })}>{progress}%</span>
  </div>
{/if}
<div {...restProps} class={twMerge(base({ class: divClass }), size)}>
  {#if labelInside}
    <div class={twMerge(labelInsideDiv({ class: labelInsideClass }), size)} style="width: {_progress.current}%">
      {_progress.current.toFixed(precision)}%
    </div>
  {:else}
    <div class={twMerge(insideDiv({ class: labelInsideClass }), size)} style="width: {_progress.current}%"></div>
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: progress: any = "45";
@props:precision: any = 0;
@props:tweenDuration: any = 400;
@props:animate: any = false;
@props:size: any = "h-2.5";
@props:labelInside: any = false;
@props:labelOutside: any = "";
@props:easing: any = cubicOut;
@props:color: any = "primary";
@props:labelInsideClass: any;
@props:oustsideSpanClass: any;
@props:oustsideProgressClass: any;
@props:labeloutsidedivClass: any;
@props:divClass: any;
-->
