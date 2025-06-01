<style>
    .floating-circle {
        z-index: var(--z-lower);
    }
</style>

<script>

    let props = $props()

</script>

<div class={`floating-circle circle floating-object absolute ${props.class}`} style={props.style}>

</div>