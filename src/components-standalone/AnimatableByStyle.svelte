

<style>
    .animatable-by-style {
        overflow: visible;
        transition: transform 0.3s ease-out;
        transform: rotate(0deg);
    }
</style>

<script>
    import { onMount } from "svelte";
    import { animateTransformTo, createAnimation, createKeyframes, generateUniqueId, prepareTransformFrom } from "../lib/utils"

    let props = $props()
    
    let { setToggle } = $derived(props)

    let extraStyle = $state('')

    onMount(() => {
        setToggle(toggleClass)
    })

    function toggleClass(stl) {
        console.log(`Toggleing style`)
        if (extraStyle == '') {
            extraStyle = stl
        } else {
            extraStyle = ''
        }
    }

</script>

<div class={`animatable-by-style`} style={`${extraStyle} ${props.style || ''}`}>
    {@render props.children?.()}
</div>