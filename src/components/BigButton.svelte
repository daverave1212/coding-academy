<style>
    button {
        font-family: RoundedNunito;
        font-size: 2rem;
        font-weight: 500;
        
        padding: 2rem;
        padding-left: 3rem;
        padding-right: 3rem;
        
        border-radius: 3rem;

        color: white;
        background-color: var(--theme-color-1);
    }
    button:hover {
        cursor: pointer;
        top: 2rem;
    }
</style>

<script>

    let props = $props()
    let { onclick, children } = $derived(props)
    let passedClass = $derived(props.class)

    let extraClasses = $state('')
    let extraStyle = $state('')

    let className = $derived(`shadowed ${passedClass} ${extraClasses}`)
    let style = $derived(`${extraStyle} ${props.style == null? '': props.style}`)

    function onMouseOver() {
        extraStyle = 'background-color: var(--theme-color-2);'
        extraClasses = 'snappy-object'
    }
    function onMouseOut() {
        extraStyle = ''
        extraClasses = ''
    }

</script>

<button {onclick} class={className} onmouseover={onMouseOver} onmouseout={onMouseOut} style={style}>
    {@render children()}
</button>