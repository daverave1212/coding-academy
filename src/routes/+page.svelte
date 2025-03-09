<script>

    import BigButton from "../components/BigButton.svelte";
    import FloaterBox from "../components-standalone/FloaterBox.svelte";
    import DotsPattern from "../components-standalone/DotsPattern.svelte";

</script>

<style>


    .hero-title {
        color: #333333;
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

<div class="page margin-top-4">
    <div class="flex-content">
        <div class="hero-center">
            <h1 class="hero-title">Learning Digital Skills<br/> Is Easy and Fun<br/>Only Here.</h1>
            <h2 class="hero-subtitle margin-top-3">This website is pretty good, not bad at all Lorem ipsum dolor sit amet quae torus.</h2>
            <BigButton class="margin-top-3" onclick={() => {}}>Vezi Cursurile</BigButton>
        </div>
        <div class="hero-graphic">
            <FloaterBox style='left: 50px; top: 50px;' src="/images/code-solid.svg" rotate={-5} scale={1} x={0} y={0} color="var(--theme-color-2)"/>
            <FloaterBox style='right: calc(-0.5 * var(--page-padding-right)); top: 200px;' src="/images/game-controller.png" rotate={25} scale={1} x={0} y={0} color="var(--theme-color-1)"/>
            <DotsPattern top={`200px`} right={`calc(-1 * var(--page-padding-right) + 18px)`} nRows={12} nCols={6} color={`#DDDDDD`} size={6} gap={20}/>
        </div>
    </div>
</div>