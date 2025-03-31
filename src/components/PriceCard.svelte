
<style>
    :root {
        --price-card-w: 375px;
        --price-card-h: 665px;
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

    .feature {
        font-size: 1rem;
        line-height: 1.25rem;
    }
    .feature img {
        height: calc(1.25rem - 1px);
        display: inline-block;
        margin-right: 0.5rem;
    }

</style>

<script>
    import AnimatableSnappy from "../components-standalone/AnimatableSnappy.svelte";
    import Ribbon from "../components-standalone/Ribbon.svelte";
    import RotatingBorder from "../components-standalone/RotatingBorder.svelte";
    import { roundDownToNearestFive } from "../lib/utils";
    import { getBaseDiscount } from "../stores/DiscountsConstants";
    import DiscountCheckboxes from "./DiscountCheckboxes.svelte";
    import MediumButton from "./MediumButton.svelte";
    import PriceBox from "./PriceBox.svelte";

    

    let props = $props()
    let {
        height='665px',
        ribbonName, ribbonText,
        price, currency, subtext,
        title, subtitle,
        featureTickName, features,
        discountText, discountCheckColor, discounts,
        buttonColor, buttonAnimationColor, buttonText
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

<RotatingBorder style="border-radius: 2rem;">
    <div class="price-card shadowed" style={`height: ${height};`}>
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
            
            {#if price != null}
                <div class="flex-content center-content">
                    <h4 class="margin-top-1" style={`font-size: 1.25rem; text-align: center;`}>
                        {@render props.children?.()}
                    </h4>
                </div>
            {:else}
                <div class="flex-content center-content">
                    <h4 class="margin-top-1" style={`font-size: 1.5rem; text-align: center;`}>
                        {@render props.children?.()}
                    </h4>
                </div>
            {/if}
            
    
    
            <p class="margin-top-1" style="font-size: 1rem;">{subtitle}</p>
            {#each features as feature (feature)}
                <p class="feature margin-top-3q"><img src={`/images/${featureTickName}.png`}/>{feature}</p>
            {/each}
            {#if price != null}
                <p class="feature margin-top-1" style="font-weight: bold;">{discountText}</p>
                <DiscountCheckboxes color={discountCheckColor} price={price} setPriceAndDiscount={(newPrice, newDiscount) => {
                    currentPrice = newPrice
                    currentDiscount = newDiscount
                    triggerDiscountAnimation()
                }}/>
            {/if}
    
            <div class="center-content margin-top-2">
                <MediumButton color={buttonColor} animationColor={buttonAnimationColor}>{buttonText}</MediumButton>
            </div>
        </div>
    </div>
</RotatingBorder>