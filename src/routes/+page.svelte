<script>

    import BigButton from "../components/BigButton.svelte";
    import FloaterBox from "../components-standalone/FloaterBox.svelte";
    import DotsPattern from "../components-standalone/DotsPattern.svelte";
    import FloatingToaster from "../components-standalone/FloatingToaster.svelte";
    import PortraitCard from "../components/PortraitCard.svelte";
    import FloatingCircle from "../components-standalone/FloatingCircle.svelte";
    import Ribbon from "../components-standalone/Ribbon.svelte";
    import PriceCard from "../components/PriceCard.svelte";

</script>

<style lang="css">


    .hero-title {
        color: var(--dark-gray);
        font-family: HeroMuli;
    }

    .hero-content {
        display: flex;
        flex-direction: row;
    }
    @media (max-width: 1080px) {
        .hero-content {
            flex-direction: column;
            gap: 6rem;
        }
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
            max-width: none;
            text-align: center;
        }
        .hero-graphic {
            min-height: 70vh;
        }
    }



</style>

<div class="page margin-top-4 relative">
    <DotsPattern style="top: 0vh; left: calc(-64px);" nRows={12} nCols={6} color={`#DDDDDD`} size={6} gap={20}/>
    <DotsPattern style="top: 60vh; right: calc(-48px);" nRows={12} nCols={6} color={`#DDDDDD`} size={6} gap={20}/>
    <FloatingCircle class="wide-only" style="--duration: 8s; top: calc(35vh); left: calc(var(--page-padding-left) * 0.5); background-color: var(--theme-color-1); width: 16px;"/>
    <FloatingCircle class="wide-only" style="--duration: 8s; top: calc(35vh); left: calc(var(--page-padding-left) * 0.5); background-color: var(--theme-color-1); width: 16px;"/>
    <div class="hero-content">
        <div class="hero-center">
            <h1 class="hero-title">Learning Digital Skills<br/> Is Easy and Fun<br/>Only Here.</h1>
            <h2 class="hero-subtitle margin-top-3">This website is pretty good, not bad at all Lorem ipsum dolor sit amet quae torus.</h2>
            <BigButton class="margin-top-3" onclick={() => {}}>Vezi Cursurile</BigButton>
        </div>
        <div class="hero-graphic flex-content center-content relative">
            <FloatingCircle style="--duration: 8.5s; top: -10vh; right: -25%; background-color: var(--theme-color-1);"/>
            <FloatingCircle style="top: 0vh; left: 7.5vw; background-color: var(--theme-color-2);"/>
            <FloatingCircle style="--duration: 9s; top: calc(60vh); left: 0vw; background-color: var(--theme-color-1); width: 0.5rem;"/>
            <FloatingCircle style="--duration: 6s; left: calc(-0.3 * var(--portrait-width)); top: calc(var(--portrait-height) * 0.35); background-color: var(--theme-color-2); width: 1.5rem;"/>
            
            <div class="flex-content center-content relative" style="height: 100%; flex-grow: 1;">
                <PortraitCard src="/images/app/Me.png" style="--rotate: -5deg; color: white; margin-top: -30px; margin-left: 10vw; position: relative;">
                    <FloaterBox
                        style='z-index: var(--z-higher); top: calc(var(--portrait-height) * -0.5); left: calc(-2.5vw - 5.5rem);'
                        delay={100} src="/images/code-solid.svg"
                        rotate={-30} scale={1} x={0} y={0} color="var(--theme-color-1)"
                    />
                    <FloaterBox
                        style='z-index: var(--z-higher); top: -4rem; right: calc(-2.5vw - 0.5rem);'
                        src="/images/game-controller.png"
                        delay={250} rotate={25} scale={1} x={0} y={0} color="var(--theme-color-2)"
                    />
                    <h4 style="color: var(--theme-color-2);">David Irimia</h4>
                    <p class="margin-top-half">Let's see where it goes!</p>
                </PortraitCard>
            </div>
        </div>
    </div>
    <PriceCard
        ribbonName="RibbonYellow" ribbonText="App Dev"
        price={765} subtext="RON"
        title="Zero to Hero: Code Full Real-World Apps"
        subtitle="Cel mai practic curs de programare de aplicatii pentru incepatori si freelanceri."

        featureTickName="CheckYellow" features={[
            'Perfect pentru incepatori',
            'Creeaza aplicatii adevarate',
            'Apps pe Web/Desktop/Mobile',
            'Accent pe practicalitate',
            'UI/UX design',
            'Zona Unirii'
        ]}

        discountText="Aplicati reduceri:" discountCheckColor="var(--theme-color-2)" discounts={[
            { text: 'Ma inscriu pana pe 30 Aprilie!', discount: 0.1 },
            { text: 'Aduc un prieten!', discount: 0.1 },
            { text: 'Cumpar ambele cursuri!', discount: 0.1 }
        ]}
    >
        
    </PriceCard>
</div>