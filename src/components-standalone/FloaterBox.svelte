<style>
    .floater-box {
        height: 5.5rem;
        width: 5.5rem;
        padding: 1.25rem;
        border-radius: 2rem;
        overflow: hidden;

        color: white;
        background-color: black;

        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .floater-box img {
        max-height: 3rem;
        max-width: 3rem;
    }
    .floater {
        position: absolute;
    }

</style>

<script>
    import { onMount } from "svelte";
    import { animateTransformTo, createAnimation, createKeyframes, prepareTransformFrom } from "../lib/utils"
    import Animatable from "./Animatable.svelte";

    let animateTo = $state(null)
    let props = $props()
    
    let style = $derived(props.style == null? {}: props.style)

    let { src, delay, rotate, scale, x, y, color } = $derived(props)

    onMount(() => {
        setTimeout(() => {
            animateTo(2000, { rotate, scale: scale, x, y })
        }, delay)
    })

</script>

<div class="floater" style={style}>
    <Animatable setAnimateFunction={func => animateTo = func} from={{ rotate: rotate + 50, scale: 0, x: x + 32, y: y + 32 }}>
        <div class="floater-box shadowed" style={`background-color: ${color};`}>
            <img src={src}/>
        </div>
    </Animatable>
</div>
