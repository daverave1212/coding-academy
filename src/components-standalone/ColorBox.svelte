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
    :global(.color-box img) {
        max-height: calc(var(--height) - 2 * var(--padding));
        max-width: calc(var(--height) - 2 * var(--padding));
    }

</style>

<script>
    import { onMount } from "svelte";
    import { animateTransformTo, createAnimation, createKeyframes, prepareTransformFrom } from "../lib/utils"
    import Animatable from "./Animatable.svelte";
    import AnimatableByClass from "./AnimatableByClass.svelte";
    import AnimatableByStyle from "./AnimatableByStyle.svelte";

    const styleToToggle = 'transform: rotate(-90deg);'

    let props = $props()

    let { size, src, color } = $derived(props)

    let toggleStyle = $state(() => alert('ok'))

    function toggle() {
        toggleStyle(styleToToggle)
    }

</script>

<div class={`color-box ${props.class}`} style={`background-color: ${color}`}>
    {#if src == null}
        {@render props.children?.()}
    {:else}
        <img src={src}/>
    {/if}
</div>
