<style>

    .price-box {
        --fs: 2rem;
    }

</style>

<script>
    import { roundDownToNearestFive } from "../lib/utils";

    let props = $props()
    let { currentPrice, originalPrice, fontSize } = $derived(props)
    
    let discount = $derived(roundDownToNearestFive(1 - (currentPrice / originalPrice)))

</script>

<div class="price-box">

</div>