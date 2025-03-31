<style>
    .color-box {
        --size: 3rem;
        --padding: calc(var(--size) * 0.25);
        height: var(--size);
        aspect-ratio: 1 / 1;
        padding: var(--padding);
        border-radius: calc(var(--size) * 0.35);
        overflow: hidden;

        color: white;
        background-color: black;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    :global(.color-box img) {
        max-height: calc(var(--size) - 2 * var(--padding));
        max-width: calc(var(--size) - 2 * var(--padding));
    }
    :global(.color-box > *) {
        max-height: calc(var(--size) - 2 * var(--padding));
        max-width: calc(var(--size) - 2 * var(--padding));
    }

</style>

<script>
    import { onMount } from "svelte";
    import { animateTransformTo, createAnimation, createKeyframes, prepareTransformFrom } from "../lib/utils"
    import Animatable from "./Animatable.svelte";
    import AnimatableByClass from "./AnimatableByClass.svelte";

    let props = $props()

    let { size, src, color } = $derived(props)

</script>

<div class={`color-box ${props.class}`} style={`background-color: ${color}; ${size == null? '': '--size: ' + size + ';'} ${props.style || ''}`}>
    {#if props.children == null}
        <img src={src}/>
    {:else}
        {@render props.children()}
    {/if}
</div>
