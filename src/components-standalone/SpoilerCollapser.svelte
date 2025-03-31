
<style>

    .spoiler-collapser {
        width: 100%;
        padding: 2rem;
        overflow: hidden;
    }
    h3 {
        font-size: 1.5rem;
    }
    .spoiler-collapser .upper {
        position: relative;
        cursor: pointer;
    }

    .spoiler-collapser .lower {
        box-sizing: content-box;
        padding-top: 0rem;
        max-height: 0px;
        overflow: hidden;

        transition: max-height 0.5s, padding-top 0.5s;
        animation-timing-function: ease-in-out;
    }
    .spoiler-collapser.expanded .lower {
        max-height: 150px;
        padding-top: 1rem;
    }

    :global(.spoiler-color-box) {
        right: -0.5rem;
        top: -0.5rem;
    }

    img {
        transition: transform 0.5s;
        animation-timing-function: linear;
    }


</style>

<script>
    import ColorBox from "./ColorBox.svelte";


    let props = $props()

    let {
        title
    } = $derived(props)

    let isExpanded = $state(false)

    function onTitleClick() {
        isExpanded = !isExpanded
    }

</script>

<div style={props.style} class={`spoiler-collapser rounded shadowed-half ${props.class} padding-1 ${isExpanded? 'expanded': ''}`}>
    <div class="upper" onclick={onTitleClick}>
        <h3>{title}</h3>
        <ColorBox color="var(--theme-color-1)" class="absolute spoiler-color-box">
            <img src="/images/arrow-down.png" style={`${isExpanded? 'transform: rotate(-90deg)': ''}`}/>
        </ColorBox>
    </div>
    <div class="lower">
        <p>
            {@render props.children?.()}
        </p>
    </div>
</div>