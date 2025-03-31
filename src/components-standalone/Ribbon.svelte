<style>
    .ribbon {
        --font-size: 1.4rem;
        --height: 4rem;
        --base-width: 391;
        --base-height: 125;
        --ar: calc(225px / 391);
        --width: calc((391 / 125) * var(--height));
        position: absolute;
        transform: translateX(-8px) translateY(-32px);
    }
    .ribbon img {
        z-index: var(--z-higher);
    }
    .ribbon h3 {
        width: 100%;
        z-index: var(--z-highest);

        position: absolute;
        font-size: var(--font-size);
        font-family: RoundedNunito;
        font-weight: 600;
        color: white;

        transform: rotate(-30deg);
        top: calc(40px);    /* Pixel perfect */
        left: calc(-16px)    /* Pixel perfect */
    }

</style>

<script>

    let props = $props()

</script>


<div class="ribbon rotated flex column center-text" style={props.style}>
    <img class="shadowed" src={`/images/DoubleRibbon${props.name}30.png`}/>
    <h3>
        {@render props.children?.()}
    </h3>
</div>