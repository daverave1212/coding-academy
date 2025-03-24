
<style>

    h3:hover {
        cursor: pointer;
    }

</style>

<script>
    import ColorBox from "./ColorBox.svelte";


    let props = $props()

    let {
        title
    } = $derived(props)


    function onTitleClick() {

    }

</script>

<div style={props.style} class={`spoiler-collapser rounded shadowed-half ${props.class} padding-1`}>
    <h3 onclick={onTitleClick}>{title}</h3>
    <ColorBox src="/images/arrow-down.png" color="var(--theme-color-1)"/>
</div>