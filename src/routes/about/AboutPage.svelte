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
	import Bold from './../../components/Bold.svelte';
    import DotsPattern from "../../components-standalone/DotsPattern.svelte";
    import FloaterBox from "../../components-standalone/FloaterBox.svelte";
    import FloatingCircle from "../../components-standalone/FloatingCircle.svelte";

</script>

<div class="about page margin-top-4 relative">
    <DotsPattern style="top: 30vh; left: calc(-64px);" nRows={12} nCols={6} color={`#DDDDDD`} size={6} gap={20}/>
    <DotsPattern style="top: 80vh; right: calc(-48px);" nRows={12} nCols={6} color={`#DDDDDD`} size={6} gap={20}/>
    <FloatingCircle style="--duration: 8.5s; top: -5vh; right: 0vw; background-color: var(--theme-color-1);"/>
    <FloatingCircle style="--duration: 10s; top: 40%; right: -2.5vw; background-color: var(--theme-color-2); width: 1.25rem;"/>
    <FloatingCircle style="--duration: 8s; top: calc(35vh); left: calc(var(--page-padding-left) * 0.5); background-color: var(--theme-color-1); width: 16px;"/>
    <FloatingCircle style="--duration: 9s; top: calc(60vh); left: 0vw; background-color: var(--theme-color-1); width: 0.5rem;"/>
    <FloatingCircle style="--duration: 6s; left: -2.5vw; top: calc(var(--portrait-height) * 0.35); background-color: var(--theme-color-2); width: 1.5rem;"/>

    <div class="landscape-1300-only">
        <FloaterBox
            style='z-index: var(--z-higher); top: -40vh; left: -7.5vw;'
            src="/images/js.png"
            delay={500} rotate={-10} scale={1} x={0} y={0} color="var(--theme-color-2)"
        />
        <FloaterBox
            style='z-index: var(--z-lower); bottom: 10vh; left: -5vw;'
            delay={100} src="/images/cs.png"
            rotate={10} scale={1} x={0} y={0} color="var(--theme-color-1)"
        />
        <FloaterBox
                style='z-index: var(--z-higher); top: 40vh; right: 0vw;'
                delay={200} src="/images/education.png"
                rotate={20} scale={1} x={0} y={0} color="var(--theme-color-2)"
            />
        <FloaterBox
            style='z-index: var(--z-higher); top: -4rem; right: 2vw;'
            src="/images/growth.png"
            delay={400} rotate={25} scale={1} x={0} y={0} color="var(--theme-color-1)"
        />
    </div>
    <div class="portrait-1300-only">
        <FloaterBox
            style='z-index: var(--z-higher); top: -68vh; left: -7.5vw;'
            src="/images/js.png"
            delay={500} rotate={-10} scale={1} x={0} y={0} color="var(--theme-color-2)"
        />
        <FloaterBox
            style='z-index: var(--z-higher); top: -2rem; right: 35vw;'
            src="/images/growth.png"
            delay={400} rotate={25} scale={1} x={0} y={0} color="var(--theme-color-1)"
        />
        <FloaterBox
            style='z-index: var(--z-lower); bottom: 10vh; left: -5vw;'
            delay={100} src="/images/cs.png"
            rotate={10} scale={1} x={0} y={0} color="var(--theme-color-1)"
        />
        <FloaterBox
            style='z-index: var(--z-higher); top: 40vh; right: 0vw;'
            delay={200} src="/images/education.png"
            rotate={20} scale={1} x={0} y={0} color="var(--theme-color-2)"
        />
    </div>


    <!-- <FloaterBox
        style='z-index: var(--z-higher); top: calc(var(--portrait-height) * -0.5); left: calc(-5vw - 5.5rem);'
        delay={300} src="/images/information-button.png"
        rotate={-30} scale={1} x={0} y={0} color="var(--theme-color-1)"
    /> -->


    
    

    <!-- <div class="flex-content center-content relative" style="height: 100%; flex-grow: 1;">
            
        <PortraitCard src="/images/app/Me.png"  class="hero-portrait" style="--rotate: -5deg;">
            <h4 style="color: var(--theme-color-2);">David Irimia</h4>
            <p class="margin-top-half">Viitorul tau profesor :)</p>
        </PortraitCard>
    </div> -->

    <div class="margin-top-4">
        <h1 class="hero-title">Cine sunt eu?</h1>
        <p class="margin-top-2">Salut! Sunt David, viitorul tau profesor :)</p>
        <br/>
        <p>Am creat aceste cursuri pentru a demonstra ca programarea nu e atat de complicata cum pare - daca invatam lucrurile care trebuie, in ordinea care trebuie, programarea <Bold color="var(--theme-color-2-darker)">aplicatiilor</Bold> devine o <Bold>joaca</Bold> productiva.</p>
        <br/>
        <p>Sunt un <strong>10x developer</strong> - extrem de productiv in foarte putin timp. Vreau sa invat lumea sa fie la fel.</p>
        <h3 class="margin-top-3">Experienta Mea</h3>
        <p class="margin-top-1">
            Am colaborat cu mari din industria dezvoltarii de <Bold color="var(--theme-color-2-darker)">aplicatii</Bold>, precum Amiq si BearingPoint, si din industria dezvoltarii <Bold>jocurilor</Bold>, precum Playtika si FoxQuest.
        </p>
        <p>
            Am lucrat ca freelancer de proiecte mici, mari si medii si am creat sute de aplicatii si jocuri de toate tipurile.<br/>
            Pana la urma, pe asta ne axam: proiecte reale.
        </p>
        <p class="margin-top-1">
            Am predat programare si informatica multor oameni. Stiu bine domeniul, si inteleg intregul ecosistem. Am experienta ideala si sa imi amintesc problemele de care m-am lovit, si sa stiu sa le explic pe intelesul tuturor.
        </p>

            <!-- <BigButton class="margin-top-3" onclick={() => {}}>Vezi Cursurile</BigButton> -->
        <!-- </div> -->
        <!-- <div class="hero-graphic flex-content right relative">
            <div class="companies">
                <div class="flex center-content landscape-1080-only">
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
        </div> -->
    </div>

    
</div>