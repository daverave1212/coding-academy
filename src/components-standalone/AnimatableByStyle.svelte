

<style>
    .animatable-by-style {
        overflow: visible;
        transition: transform 0.3s ease-out;
    }
</style>

<script>
    import { onMount } from "svelte";
    import { animateTransformTo, createAnimation, createKeyframes, generateUniqueId, prepareTransformFrom } from "../lib/utils"

    let props = $props()
    
    let { setToggle } = $derived(props)

    let extraAnimStyle = $state('')

    onMount(() => {
        setToggle(toggleStyle)
    })

    function toggleStyle(stl) {
        if (extraAnimStyle == '') {
            extraAnimStyle = stl
        } else {
            extraAnimStyle = ''
        }
    }

</script>

<div class={`animatable-by-style ${props.class}`} style={`${extraAnimStyle} ${props.style}`}>
    {@render props.children?.()}
</div>