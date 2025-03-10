<script>

    import BigButton from "../components/BigButton.svelte";
    import FloaterBox from "../components-standalone/FloaterBox.svelte";
    import DotsPattern from "../components-standalone/DotsPattern.svelte";
    import FloatingToaster from "../components-standalone/FloatingToaster.svelte";
    import PortraitCard from "../components/PortraitCard.svelte";
    import FloatingCircle from "../components-standalone/FloatingCircle.svelte";

</script>

<style>

    .hero-title {
        color: var(--dark-gray);
        font-family: HeroMuli;
    }

    .hero-center {
        max-width: 740px;
    }
    .hero-graphic {
        overflow-x: visible;
        position: relative;
        flex-grow: 1;
    }

    @media (max-width: 1080px) {
        .hero-center {
            max-width: 560px;
        }
    }
    @media (max-width: 768px) {
        .hero-center {
            max-width: none;
        }
    }


</style>

<div class="page margin-top-4 relative">
    <FloatingCircle style="--duration: 8s; top: calc(-3rem); left: 25vw; background-color: var(--theme-color-1);"/>
    <div class="flex-content">
        <div class="hero-center">
            <h1 class="hero-title">Learning Digital Skills<br/> Is Easy and Fun<br/>Only Here.</h1>
            <h2 class="hero-subtitle margin-top-3">This website is pretty good, not bad at all Lorem ipsum dolor sit amet quae torus.</h2>
            <BigButton class="margin-top-3" onclick={() => {}}>Vezi Cursurile</BigButton>
        </div>
        <div class="hero-graphic flex-content center-content relative">
            <FloatingCircle style="top: calc(-5vh); background-color: var(--theme-color-2);"/>
            <DotsPattern style="top: 200px; right: calc(-1 * var(--page-padding-right) + 18px);" nRows={12} nCols={6} color={`#DDDDDD`} size={6} gap={20}/>
            <FloatingCircle style="--duration: 6s; left: calc(-0.3 * var(--portrait-width)); top: calc(var(--portrait-height) * 0.35); background-color: var(--theme-color-2); width: 1.5rem;"/>
            <div class="flex-content center-content relative" style="height: 100%; flex-grow: 1;">
                <FloatingCircle style="--duration: 8.5s; top: calc(var(--portrait-height) * 0.5); right: -25%; background-color: var(--theme-color-1);"/>
                <PortraitCard src="/images/app/Me.png" style="--rotate: -5deg; color: white; left: 15vw; top: 0px;">
                    <FloaterBox style='z-index: var(--z-higher); top: calc(var(--portrait-height) * -0.5); left: -5vw;' delay={100} src="/images/code-solid.svg" rotate={-10} scale={1} x={0} y={0} color="var(--theme-color-1)"/>
                    <FloaterBox style='z-index: var(--z-higher); right: -0.5rem; top: -4rem;' src="/images/game-controller.png" delay={250} rotate={25} scale={1} x={0} y={0} color="var(--theme-color-2)"/>
                    <!-- <FloatingCircle style="--duration: 9s; top: calc(var(--portrait-height) * -0.9); right: -10%; background-color: var(--theme-color-1); width: 1.5rem;"/> -->
                    <!-- <FloatingCircle style="--duration: 8s; top: calc(var(--portrait-height) * 0.25); right: -50%; background-color: var(--theme-color-1); width: 0.5rem;"/> -->
                    <!-- <FloatingCircle style="--duration: 5s; top: calc(var(--portrait-height) * -0.5); right: -25%; background-color: var(--theme-color-2); width: 1rem;"/> -->
                    <h4 style="color: var(--theme-color-2);">David Irimia</h4>
                    <p class="margin-top-half">Let's see where it goes!</p>
                </PortraitCard>
            </div>
        </div>
    </div>
</div>