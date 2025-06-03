<script>

    let { children, color } = $props()

    let finalColor = $derived(color == null? 'rgb(100, 0, 250)': color == 'js' || color == 'yellow'? 'var(--theme-color-2-darker)': color)

</script>

<strong style="color: {finalColor}">
    {@render children()}
</strong>