<style>
    :root {
        --company-size: 225px;
    }
    @media (max-width: 1080px) {
        :root {
            --company-size: 100%;
        }
    }
    .hero-center {
        max-width: 800px;
    }
    .companies {
        width: var(--company-size);
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        padding-top: 1rem;
        flex-grow: 1;
        gap: 1.5vh;

    }
    .companies img {
        width: 100%;
    }
    @media (max-width: 1080px) {
        .companies {
            width: 100vw;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            gap: 2vh;
        }
        .companies > div {
            width: 40%;
        }   
        
    }
    img.company {
        width: 70%;
    }

    b {
        color: var(--theme-color-2);
    }

</style>

<script>
    import DotsPattern from "../../components-standalone/DotsPattern.svelte";
    import FloaterBox from "../../components-standalone/FloaterBox.svelte";
    import FloatingCircle from "../../components-standalone/FloatingCircle.svelte";
    import SpoilerCollapser from "../../components-standalone/SpoilerCollapser.svelte";
    import BigButton from "../../components/BigButton.svelte";
    import PortraitCard from "../../components/PortraitCard.svelte";
    import Qna from "../../components/QNA.svelte";

</script>

<div class="page margin-top-4 relative">
    <DotsPattern style="top: 30vh; left: calc(-64px);" nRows={12} nCols={6} color={`#DDDDDD`} size={6} gap={20}/>
    <DotsPattern style="top: 80vh; right: calc(-48px);" nRows={12} nCols={6} color={`#DDDDDD`} size={6} gap={20}/>
    <FloatingCircle class="wide-only" style="--duration: 8s; top: calc(35vh); left: calc(var(--page-padding-left) * 0.5); background-color: var(--theme-color-1); width: 16px;"/>
    <FloatingCircle class="wide-only" style="--duration: 8s; top: calc(35vh); left: calc(var(--page-padding-left) * 0.5); background-color: var(--theme-color-1); width: 16px;"/>

    <div class="flex-content center-content relative" style="height: 100%; flex-grow: 1;">
        <PortraitCard src="/images/app/Me.png"  class="hero-portrait" style="--rotate: -5deg;">
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
        <div class="hero-center left" style="padding-right: 3vw;">
            <h1 class="hero-title">Cine sunt eu?</h1>
            <p class="margin-top-2">Salut! Sunt David Irimia, viitorul tau profesor!</p>
            <br/>
            <p>Am creat aceste cursuri pentru a demonstra oamenilor ca programarea nu e atat de complicata cum pare - daca invatam lucrurile care trebuie, in ordinea care trebuie, programarea aplicatiilor devine o joaca productiva.</p>

            <h3 class="margin-top-3">Ce ma califica sa tin aceste cursuri?</h3>
            <p class="margin-top-1">Am experiență semnificativă nu doar în lucru la/cu firme mari
                <span class="landscape-only">(pe dreapta),</span>
                <span class="portrait-only">(mai jos),</span>
            dar și drept freelancer, consultant, antreprenor și tutore, și doresc să îmi duc pasiunea la următorul nivel.</p>
            <p class="margin-top-1">Am o vârstă suficientă să <b>știu bine despre ce vorbesc</b>, și suficient de mică să îmi amintesc <b>problemele de care m-am lovit</b>, și să știu să le explic pe înțelesul tuturor.</p>
            <p class="margin-top-1">Am făcut zeci (dacă nu peste 100) de proiecte din diverse domenii, și <b>pe asta ne axăm:</b> proiecte reale, practice si din lumea reală.</p>

            <!-- <BigButton class="margin-top-3" onclick={() => {}}>Vezi Cursurile</BigButton> -->
        </div>
        <div class="hero-graphic flex-content right relative">
            <FloatingCircle style="--duration: 8.5s; top: -10vh; right: -25%; background-color: var(--theme-color-1);"/>
            <FloatingCircle style="top: 0vh; left: 7.5vw; background-color: var(--theme-color-2);"/>
            <FloatingCircle style="--duration: 9s; top: calc(60vh); left: 0vw; background-color: var(--theme-color-1); width: 0.5rem;"/>
            <FloatingCircle style="--duration: 6s; left: calc(-0.3 * var(--portrait-width)); top: calc(var(--portrait-height) * 0.35); background-color: var(--theme-color-2); width: 1.5rem;"/>
            <div class="companies">
                <div class="flex center-content landscape-only">
                    <h3 class="center-text">Firme mari cu care am colaborat:</h3>
                </div>
                <div class="flex center-content"><img class="company" src="/images/app/Playtika.png"/></div>
                <div class="flex center-content"><img class="company" src="/images/app/Qualitest.png"/></div>
                <div class="flex center-content"><img class="company" src="/images/app/BearingPoint.png"/></div>
                <div class="flex center-content"><img class="company" src="/images/app/Amiq.png"/></div>
                <div class="flex center-content"><img class="company" src="/images/app/QuestFox.png"/></div>
                <div class="flex center-content center-text">
                    <p>...si multe alte companii mai mici.</p>
                </div>
            </div>
        </div>
    </div>

    
</div>