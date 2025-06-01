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
    import Bold from "../components/Bold.svelte";
    import TickList from "../components/TickList.svelte";

    const jsTick = '/images/CheckYellow.png'
    const gdTick = '/images/CheckPurple.png'

</script>

<style lang="css">
    
    .why-and-for-whom {
        gap: 8rem;
        padding-left: 7vw;
        padding-right: 7vw;
    }
    @media (max-width: 1300px) {
        .why-and-for-whom {
            padding-left: 2.5vw;
            padding-right: 2.5vw;
        }
    }

    .aside-box {
        font-size: 1.5rem;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 7px;

        color: black;

        box-shadow: rgba(55, 55, 55, 0.1) 0px 2px 8px;
    }
    @media (max-width: 1300px) {
        .aside-box {
            padding: 1.5rem;
            margin-bottom: 0.5rem;
        }
    }

</style>

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




    <div class="why-and-for-whom flex-responsive margin-top-8">
        <div class="flex-start center-text flex-1" style="flex-direction: column;">
            <h2 class="center-text">De ce?</h2>
            <p class="margin-top-1 fs-1_5">
                Programarea este ca magia - creezi ceva util din nimic. Noi vrem sa te invatam programare moderna intr-un mod usor de inteles si eficient.
                <br/><br/>
                Te invatam <i>dezvoltare</i>.
                <br/><br/>
                Programatorii nu vor fi inlocuiti de AI prea curand 🤖. Din contra, aici <Bold>te invatam si sa folosesti AI precum ChatGPT</Bold> intr-un mod corect, rapid, logic si cu exercitii practice.<br/>
            </p>
        </div>
        <div class="flex-start flex-1 center-text" style="flex-direction: column;">
            <h2 class="center-text">Pentru Cine?</h2>
            <div class="aside-box margin-top-1">
                Cei care vor sa isi creeze propria aplicatie
            </div>
            <div class="aside-box">
                Creatori de start-upuri si antreprenori
            </div>
            <div class="aside-box">
                Viitori freelanceri
            </div>
            <div class="aside-box">
                Steam game developeri si designeri in devenire
            </div>
        </div>
    </div>

    <AboutPage/>

    <Qna/>


</div>