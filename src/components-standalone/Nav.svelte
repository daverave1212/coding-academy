
<style>
    :root {
        /* Landscape only */
        --nav-margin-top: 4.4vh;
        --base-nav-height: 4rem;
        --nav-padding-left: var(--page-padding-left);
        --nav-padding-right: var(--page-padding-left);
        --nav-gap: 4rem;
        --nav-flex-direction: row-reverse;

        /* Mobile only */
        --mobile-nav-padding: 3rem;

        /* Both (require adjustments for the media query below as well) */
        --nav-bg-color: none;
        --nav-color: rgb(68, 68, 68);
    }

    @media (max-width: 1080px) {
        :root {
            --nav-bg-color: white;
            --nav-color: rgb(68, 68, 68);
        }
    }


    nav a {
        text-decoration: none;
        line-height: calc(var(--base-nav-height));
    }
    @media (min-width: 1080px) {
        nav {
            width: 100%;
            height: var(--base-nav-height);

            background-color: var(--nav-bg-color);

            margin-top: var(--nav-margin-top);
            padding-left: var(--nav-padding-left);
            padding-right: var(--nav-padding-right);

            display: flex;
            flex-direction: row-reverse;
        }
        nav .landscape-nav-content {
            display: flex;
            width: 100%;
            height: 100%;

            display: flex;
            flex-direction: var(--nav-flex-direction);
            gap: var(--nav-gap);
        }
        nav a {
            color: var(--nav-color);
        }
    }

    @media (max-width: 1080px) {
        nav {
            width: 100vw;
            height: 0px;
        }

        .portrait-side-menu-content {
            width: 100%;
            padding: var(--mobile-nav-padding);

            display: flex;
            flex-direction: column;
        }

        nav a {
            color: var(--nav-color);
        }
    }

</style>

<script>

    import SideMenu from "./SideMenu.svelte"

    export let options = []
    export let isBurgerOpen
    export let setIsBurgerOpen

    export let itemClass = ''
    export let style = ''

</script>

<nav {style}>
    <div class="landscape-only landscape-nav-content">
        {#each options as {name, href}}
            <a href={href} class={itemClass}>{name}</a>
        {/each}
    </div>
    <div class="portrait-only">
        <slot></slot>
        <SideMenu isOpen={isBurgerOpen} setIsOpen={setIsBurgerOpen}>
            <div class="portrait-side-menu-content">
                {#each options as {name, href}}
                    <a href={href} class={itemClass}>{name}</a>
                {/each}
            </div>
        </SideMenu>
    </div>
</nav>