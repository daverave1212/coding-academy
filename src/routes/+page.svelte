<script>

    import BigButton from "../components/BigButton.svelte";
    import FloaterBox from "../components-standalone/FloaterBox.svelte";
    import DotsPattern from "../components-standalone/DotsPattern.svelte";
    import FloatingToaster from "../components-standalone/FloatingToaster.svelte";
    import PortraitCard from "../components/PortraitCard.svelte";
    import FloatingCircle from "../components-standalone/FloatingCircle.svelte";
    import Ribbon from "../components-standalone/Ribbon.svelte";
    import PriceCard from "../components/PriceCard.svelte";

    import { earlyRegistrationDiscount } from '../stores/DiscountsConstants'
    import PricedCourseCards from "../components/PricedCourseCards.svelte";
    import NonpricedCourseCards from "../components/NonpricedCourseCards.svelte";
    import AboutPage from "./about/AboutPage.svelte";
    import Qna from "../components/QNA.svelte";

</script>

<style lang="css"></style>

<div class="page margin-top-4 relative">
    <DotsPattern style="top: 0vh; left: calc(-64px);" nRows={12} nCols={6} color={`#DDDDDD`} size={6} gap={20}/>
    <DotsPattern style="top: 60vh; right: calc(-48px);" nRows={12} nCols={6} color={`#DDDDDD`} size={6} gap={20}/>
    <FloatingCircle class="wide-only" style="--duration: 8s; top: calc(35vh); left: calc(var(--page-padding-left) * 0.5); background-color: var(--theme-color-1); width: 16px;"/>
    <FloatingCircle class="wide-only" style="--duration: 8s; top: calc(35vh); left: calc(var(--page-padding-left) * 0.5); background-color: var(--theme-color-1); width: 16px;"/>
    <div class="hero">
        <div class="hero-center">
            <h1 class="hero-title">Cursuri Programare:<br/>Noi Iti Dam Piesele<br/>Tu Construiesti Ce Vrei</h1>
            <h2 class="hero-subtitle margin-top-3">
                Te invatam <strong style="color: var(--theme-color-1)">pasii exacti</strong> ca sa creezi orice - perfect pentru freelanceri, antreprenori si persoane axate pe rezultate practice.<br/>
                Proiecte reale. Abilități reale. Fără pierdere de vreme: hai sa te propulsam in industrie 🚀
            </h2>
            <BigButton class="margin-top-3" onclick={() => {}}>Vezi Cursurile</BigButton>
        </div>
        <div class="hero-graphic flex-content center-content relative">
            <FloatingCircle style="--duration: 8.5s; top: -10vh; right: -25%; background-color: var(--theme-color-1);"/>
            <FloatingCircle style="top: 0vh; left: 7.5vw; background-color: var(--theme-color-2);"/>
            <FloatingCircle style="--duration: 9s; top: calc(60vh); left: 0vw; background-color: var(--theme-color-1); width: 0.5rem;"/>
            <FloatingCircle style="--duration: 6s; left: calc(-0.3 * var(--portrait-width)); top: calc(var(--portrait-height) * 0.35); background-color: var(--theme-color-2); width: 1.5rem;"/>
            
            <div class="flex-content center-content relative" style="height: 100%; flex-grow: 1;">
                <PortraitCard src="/images/app/Me.png" class="hero-portrait" style="--rotate: -5deg;">
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



    <DotsPattern style="top: 90vh; left: calc(-16px);" nRows={20} nCols={4} color={`#DDDDDD`} size={6} gap={20}/>
    <div id="Courses" class="relative" style="margin-top: 8rem;">
        <h1 class="hero-title center-text">Cursurile Noastre</h1>
        <div style="padding: 2rem 10vw 3rem 10vw;">
            <p class="center-text" style="font-size: 1.5rem;">
                Ne axam pe rezultate practice in cel mai scurt timp, cu cel mai mic efort si cu cele mai relevante informatii pentru ce ai nevoie.<br/>
                Vrei sa devii freelancer, antreprenor sau sa iti faci propriile proiecte sau aplicatii? Sau vrei sa inveti sa faci jocuri si sa le lansezi pe Steam?
            </p>
        </div>
        <!-- <NonpricedCourseCards/> -->
        <PricedCourseCards/>
    </div>




    <div class="flex-row gap-4 margin-top-8">
        <div class="flex-start center-text flex-1">
            <h2 class="">De ce?</h2>
            <p class="fs-1_5 margin-top-1">
                Se zice ca programatori vor fi inlocuiti de inteligenta artificiala.<br/>
                Fals 🤖<br/>
                Oricine a incercat sa faca o aplicatie fara cunostinte poate atesta ca este mult mai greu decat pare. Tocmai de aceea este nevoie de programatori care <i>inteleg</i> cum functioneaza si cum se dezvolta o aplicatie.<br/>
                Va fi nevoie de noi, <i>mult,</i> in continuare - putem garanta.
            </p>
        </div>
        <div class="flex-start center-text flex-1">
            <h2 class="">Pentru Cine?</h2>
            <p class="fs-1_5 margin-top-1">
                Daca vrei setul minim de pasi ca sa dezvolti orice aplicatie, aceste cursuri sunt pentru tine.<br/>
                Daca ai incercat sa inveti programare si ai zis ca nu poti - sunt pentru tine.<br/>
                Daca vrei sa lansezi jocuri adevarate si bine facute - sunt pentru tine.<br/>
                Daca vrei sa intelegi cum functioneaza programarea practica - sunt pentru tine.
            </p>
        </div>
    </div>

    <AboutPage/>

    <Qna/>


</div>