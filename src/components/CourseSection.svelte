<style>

    .course-title {
        font-size: var(--hero-fs);
        max-width: 85%;
    }
    @media (max-width: 1080px) {
        .course-title {
            max-width: 100%;
            text-align: center;
            margin-bottom: 2rem;
        }
    }

    .by {
        display: flex;
        height: 1.75rem;
    }
    .by img {
        height: 100%;
        border-radius: 100%;
        margin-right: 0.5rem;
    }
    .by * {
        font-size: 1.25rem;
        font-weight: 600;
    }
    video {
        width: 100%;
        border-radius: 0.5rem;
    }



    .overtext {
        font-family: RoundedNunito;
        font-weight: 400;
        font-size: 1rem;
        color: gray;
        margin-top: 2rem;
    }
    .undertext {
        font-family: RoundedNunito;
        font-weight: 700;
        font-size: 1.25rem;
    }
    b {
        color: var(--color);
    }
    
    .course-icon {
        --padding: 0.25rem;
        display: inline-block;

        width: var(--h2-fs);
        height: var(--h2-fs);
        padding: var(--padding);
        margin-top: var(--padding);
        
        background-color: var(--color);
        border-radius: 0.25rem;
    }
    .course-icon img {
        width: calc(var(--h2-fs) - 2 * var(--padding));
        height: calc(var(--h2-fs) - 2 * var(--padding));
    }
    .course-signup-button-box {
        display: flex;
        flex-direction: row;
        justify-content: end;
    }
    @media (max-width: 1080px) {
        .course-signup-button-box {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-bottom: 1rem;
        }
    }

</style>

<script>
	import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import Ribbon from "../components-standalone/Ribbon.svelte";
    import { earlyRegistrationDiscount, isEarlyRegistrationOpen } from "../stores/DiscountsConstants";
    import BigButton from "./BigButton.svelte";
    import DiscountCheckboxes from "./DiscountCheckboxes.svelte";
    import MediumButton from "./MediumButton.svelte";


    let props = $props()

    let {
        id,
        date, length, perWeek,
        color, anticolor,
        ribbonName, ribbonText,
        price
    } = $derived(props)

    let {
        title,
        content,
        subtext
    } = $derived(props)

    let currentPrice = $state(price)
    let currentDiscount = $state(isEarlyRegistrationOpen? earlyRegistrationDiscount * 100: 0)

</script>

<div style={`--color: ${color};`}>
    
    <!-- <Ribbon name={ribbonName} style="left: 0px; top: calc(1.25rem);">{ribbonText}</Ribbon> -->
    <!-- <div class="long-ribbon shadowed" style={`background-color: ${color};`}>
        {ribbonText}
    </div> -->

    <!-- <div class="columns">
        
        <div class="course-signup-button-box">
            <MediumButton style={`margin-top: 0.25rem; height: 3.5rem !important;`} color={color} animationColor={anticolor} onclick={() => { goto('/signup') }}>Inscrie-te!</MediumButton>
        </div>
    </div> -->

    <h1 class="course-title" id={id}>
        {@render title()}
    </h1>

    <div class="by margin-top-2">
        <img src="/images/app/Me.png"/>
        <p><span style="color: gray;">by</span> David Irimia</p>
    </div>

    <!-- <div>
        <video class="margin-top-1 shadowed" controls>
            <source src="/images/app/test.mp4"/>
        </video>
    </div> -->

    <div class="columns">
        <div>
            <h4 class="overtext">Dificultate</h4>
            <p class="undertext">Începător</p>

            <h4 class="overtext">Durata</h4>
            <p class="undertext">{length}</p>

            <h4 class="overtext">
                {#if currentDiscount == 0}
                    Pret
                {:else}
                    <span class="strikethrough">{price} RON</span>
                {/if}
            </h4>
            <p class="undertext">{currentPrice} RON</p>
            <DiscountCheckboxes price={price} color={color} setPriceAndDiscount={(newPrice, newDiscount) => {
                currentPrice = newPrice
                currentDiscount = newDiscount
            }}/>
        </div>
        <div>
            <h4 class="overtext">Data de început</h4>
            <p class="undertext">{date}</p>

            <h4 class="overtext">Lecții pe săptămână</h4>
            <p class="undertext">{perWeek}</p>

            <h4 class="overtext">Inscriere</h4>
            <p class="undertext">Inscrie-te la sesiunea Iulie!</p>
            <div class="margin-top-half">
                <MediumButton style="margin-left: -0.25rem; width: 16rem;" color={color} animationColor={anticolor} onclick={() => { goto('/signup') }}>Inscrie-te!</MediumButton>
            </div>
        </div>
    </div>

    <h2 class="margin-top-4">Despre curs</h2>
    <div class="margin-top-1">
        {@render content()}
    </div>

    <MediumButton class="margin-top-3" color={color} animationColor={anticolor} onclick={() => { goto('/signup') }}>Inscrie-te!</MediumButton>

    <div class="margin-top-4">
        {@render subtext?.()}
    </div>
</div>