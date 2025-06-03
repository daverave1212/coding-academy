<style>

    .inline-icon {
        display: inline-block;
        height: 1em;
        margin-right: 0.5rem;
    }

    .inline-icon img {
        height: 1em;
        margin-top: 0.15em;
    }
</style>

<script>

    let { src } = $props()

</script>

<div class={`inline-icon center-content`}>
    <img src={src}/>
</div>