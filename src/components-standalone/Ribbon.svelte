<style>

    .ribbon {
        --height: 4rem;
        --base-width: 391;
        --base-height: 125;
        --width: calc((225 / 391) * var(--height));
        /* width: calc(var(--width) * 1px); */
        aspect-ratio: 125 / 391;
        position: absolute;
        height: var(--height);
        transform: translateX(-14px);
        
    }
    .ribbon img {
        height: 100%;
    }
    .ribbon h3 {
        position: absolute;
        width: 100%;
        font-size: calc(var(--height) * 0.35);
        font-family: RoundedNunito;
        font-weight: 400;
        color: white;

        line-height: calc(var(--height));
        top: calc(var(--height) * (-0.168 / 2));    /* Pixel perfect */
    }

</style>

<script>

    let props = $props()

</script>

<div class="ribbon flex column center-text" style={props.style}>
    <h3>
        {@render props.children?.()}
    </h3>
    <img src={`/images/${props.name}.png`}/>
</div>