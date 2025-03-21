<style>
    .feature {
        font-size: 1rem;
        line-height: 1.25rem;
    }

    input[type='checkbox'] {
        height: calc(1.25rem - 2px);
        transform: scale(1.25);
        margin-right: 0.25rem;
    }
    label {
        font-size: 1rem;
        line-height: 1.25rem;
        font-family: RoundedNunito;
    }
</style>

<script>
    import { onMount } from "svelte";
    import { roundDownToNearestFive } from "../lib/utils";
    import { earlyRegistrationDiscount, getBaseDiscount, getBasePrice, isEarlyRegistrationOpen } from "../stores/DiscountsConstants";

    let discounts = $state([
        { text: 'Aduc un prieten!', discount: 0.1 },
        { text: 'Ma inscriu la ambele cursuri!', discount: 0.1 }
    ])

    let { price, setPriceAndDiscount, color } = $props()

    let checkboxesChecked = $state(discounts.map(_ => false))
    let currentPrice = $state(getBasePrice(price))
    let currentDiscount = $state(getBaseDiscount() * 100)

    onMount(() => {
        setPriceAndDiscount(currentPrice, currentDiscount)
    })


    function onCheckboxChange(i) {
        checkboxesChecked[i] = !checkboxesChecked[i]
        checkboxesChecked = checkboxesChecked
        const baseDiscount = discounts
            .filter((discount, i) => discount.baseDiscount != null && checkboxesChecked[i] == true)
            .reduce((total, b) => total + b.baseDiscount, 0)
        let normalDiscounts = discounts
            .filter((discount, i) => discount.discount != null && checkboxesChecked[i] == true)
            .reduce((total, b) => total + b.discount, 0)
        if (isEarlyRegistrationOpen) {
            normalDiscounts += earlyRegistrationDiscount
        }
        currentPrice = roundDownToNearestFive(Math.floor(price * (1 - baseDiscount) * (1 - normalDiscounts)))
        if (baseDiscount == 0) {
            currentDiscount = Math.floor(normalDiscounts * 100)
        } else {
            currentDiscount = Math.floor((1 - currentPrice / price) * 100)
        }
        setPriceAndDiscount(currentPrice, currentDiscount)
    }

</script>

<div class="feature">
    {#if isEarlyRegistrationOpen}
        <!-- <p class="tag" style="margin-top: 0.25rem; background-color: rgb(29, 160, 0);">Primii 10 au 10% discount!</p> -->
    {/if}
    {#each discounts as {text, discount}, i (i) }
        <p class="feature margin-top-half">
            <input bind:checked={checkboxesChecked[i]} onclick={evt => onCheckboxChange(i)} type="checkbox" name={`check-${i}`} style={`accent-color: ${color}`}/>
            <label onclick={() => onCheckboxChange(i)} name={`label-${i}`}>{text}</label>
        </p>
    {/each}
</div>