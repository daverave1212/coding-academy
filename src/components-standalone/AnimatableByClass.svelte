

<style>
    .animatable-by-class {
        overflow: visible;
        transition: transform 0.3s ease-out;
    }
</style>

<script>
    import { onMount } from "svelte";
    import { animateTransformTo, createAnimation, createKeyframes, generateUniqueId, prepareTransformFrom } from "../lib/utils"

    let props = $props()
    
    let { setToggle } = $derived(props)

    let extraAnimClass = $state('')

    onMount(() => {
        setToggle(toggleClass)
    })

    function toggleClass(cls) {
        if (extraAnimClass == '') {
            extraAnimClass = cls
        } else {
            extraAnimClass = ''
        }
    }

</script>

<div class={`animatable-by-class ${extraAnimClass}`}>
    {@render children()}
</div>