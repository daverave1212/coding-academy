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
</style>

<script>

    let props = $props()
    let { onclick, children } = $derived(props)
    let passedClass = $derived(props.class)

    let className = $derived(`shadowed ${passedClass}`)

</script>

<button {onclick} class={className}>
    {@render children()}
</button>