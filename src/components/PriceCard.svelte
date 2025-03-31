
<style>
    :root {
        --default-price-card-w: 375px;
        --default-price-card-h: 665px;
    }
    .price-card {
        width: var(--default-price-card-w);
        height: var(--default-price-card-h);
        position: relative;
        background-color: white;
        border-radius: 2rem;
    }
    .price-card .content {
        padding: 2.25rem;
        padding-top: 1.75rem;
    }
    :global(.feature) {
        /* font-size: 1rem; */
        font-size: inherit;
        line-height: 1.25rem;
    }
    :global(.feature img) {
        height: calc(1.25rem - 1px);
        display: inline-block;
        margin-right: 0.5rem;
    }

</style>

<script>
    import AnimatableSnappy from "../components-standalone/AnimatableSnappy.svelte";
    import Ribbon from "../components-standalone/Ribbon.svelte";
    import RotatingColorBackground from "../components-standalone/RotatingColorBackground.svelte";
    import { roundDownToNearestFive } from "../lib/utils";
    import { getBaseDiscount } from "../stores/DiscountsConstants";
    import DiscountCheckboxes from "./DiscountCheckboxes.svelte";
    import FeaturesList from "./FeaturesList.svelte";
    import MediumButton from "./MediumButton.svelte";
    import PriceBox from "./PriceBox.svelte";

    

    let props = $props()
    let {
        width='375px', height='665px',

        name,
        ribbonName, ribbonText,
        price, currency, subtext,
        title, subtitle,
        featureTickName, features,

        color, anticolor,

        discountText, discounts,
        buttonColor, buttonAnimationColor, buttonText,

        isAnimated=false
    } = $derived(props)

    let currentPrice = $state(price)
    let currentDiscount = $state(getBaseDiscount())
    let triggerDiscountAnimation = $state(() => {})

    let priceBoxProps = $derived({
        alignment: 'bottom',
        placeholder: '/ Curs',
        
        currentPrice: roundDownToNearestFive(currentPrice),
        fontFamily: 'HeroMuli',
        fontSize: '3.25rem',

        originalPrice: price,
        originalFontFamily: 'RoundedNunito',
        originalFontSize: 'calc(1rem + 2px)'
    })

</script>
<RotatingColorBackground isEnabled={isAnimated} width={width} height={`${height}`} color={color} class="shadowed-half" style="border-radius: 2rem; background-color: white; --height">
    <div class="price-card shadowed" style={`height: ${height}; width: ${width}`}>

        {#if price != null}
            <Ribbon name={ribbonName} style='top: 1.5rem;'>{ribbonText}</Ribbon>
        {/if}

        <div class="content">
            {#if price != null}
                <div class="price flex-center margin-top-2">
                    <div class="flex column">
                        <PriceBox {...priceBoxProps}/>
                    </div>
                </div>
            {/if}
            {#if currentDiscount != 0}
                <AnimatableSnappy
                    style={`
                        --rotate: 15deg;
                        position: absolute;
                        right: 2.5rem;
                        top: 2.75rem;
                        transform: rotate(var(--rotate));
                    `}
                    class="discount-tag" setTriggerAnimation={func => triggerDiscountAnimation = func}>
                    <p class="tag green shadowed" style="margin-top: 0.25rem; background-color: rgb(29, 160, 0);">
                        {currentDiscount}% discount
                    </p>
                </AnimatableSnappy>
            {/if}
            
            
            <h4 class="margin-top-1" style={`font-size: 1.25rem; text-align: center`}>
                {#if name != null}
                    {name}
                {:else}
                    {@render props.children?.()}
                {/if}
            </h4>


            <p class="margin-top-1" style="font-size: 1rem;">{subtitle}</p>


            <FeaturesList features={features} featureTickName={featureTickName}/>

            {#if price != null}
                <p class="feature margin-top-1" style="font-weight: bold;">{discountText}</p>
                <DiscountCheckboxes color={color} price={price} setPriceAndDiscount={(newPrice, newDiscount) => {
                    currentPrice = newPrice
                    currentDiscount = newDiscount
                    triggerDiscountAnimation()
                }}/>
            {/if}

            <div class="center-content margin-top-2">
                <MediumButton color={color} animationColor={anticolor}>{buttonText}</MediumButton>
            </div>
        </div>
    </div>
</RotatingColorBackground>