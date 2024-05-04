<script>
    // @ts-nocheck
    import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
    import { useMotionValue } from "svelte-motion";

    export let duration;
    export let targetValue;
    export let divClass;

    const rotate = useMotionValue(0);
    $: (counterText = Math.round($rotate)||0);
</script>

<Motion let:motion animate={{rotate: targetValue}} style={{rotate}} transition={{duration: duration}}>
    <div use:motion class="absolute hidden"></div>
</Motion>

<div class={divClass}>
    {counterText}
</div>