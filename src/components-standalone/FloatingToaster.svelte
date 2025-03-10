
<style>

    .floating-toaster {
        position: absolute;

        min-width: 300px;
        max-width: 425px;

        padding: 1.5rem;
        font-size: var(--p-fs);
        background-color: white;

        z-index: 900;
    }

</style>

<script>

    let { style, children } = $props()


</script>



<div class={`floating-toaster shadowed rounded`} style={`${style}`}>
    {@render children?.()}
</div>