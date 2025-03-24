<style>
    .color-box {
        --height: 3rem;
        --padding: calc(var(--height) * 0.25);
        height: var(--height);
        aspect-ratio: 1 / 1;
        padding: var(--padding);
        border-radius: calc(var(--height) * 0.35);
        overflow: hidden;

        color: white;
        background-color: black;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .color-box img {
        max-height: calc(var(--height) - 2 * var(--padding));
        max-width: calc(var(--height) - 2 * var(--padding));
    }

</style>

<script>
    import { onMount } from "svelte";
    import { animateTransformTo, createAnimation, createKeyframes, prepareTransformFrom } from "../lib/utils"
    import Animatable from "./Animatable.svelte";
    import AnimatableByClass from "./AnimatableByClass.svelte";

    let props = $props()

    let { size, src, color } = $derived(props)

    let toggleAnimation = $state(null)

</script>

<div class="color-box" style={`background-color: ${color}`} onmouseover={() => toggleAnimation('down')} onmouseout={toggleAnimation('down')}>
    <AnimatableByClass setToggle={toggleFunc => toggleAnimation = toggleFunc}>
        <img src={src}/>
    </AnimatableByClass>
</div>
