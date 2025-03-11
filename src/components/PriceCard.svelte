
<style>
    :root {
        --price-card-w: 375px;
        --price-card-h: 745px;
    }
    .price-card {
        width: var(--price-card-w);
        height: var(--price-card-h);
        position: relative;
        background-color: white;
        border-radius: 2rem;
    }
    .price-card .content {
        padding: 2.25rem;
        padding-top: 1.75rem;
    }
    .price .left {
        font-family: HeroMuli !important;
        font-size: 4rem;
    }

    .currency {
        font-size: 1rem;
        margin-top: -0.75rem;
        color: gray;
        font-family: RoundedNunito !important;
        font-weight: 600;
    }
    .currency-base-price {
        color: gray;
        font-family: RoundedNunito !important;
        font-weight: 600;
    }

    .long-ribbon {
        position: absolute;
        
        width: calc(var(--price-card-w) + 1rem);
        height: 2rem;
        left: -0.5rem;
        top: 10.15rem;

        background-color: rgb(224, 37, 37);
        
        border-radius: 0.5rem;

        transform: rotate(4deg);
    }
    .ribbon-text {
        font-size: 1.5rem;
        line-height: 2rem;
        font-family: RoundedNunito;
        color: white;
    }
    .ribbon-currency {
        font-family: RoundedNunito;
        font-size: 1rem;
        margin-top: 0.5rem;
        margin-left: 0.25rem;
        color: white;
    }

    .feature {
        font-size: 1rem;
        line-height: 1.25rem;
    }
    .feature img {
        height: calc(1.25rem - 1px);
        display: inline-block;
        margin-right: 0.5rem;
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
    import Ribbon from "../components-standalone/Ribbon.svelte";
    import { roundDownToNearestFive } from "../lib/utils";
    import MediumButton from "./MediumButton.svelte";

    let props = $props()
    let {
        ribbonName, ribbonText,
        price, subtext,
        title, subtitle,
        featureTickName, features,
        discountText, discountCheckColor, discounts


    } = $derived(props)


    let checkboxesChecked = $state([false, false, false])
    let currentDiscount = $state(0)
    let currentPrice = $derived(price * (1 - currentDiscount))

    function onCheckboxChange(i) {
        checkboxesChecked[i] = !checkboxesChecked[i]
        checkboxesChecked = checkboxesChecked
        if (checkboxesChecked[i] == true) {
            currentDiscount = (Math.floor((currentDiscount + discounts[i].discount) * 100) / 100)
        } else {
            currentDiscount = (Math.floor((currentDiscount - discounts[i].discount) * 100) / 100)
        }
    }

</script>

<div class="price-card shadowed">
    <Ribbon name={ribbonName} style='top: 1.5rem;'>{ribbonText}</Ribbon>
    <div class="content">
        <div class="price flex-center margin-top-4">
            <div class="flex column">
                {#if currentDiscount != 0}
                    <div class="left text-align-left">{roundDownToNearestFive(currentPrice)}</div>
                    <div class="currency"><span class="currency-base-price strikethrough">{price}</span> ({Math.floor(currentDiscount * 100)}% discount)</div>
                {:else}
                    <div class="left text-align-left">{currentPrice}</div>
                    <div class="currency">{subtext}</div>
                {/if}
            </div>
        </div>
        <!-- <div class="margin-top-half" style="display: block; width: 100%; height: 1px;"></div> -->
        <h4 class="margin-top-1" style={`font-size: 1.25rem; text-align: center`}>{title}</h4>
        <p class="margin-top-1" style="font-size: 1rem;">{subtitle}</p>
        {#each features as feature (feature)}
            <p class="feature margin-top-3q"><img src={`/images/${featureTickName}.png`}/>{feature}</p>
        {/each}
        <p class="feature margin-top-1" style="font-weight: bold;">{discountText}</p>
        {#each discounts as {text, discount}, i (i) }
            <p class="feature margin-top-3q">
                <input bind:checked={checkboxesChecked[i]} onclick={evt => onCheckboxChange(i)} type="checkbox" name={`${ribbonText}-${i}`} style={`accent-color: ${discountCheckColor}`}/>
                <label onclick={() => onCheckboxChange(i)} name={`${ribbonText}-${i}`}>{text}</label>
            </p>
        {/each}
        <div class="center-content margin-top-2">
            <MediumButton color="var(--theme-color-2)" animationColor='var(--theme-color-1)'>Inscrie-te!</MediumButton>
        </div>
    </div>
</div>