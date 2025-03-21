<style>

    .price-box {
        --fs: 4rem;
        --original-fs: 2rem;
        --ff: RoundedNunito;
        --currency-fs: calc(var(--fs) * 0.5);
        display: flex;
    }


    .current-price {
        display: flex;
    }
    .price {
        font-size: var(--fs);
        font-family: var(--ff);
    }
    .currency-box {
        font-size: var(--currency-fs);
        margin-right: calc(var(--fs) * -0);
        margin-left: calc(var(--fs) * 0.025);
        padding-bottom: calc(var(--fs) * 0.25);

        font-family: var(--ff);
        position: relative;
    }
    .currency-box img {
        height: calc(var(--fs) * 0.5);
    }

    .currency-text {
        font-size: var(--currency-fs);
        font-family: var(--ff);

        position: absolute;
        bottom: calc(var(--fs) * 0.15);
        left: calc(100% + 2px);
    }

    .original-price-box {
        font-size: var(--original-fs);
        font-family: var(--original-ff);
        text-align: left;
        font-weight: 600;
        color: rgb(75, 75, 75);

        padding-bottom: 0.25rem;
        margin-left: 3px;
    }
    .right-subtext {
        font-size: calc(var(--original-fs) * 0.75);
    }

    .price-box.bottom {
        flex-direction: column;
    }
    .price-box.bottom .original-price-box {
        margin-top: calc(-0.5 * var(--original-fs));
    }
    
    .price-box.right .original-price {
        margin-left: 0.5rem;
    }

</style>

<script>
    import { roundDownToNearestFive } from "../lib/utils";

    let props = $props()
    let {
        currentPrice,originalPrice,
        currency=null,
        currencyText='RON',
        placeholder=null,
        fontSize, fontFamily, originalFontFamily='RoundedNunito', originalFontSize=`calc(var(--fs) * 0.25)`,
        alignment='bottom'
    } = $derived(props)



    
    let discount = $derived(roundDownToNearestFive(100 - (currentPrice / originalPrice) * 100))
    
    let leftSubtext = $derived(currentPrice == originalPrice? '': originalPrice)
    let rightSubtext = $derived(currentPrice == originalPrice? placeholder: `${currencyText}`)
    let discountedRightSubtext = $derived(`
        <span class="bottom-content" style="margin-left: 4px; font-size: calc(${originalFontSize} * 0.75); padding-bottom: calc(${originalFontSize} * 0.075)">${currencyText}</span>
        <div
            class="absolute line"
            style="width: 100%; top: calc(var(--original-fs) * 0.6);"
        ></div>
    `)
    let htmlSubtext = $derived(`
        <span class="flex">
            <span class="relative flex">
                ${leftSubtext}
                ${currentPrice == originalPrice? placeholder: discountedRightSubtext}
            </span>
        </span>
    `)

</script>

<div class={`price-box ${alignment} ${props.class}`} style={`
    --fs: ${fontSize};
    --ff: ${fontFamily};
    --original-fs: ${originalFontSize};
    --original-ff: ${originalFontFamily};
    ${props.style}`
}>

    <div class="current-price">
        <div class="relative">
            {#if currency != null}
                <div class="currency-box bottom-content">
                    <img src={currency}/>
                </div>
            {/if}
            <span class="price">
                {currentPrice}
            </span>
            {#if currencyText != null}
                <div class="currency-text bottom-content">
                    {currencyText}
                </div>
            {/if}
        </div>
    </div>

    {#if alignment == 'bottom'}
        <div class="original-price-box">
            {@html htmlSubtext}
        </div>
    {:else if true}

    {/if}
    
    
</div>