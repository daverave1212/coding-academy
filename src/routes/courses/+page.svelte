<style>
    .columns {
        gap: 5vw;
    }
    .content {
        font-size: 1.25rem;
        margin-top: 0.75rem;
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
    import BigButton from "../../components/BigButton.svelte";
    import CourseSection from "../../components/CourseSection.svelte";
    import PortraitCard from "../../components/PortraitCard.svelte";



</script>

<div class="columns page margin-top-4 relative">
    <CourseSection
        length="9-11 Lecții"
        perWeek="1 Lecție / Săptămână"
        date="1 Iulie 2025"
        color="var(--theme-color-2)" anticolor="var(--theme-color-1)"
    >
        {#snippet title()}
            <span>Zero to Hero:<br/> Code Full Real-World Apps</span>
        {/snippet}

        {#snippet content()}
            <p class="content">Cursul se axează pe aplicații front-end: website-uri funcționale si aplicații de Desktop și mobile. Vom face proiecte reale, rezolva probleme adevărate de programare, iar rezultatul final va fi o aplicație gata de livrare.</p>
            
            <h4 class="margin-top-2">Programa</h4>
            <p class="content">Tehnologiile folosite sunt JavaScript, HTML și CSS.</p>
            <p class="content">În primă fază, vom învăța fundamentele programării cu JavaScript. Vom trece apoi la HTML si CSS, si vom învăța să le combinam. Vom învăța despre UI/UX design și cum să facem o aplicație frumoasa pe care o putem pune pe web, Desktop sau mobile folosind Electron. Pe lângă acestea, vom invăța multe tips & tricks, sfaturi și bune practici.</p>
            <p class="content">De-a lungul cursului, vom lucra împreună la un proiect, astfel că tot ce învățăm este către proiectul respectiv (o aplicație pentru un restaurant).</p>
            <p class="content">Fiecare student își va alege, de asemenea, un proiect personal ce va fi predat la finalul cursului.</p>
            <p class="content">Pe toată perioada cursului voi fi available live și online să răspund la orice întrebare și să ajut studenții cu orice au nevoie.</p>

            <h4 class="margin-top-2">Durată & Detalii</h4>
            <p class="content">Fiecare lecție dureaza <b class="yellow">între 2 și 3 ore</b> (cu pauze). Vom stabili de comun acord zilele și orele de întâlnire.</p>
            <p class="content">Durata cursului poate varia în funcție de viteza cu care ne mișcăm, durata lecțiilor, etc. Dacă rămâne timp, vom puncta și elemente de server, baze de date, tips pentru freelanceri dacă avem interesați și ce e de făcut în continuare.</p>
            <p class="content">La finalul cursului, dupa predarea proiectului, oferim diplomă.</p>
            <p class="content">Studenții vor primi acces la materialele cursului și la un grup privat pe WhatsApp și Discord unde pot vorbi cu mine sau alți studenți.</p>
            <p class="content"><b>Atenție:</b> Studenții trebuie sa vină cu laptopurile personale.</p>

            <h4 class="margin-top-2">Preturi</h4>
            <p class="content">Prețul de bază al cursului este 850 RON, cu <b class="yellow">discounturi aplicate</b> pentru înscrierea din timp, aducerea încă unei persoane sau achiziționarea ambelor cursuri (click pe Înscrie-te pentru detalii despre reduceri).</p>
            <p class="content">Cursul de bază este în persoană, cât mai aproape de zona Unirii, dar dacă există cerere vom ține încă o sesiune suplimentară online, la un preț ajustat.</p>
            <p class="content">Dacă există cerere, vom organi.</p>
            
            
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
    >
        {#snippet title()}
            Practical Game Making:<br/>Code It, Design It, Release It
        {/snippet}

        {#snippet content()}
            <p class="content">Cursul se axează pe crearea de jocuri de Desktop si mobile, 2D și 3D. Vom învăța să programăm jocuri, să folosim Unity, vom învăța despre <b class="purple">Game Design</b> practic și la finalul cursului, vom lansa jocul pe Steam! Să facem niște bani din jocul creat!</p>
            
            <h4 class="margin-top-2">Programa</h4>
            <p class="content">Cursul cuprinde 2 sub-cursuri ținute în sesiuni separate: cursul de Code & Dev axat pe hard skills de programare și dezvoltare, și cursul de Game Design unde vom învăța despre ce face un joc bun, cum să creăm un joc calitativ, game design, marketing, Steam, etc.</p>
            <p class="content">Tehnologiile folosite sunt C#, Unity și alte tehnologii mai mici dar foarte utile.</p>
            <p class="content">Vom învăța fundamentele programării cu C#. Vom trece apoi la Unity 3D. Vom învăța cum să facem un joc atractiv pe care oamenii l-ar cumpăra. Pe lângă acestea, vom invăța multe tips & tricks, sfaturi și bune practici.</p>
            <p class="content">De-a lungul cursului, vom lucra împreună la un proiect, la care fiecare student va adăuga și modifica bucăți (îl va personaliza) și (de preferat) lansa pe Steam sau altă platformă asemănătoare.</p>
            <p class="content">Pe toată perioada cursului voi fi available live și online să răspund la orice întrebare și să ajut studenții cu orice au nevoie.</p>

            <h4 class="margin-top-2">Durată & Detalii</h4>
            <p class="content">Subcursul <b class="purple">Code & Dev</b> este săptămânal și dureaza <b class="purple">între 2 și 3 ore</b> (cu pauze). Subcursul <b class="purple">Code & Dev</b> este o dată la 2 săptămâni și dureaza <b class="purple">aproximativ 1 oră 30.</b> (cu pauze). Vom stabili de comun acord zilele și orele de întâlnire.</p>
            <p class="content">Durata cursului poate varia în funcție de viteza cu care ne mișcăm, durata lecțiilor, etc.</p>
            <p class="content">Studenții vor primi acces la materialele cursului și la un grup privat pe WhatsApp și Discord unde pot vorbi cu mine sau alți studenți.</p>
            <p class="content">La finalul cursului, dupa finalizarea proiectului, oferim diplomă.</p>
            <p class="content"><b>Atenție:</b> Studenții trebuie sa vină cu laptopurile personale.</p>

            <h4 class="margin-top-2">Preturi</h4>
            <p class="content">Prețul de bază al cursului este 1450 RON, cu <b class="purple">discounturi aplicate</b> pentru înscrierea din timp, aducerea încă unei persoane sau achiziționarea ambelor cursuri (click pe Înscrie-te pentru detalii despre reduceri).</p>
            <p class="content">Cursul de bază este în persoană, cât mai aproape de zona Unirii, dar dacă există cerere vom ține încă o sesiune suplimentară online, la un preț ajustat.</p>            
            
        {/snippet}



    <!-- Clarificari
    - cu italics si gri
        - diploma
        - preturi
        - banii inapoi -->
    </CourseSection>


</div>