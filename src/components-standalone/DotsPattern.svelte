
<style>
    .dots-pattern {
        position: absolute;
        display: flex;
        z-index: -999999;
    }
</style>

<script>

    let props = $props()
    let { nRows, nCols, color, top, left, right, bottom } = $derived(props)

    let size = $derived(props.size == null? 8: props.size)
    let gap = $derived(props.gap == null? size * 2: props.gap)

    console.log({nRows, nCols})

</script>

<div class={`dots-pattern flex column ${props.class}`} style={`gap: ${gap}px; top: ${top ?? 'none'}; left: ${left ?? 'none'}; bottom: ${bottom ?? 'none'}; right: ${right ?? 'none'}`}>
    {#each new Array(nRows) as row}
        <div class="flex" style={`gap: ${gap}px`}>
            {#each new Array(nCols) as col}
                <div class="circle" style={`height: ${size}px; width: ${size}px; background-color: ${color};`}></div>
            {/each}
        </div>
    {/each}
</div>