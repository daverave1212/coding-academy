
<style>
    .with-rotating-border {
        --width: 1000px;
        position: relative;
        overflow: hidden;
        padding: 2px;
    }
    .rotating-border {
        position: absolute;
        background: #FFFFFF;
        background: conic-gradient(from 315deg, #FFFFFF, #01A2FF);
        width: calc(2 * var(--width));
        left: -50%;
        top: -50%;
        aspect-ratio: 1/1;

        animation: Rotating 3s infinite;
        transform-origin: center;
        animation-timing-function: linear;
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

    let { width, height } = $derived(props)

</script>

<div class={`with-rotating-border ${props.class}`} style={`--width: ${width}; --height: ${height}; ${props.style}`}>
    <div class="rotating-border"></div>
    {@render props.children?.()}
</div>