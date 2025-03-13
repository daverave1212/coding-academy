<style>
    :root {
        --company-size: 175px;
    }
    .companies  {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        flex-grow: 1;
    }
    .companies > div {
        width: var(--company-size);
    }
    img.company {
        width: var(--company-size);
    }

</style>

<script>
    import DotsPattern from "../../components-standalone/DotsPattern.svelte";
    import FloaterBox from "../../components-standalone/FloaterBox.svelte";
    import FloatingCircle from "../../components-standalone/FloatingCircle.svelte";
    import BigButton from "../../components/BigButton.svelte";
    import PortraitCard from "../../components/PortraitCard.svelte";

</script>

<div class="page margin-top-4 relative">
    <DotsPattern style="top: 30vh; left: calc(-64px);" nRows={12} nCols={6} color={`#DDDDDD`} size={6} gap={20}/>
    <DotsPattern style="top: 80vh; right: calc(-48px);" nRows={12} nCols={6} color={`#DDDDDD`} size={6} gap={20}/>
    <FloatingCircle class="wide-only" style="--duration: 8s; top: calc(35vh); left: calc(var(--page-padding-left) * 0.5); background-color: var(--theme-color-1); width: 16px;"/>
    <FloatingCircle class="wide-only" style="--duration: 8s; top: calc(35vh); left: calc(var(--page-padding-left) * 0.5); background-color: var(--theme-color-1); width: 16px;"/>

    <div class="flex-content center-content relative" style="height: 100%; flex-grow: 1;">
        <PortraitCard src="/images/app/Me.png" style="--rotate: -5deg; color: white; margin-top: -30px; margin-left: 10vw; position: relative;">
            <FloaterBox
                style='z-index: var(--z-higher); top: calc(var(--portrait-height) * -0.9); left: calc(-30vw - 5.5rem);'
                delay={100} src="/images/cs.png"
                rotate={10} scale={1} x={0} y={0} color="var(--theme-color-1)"
            />
            <FloaterBox
                style='z-index: var(--z-higher); top: calc(var(--portrait-height) * -0.1); left: calc(-20vw - 5.5rem);'
                delay={200} src="/images/education.png"
                rotate={20} scale={1} x={0} y={0} color="var(--theme-color-2)"
            />
            <FloaterBox
                style='z-index: var(--z-higher); top: calc(var(--portrait-height) * -0.5); left: calc(-5vw - 5.5rem);'
                delay={300} src="/images/information-button.png"
                rotate={-30} scale={1} x={0} y={0} color="var(--theme-color-1)"
            />


            <FloaterBox
                style='z-index: var(--z-higher); top: -4rem; right: calc(-10vw - 0.5rem);'
                src="/images/growth.png"
                delay={400} rotate={25} scale={1} x={0} y={0} color="var(--theme-color-1)"
            />
            <FloaterBox
                style='z-index: var(--z-higher); top: -16rem; right: calc(-20vw - 0.5rem);'
                src="/images/js.png"
                delay={500} rotate={-10} scale={1} x={0} y={0} color="var(--theme-color-2)"
            />
            <h4 style="color: var(--theme-color-2);">David Irimia</h4>
            <p class="margin-top-half">Viitorul tau profesor :)</p>
        </PortraitCard>
    </div>

    <div class="hero margin-top-4">
        <div class="hero-center">
            <h1 class="hero-title">Cine sunt eu?</h1>
            <h2 class="hero-subtitle margin-top-3">Participa la cele mai practice cursuri de programare pentru incepatori in mai multe domenii. Axat pe rezultate, nu diplome.</h2>
            <BigButton class="margin-top-3" onclick={() => {}}>Vezi Cursurile</BigButton>
        </div>
        <div class="hero-graphic flex-content right relative">
            <FloatingCircle style="--duration: 8.5s; top: -10vh; right: -25%; background-color: var(--theme-color-1);"/>
            <FloatingCircle style="top: 0vh; left: 7.5vw; background-color: var(--theme-color-2);"/>
            <FloatingCircle style="--duration: 9s; top: calc(60vh); left: 0vw; background-color: var(--theme-color-1); width: 0.5rem;"/>
            <FloatingCircle style="--duration: 6s; left: calc(-0.3 * var(--portrait-width)); top: calc(var(--portrait-height) * 0.35); background-color: var(--theme-color-2); width: 1.5rem;"/>
            <div class="companies">
                <div class="flex center-content"><img class="company" src="/images/app/Playtika.png"/></div>
                <div class="flex center-content"><img class="company" src="/images/app/Qualitest.png"/></div>
                <div class="flex center-content"><img class="company" src="/images/app/BearingPoint.png"/></div>
                <div class="flex center-content"><img class="company" src="/images/app/Amiq.png"/></div>
                <div class="flex center-content"><img class="company" src="/images/app/QuestFox.png"/></div>
                <div class="flex center-content">
                    <p>...si multe alte companii mai mici.</p>
                </div>
            </div>
        </div>
    </div>
</div>