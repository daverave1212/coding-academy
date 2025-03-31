
<style>
    .spoiler-collapser {
        --color: gray;
        --size: 1.5rem;
        --padding: 2rem;
        border: solid #D9D9D9 1px;
        border-radius: 0.5rem;
        
    }
    .spoiler-collapser .top {
        position: relative;
        padding: var(--padding);
        padding-bottom: var(--padding);
        transition: padding-bottom 0.5s;
    }
    .spoiler-collapser .top:hover {
        cursor: pointer;
    }
    .spoiler-collapser .top:hover h3 {
        cursor: pointer;
        padding-left: 0.5rem;
        color: var(--color);
    }
    h3 {
        font-size: var(--size);
        line-height: var(--size);

        flex-grow: 1;
        padding-left: 0rem;
        transition: 0.2s;
    }

    :global(.sc-color-box) {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
    }

    .bottom {
        max-height: 0px;
        overflow-y: hidden;
        transition: max-height 0.75s;
    }
    .bottom .content {
        padding: var(--padding);
        padding-top: 0px;
    }
    
    
    /* .spoiler-collapser.expanded .top {
        padding-bottom: calc(0.5 * var(--padding));
    } */
    .spoiler-collapser.expanded .bottom {
        max-height: 20vh;
    }



</style>

<script>
    import AnimatableByClass from "./AnimatableByClass.svelte";
    import AnimatableByStyle from "./AnimatableByStyle.svelte";
    import ColorBox from "./ColorBox.svelte";


    let props = $props()

    let {
        title,
        color='var(--theme-color-1)',
        size="1.5rem",
        arrowSize
    } = $derived(props)
    
    let finalArrowSize = $derived(arrowSize == null? `calc(${size} + var(--padding))`: arrowSize);

    let style = $derived(`--color: ${color}; ${props.style}`)

    let isExpanded = $state(false)
    let toggleArrow = $state(() => {})

    function onTitleClick() {
        isExpanded = !isExpanded
        toggleArrow('transform: rotate(-90deg);')
    }

</script>

<div {style} class={`spoiler-collapser ${props.class} ${isExpanded? 'expanded': ''}`}>
    <div class="top" onclick={onTitleClick}>
        <h3>{title}</h3>
        <ColorBox {color} size={`calc(${size} + 1rem)`} class="sc-color-box">
            <AnimatableByStyle setToggle={func => toggleArrow = func}>
                <img src="/images/arrow-down.png"/>
            </AnimatableByStyle>
        </ColorBox>
    </div>
    <div class={`bottom`}>
        <div class="content">
            <p>
                {@render props.children?.()}
            </p>
        </div>
    </div>
</div>