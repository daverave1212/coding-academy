<!--
    How to use:
    - Simply use it as <ScrolledIntoViewWrapper onScrollIntoView=...
    - Put whatever you want inside of it
-->

<script>
    import { onMount } from "svelte";

    let thisElem = $state(null)
    let props = $props()
    let { onScrollIntoView, children } = $derived(props)

    onMount(() => {
        const observer = new IntersectionObserver(entries => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    onScrollIntoView()
                }
            }
        }, { threshold: 0.2 })  // Trigger when 20% of the element is visible
    })

</script>

<div bind:this={thisElem}>
    {@render children?.()}
</div>