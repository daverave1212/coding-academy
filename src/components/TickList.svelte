<style>
    .tick-list {
        font-size: 1.25rem;
        margin-top: 0.25rem;
    }
    p {
        margin-top: 0.75rem;
    }
</style>

<script>
    import Icon from "../components-standalone/Icon.svelte";


    let props = $props()

</script>

<div class={`tick-list ${props.class}`} style={`${props.style}`}>
    {#each props.items as item, i (i)}
        <p><Icon src={props.src}/>{item}</p>
    {/each}
</div>