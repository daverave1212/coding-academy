<script>

    import "../app.css";
    import '../color-vars.css'
    import '../fonts.css'
    import '../font-style.css'
    import '../utils-core.css'
    import '../utils-utility-classes.css'
    import '../utils-elements.css'

    import { navigating } from '$app/stores'
    import Nav from "../components-standalone/Nav.svelte";
    import MobileBurgerButton from "../components-standalone/MobileBurgerButton.svelte";
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";

    let isBurgerOpen = false

    navigating.subscribe(nav => {
        // console.log(`Navigating. Added players:`)
        // console.log($addedPlayers)
    })


    // Required for transition animations between pages
    export let data
    $: {
        // console.log(`Data changed.`)
        // console.log({data})
    }

    let isMounted = false

    onMount(() => {
        isMounted = true
    })

</script>

<Nav
    options={[
        { name: 'Home', href: '/'},
        { name: 'Cursuri', href: '/courses'},
        { name: 'Despre Noi', href: '/about'},
        { name: 'Contact', href: '/contact'},
    ]}
    isBurgerOpen={isBurgerOpen} setIsBurgerOpen={bool => isBurgerOpen = bool}
    itemClass='nav-item-color-on-hover snappy-object-on-hover'
>
    <MobileBurgerButton style="background-color: var(--theme-color-1)" src="images/burger.svg" onClick={() => isBurgerOpen = true}></MobileBurgerButton>
</Nav>

{#key data.url}
    <div style={{ visibility: isMounted? '': 'hidden' }} in:fly={{x: 200, duration: 300, delay: 300}} out:fly={{x: -200, duration: 300}}>
        <slot></slot>
    </div>
{/key}
