<style>
    .tick-list {
        font-size: 1.25rem;
        margin-top: 0.25rem;
    }
    p {
        margin-top: 0.75rem;
    }

    .inline-icon {
        display: inline-block;
        height: 1em;
        margin-right: 0.5rem;
    }

    .inline-icon img {
        height: 1em;
        margin-top: 0.25em;
    }
</style>

<script>
    import Icon from "../components-standalone/Icon.svelte";


    let props = $props()

    if (props == null) {
        throw `Null props given`
    }
    if (props.items == null) {
        throw `Null props.items given`
    }
    if (props.src == null) {
        throw `Null props.src given`
    }

</script>

<div class={`tick-list ${props.class}`} style={`${props.style}`}>
    {#each props.items as item, i (i)}
        <div class="margin-top-half">
            <Icon src={props.src}/>
            {item}
        </div>
    {/each}
</div>