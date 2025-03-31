

<style>
    .animatable-by-class {
        overflow: visible;
        transition: transform 0.3s ease-out;
        transform: rotate(0deg);
    }
    .rotated-down {
        transform: rotate(90deg);
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
        console.log(`Toggleing class`)
        if (extraAnimClass == '') {
            extraAnimClass = cls
        } else {
            extraAnimClass = ''
        }
    }

</script>

<div class={`animatable-by-class ${extraAnimClass}`}>
    {@render props.children?.()}
</div>