<style>
    .columns {
        gap: 3vw;
    }
    .courses p {
        margin-top: 0.75rem;
    }
    .content img {
        height: 1.25rem;
    }
    .subtext {
        font-family: RoundedNunito;
        font-size: 1rem;
        font-style: italic;
        color: gray;
    }
    .yellow {
        color: var(--theme-color-2);
    }
    .purple {
        color: var(--theme-color-1);
    }

</style>

<script>
    import DotsPattern from "../../components-standalone/DotsPattern.svelte";
    import FloaterBox from "../../components-standalone/FloaterBox.svelte";
    import FloatingCircle from "../../components-standalone/FloatingCircle.svelte";
    import Icon from "../../components-standalone/Icon.svelte";
    import BigButton from "../../components/BigButton.svelte";
    import CourseSection from "../../components/CourseSection.svelte";
    import PortraitCard from "../../components/PortraitCard.svelte";
    import TickList from "../../components/TickList.svelte";

    const jsTick = '/images/CheckYellow.png'
    const gdTick = '/images/CheckPurple.png'

</script>

<div class="page narrowest courses margin-top-4 relative">
<!-- <div class="columns page smaller margin-top-4 relative"> -->
    <CourseSection
        length="9-11 Lecții"
        perWeek="1 Lecție / Săptămână"
        date="1 Iulie 2025"
        price={850}
        color="var(--theme-color-2)" anticolor="var(--theme-color-1)"
        ribbonName="Yellow" ribbonText="App Dev"
    >
        {#snippet title()}
            Zero to Hero: Code Full Real-World Apps
        {/snippet}

        {#snippet content()}
        
            <p class="content">Vom construi aplicații front-end: website-uri si aplicații de Desktop și mobile. Vom face proiecte reale, gata de release si vom rezolva probleme adevărate de programare. Rezultatul final va fi o aplicație perfect functionala, gata de livrare.</p>
            
            <h4 class="margin-top-2">Tehnologiile studiate</h4>
            <TickList src={jsTick} items={[
                `JavaScript`,
                'HTML',
                'CSS',
                'Electron'
            ]}/>

            <h4 class="margin-top-2">Etapele cursului</h4>
            <TickList src={jsTick} items={[
                `Fundamentele programării cu JavaScript`,
                'HTML',
                'CSS',
                'Combinarea JavaScript cu HTML si CSS',
                'Git',
                'UI/UX Design',
                'Electron',
                'Deploy pe Web/Mobile/Desktop',
                'Tips & tricks, secrete și bune practici',
                'Predare proiecte, diploma si feedback'
            ]}/>
            <p class="content">De-a lungul cursului, vom lucra împreună la un proiect, astfel că tot ce învățăm este către proiectul respectiv.</p>
            <p class="content">Fiecare student își va alege, de asemenea, un proiect personal ce va fi predat la finalul cursului.</p>
            <p class="content">Pe toată perioada cursului sunt disponibil live și online să răspund la orice întrebare și să ajut studenții cu orice au nevoie, inclusiv pe grupurile de Discord si WhatsApp.</p>
            <p class="content">Dacă rămâne timp, vom puncta și elemente de server si baze de date.</p>
            
            
            <h4 class="margin-top-2">Durată</h4>
            <p class="content">Fiecare lecție dureaza <b class="yellow">între 2 și 3 ore</b> (cu pauze).</p>
            <p class="content">Durata cursului variaza în funcție de viteza cu care ne mișcăm, intre 2 si 3 luni alocate.</p>
            <p class="content">Vom stabili de comun acord zilele și orele de întâlnire..</p>

            <h4 class="margin-top-2">Diploma si Resurse</h4>
            <p class="content">Pupa predarea proiectului final, oferim diplomă.</p>
            <p class="content">Studenții au acces la materialele cursului și la un grup privat pe WhatsApp și Discord.</p>

            <h4 class="margin-top-2">Preturi</h4>
            <p class="content">Prețul de bază este 850 RON per intregul curs, si puteti beneficia de urmatoarele <b class="yellow">reduceri:</b></p>
            <TickList src={jsTick} items={[
                '-10% daca va inscrieti impreuna cu un prieten',
                '-10% daca va inscrieti la ambele cursuri',
            ]}/>

            <p class="content">Sala de curs este in zona Unirii. Dacă există cerere vom ține încă o sesiune suplimentară online.</p>
            
        {/snippet}



        <!-- Clarificari
        - cu italics si gri
            - diploma
            - preturi
            - banii inapoi -->
    </CourseSection>


    <CourseSection
        length="14-16 Lecții"
        perWeek="1-2 Lecții / Săptămână"
        date="1 Iulie 2025"
        color="var(--theme-color-1)" anticolor="var(--theme-color-2)"
        ribbonName="Purple" ribbonText="Game Dev"
    >
        {#snippet title()}
            Practical Game Making: Code It, Design It, Release It
        {/snippet}

        {#snippet content()}
            <p class="content">
                Peste 90% dintre cei care fac jocuri <b>nu reusesc sa lanseze</b> un joc.<br/>
                70% dintre jocurile de pe Steam nu isi recupereaza costurile, datorita unui gameplay slab, grafica neatractiva, lipsa unui plan de marketing, etc.<br/>
                Hai sa invatam sa o facem corect!
            </p>

            <p class="content">Vom construi jocuri de Desktop si mobile, 2D și 3D. Vom învăța să programăm jocuri in limbajul C#, să folosim Unity, vom învăța despre <b class="purple">Game Design</b> practic și la finalul cursului, vom lansa jocul pe Steam! Să facem niște bani din jocul creat!</p>

            
            <h4 class="margin-top-2">Programa</h4>
            <p class="content">Cursul cuprinde 2 sub-cursuri ținute în zile separate: cursul de Code & Dev și cursul de Game Design. Ambele subcursuri vin la pachet.</p>

            <h3 class="margin-top-2">A. Code & Dev: Programare și Dezvoltare</h3>
            <p class="content">Vom invata sa dezvoltam jocuri in sine - ne axam pe partea tehnica si practica a dezvoltarii de jocuri.</p>
            <TickList src={gdTick} items={[
                'C#',
                'Unity',
                'Durata: 9-11 sesiuni a 2-3 ore, o data pe saptamana'
            ]}/>
            <p class="content">De-a lungul cursului, vom lucra împreună la un proiect, la care fiecare student va adăuga și modifica bucăți (îl va personaliza).</p>
            <p class="content">Proiectul final va fi realizat pe echipe de cate 2-3 studenti.</p>
            <p class="content">Pe toată perioada cursului voi fi available live și online să răspund la orice întrebare și să ajut studenții cu orice au nevoie.</p>
            
            <h3 class="margin-top-2">B. Game Design</h3>
            <p class="content">Vom invata tehnici de <b>game design:</b> </p>
            <TickList src={gdTick} items={[
                `Cum să facem un joc atractiv si calitativ`,
                'Mechanics, game loop, etc',
                'Asset store',
                'Marketing',
                'Steam',
                'Advice and tips & tricks',
                'Durata: 4-5 sesiuni a 1-2 ore, o data la doua saptamani'
            ]}/>
            
            <h4 class="margin-top-2">Diploma si Resurse</h4>
            <p class="content">Pupa predarea proiectului final, oferim diplomă.</p>
            <p class="content">Studenții au acces la materialele cursului și la un grup privat pe WhatsApp și Discord.</p>

            <h4 class="margin-top-2">Preturi</h4>
            <p class="content">Prețul de bază este 1350 RON per intregul curs, si puteti beneficia de urmatoarele <b class="purple">reduceri:</b></p>
            <TickList src={gdTick} items={[
                '-10% daca va inscrieti impreuna cu un prieten',
                '-10% daca va inscrieti la ambele cursuri',
            ]}/>

            <p class="content">Sala de curs este in zona Unirii. Dacă există cerere vom ține încă o sesiune suplimentară online.</p>
        {/snippet}



    <!-- Clarificari
    - cu italics si gri
        - diploma
        - preturi
        - banii inapoi -->
    </CourseSection>


</div>