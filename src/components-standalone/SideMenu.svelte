<style>
    .side-menu-box {
        position: fixed;
        top: 0;
        left: 0;

        z-index: 99999 !important;
        overflow: hidden;

        width: 0vw;
        height: 100vh;
    }
    .side-menu-box--open {
        width: 100vw;
    }

    .side-menu-black-overlay {
        height: 100vh;
        width: 100%;

        background-color: black;

        z-index: 99991;
        opacity: 0;
        transition: 0.5s;
    }
    .side-menu-black-overlay--open {
        opacity: 0.5;
    }

    .side-menu {
        --width: min(300px, 70vw);

        position: absolute;

        height: 100vh;
        width: var(--width);

        top: 0;
        left: calc(-1 * var(--width));
        
        z-index: 514 !important;

        transition: 0.5s;
        
        background-color: white;
    }

    .side-menu--open {
        left: 0vw !important;
    }
</style>

<script>

    export let isOpen
    export let setIsOpen
    let state = 'CLOSED'
    
    $: {
        if (isOpen) {
            state = 'OPEN'
            console.log('Setting state to open')
        } else {
            console.log('Closing')
            state = 'CLOSING'
            setTimeout(() => {
                state = 'CLOSED'
            }, 500)
        }
    }

    $: sideMenuWrapperClass =
        state == 'OPEN' ? 'side-menu-box side-menu-box--open' :
        state == 'CLOSING' ? 'side-menu-box side-menu-box--open' :
        'side-menu-box'
    $: blackOverlayClass =
        state == 'OPEN' ? 'side-menu-black-overlay side-menu-black-overlay--open' :
        'side-menu-black-overlay'
    $: sideMenuClass = 
        state == 'OPEN' ? 'side-menu side-menu--open': 
        'side-menu'

    function closeSideMenu() {
        setIsOpen(false)
    }

</script>

<!-- svelte-ignore missing-declaration -->
<div class="{sideMenuWrapperClass}" on:click={closeSideMenu}>
    <div class="{blackOverlayClass}"></div>
    <div class="{sideMenuClass} shadowed" on:click={evt => evt.stopPropagation()}>
        <slot></slot>
    </div>
</div>