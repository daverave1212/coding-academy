<style>
    .rotating-color-bg {
        --width: 500px;
        --height: 500px;
        --size: calc(max(var(--width), var(--height)) * 2);
        --color: blue;
        position: relative;
        padding: 2px;
        overflow: hidden;
        z-index: 1;
    }
    .content {
        z-index: 2;
    }

    .rotator {
        position: absolute;
        width: calc(var(--size));
        height: calc(var(--size));
        left: calc(var(--size) * -0.5 + var(--width) * 0.5);
        top: calc(var(--size) * -0.5 + var(--height) * 0.5);
        transform-origin: center;
        animation: Rotating 4s infinite;
        animation-timing-function: linear;

        background: conic-gradient(from 90deg, transparent 0%, var(--color) 50%, rgba(72,171,224,0) 50%, var(--color) 99%, var(--color) 100%, rgba(0,166,255,0) 100%);
        /* background-image: conic-gradient(#FFFFFF00, var(--color), #FFFFFF00, var(--color)); */
    }

    @keyframes Rotating {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>

<script>

    let props = $props()

    let { width, height, color, isEnabled=true } = $derived(props)

</script>


<div class={`rotating-color-bg ${props.class}`} style={`--width: ${width}; --height: ${height}; --color: ${color}; ${props.style}`}>
    {#if isEnabled}
        <div class="rotator"></div>
    {/if}
    <div class="content">
        {@render props.children?.()}
    </div>
</div>