<style>
    button {
        --color: var(--theme-color-1);
        --animation-color: var(--theme-color-2);
        font-family: RoundedNunito;
        font-size: 1.25rem;
        font-weight: 500;
        
        padding: 1rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        
        border-radius: 1.5rem;

        color: white;
        background-color: var(--theme-color-1);
    }
    button:hover {
        cursor: pointer;
        top: 2rem;
    }
</style>

<script>

    let button = $state()

    let props = $props()
    let { onclick, children, color, animationColor } = $derived(props)
    let passedClass = $derived(props.class)

    let extraClasses = $state('')
    let extraStyle = $state(`background-color: ${color};`)

    let className = $derived(`shadowed ${passedClass} ${extraClasses}`)
    let style = $derived(`${extraStyle} ${props.style == null? '': props.style}`)

    function onMouseOver() {
        extraStyle = `background-color: ${animationColor};`
        extraClasses = 'snappy-object'
    }
    function onMouseOut() {
        extraStyle = `background-color: ${color};`
        extraClasses = ''
    }

</script>

<button bind:this={button} {onclick} class={className} onmouseover={onMouseOver} onmouseout={onMouseOut} style={style}>
    {@render children()}
</button>