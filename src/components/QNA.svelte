<style>

</style>

<script>
    import SpoilerCollapser from "../components-standalone/SpoilerCollapser.svelte";

    let props = $props()

</script>

<div class={props.class} style={props.style}>
    <h1 class="center-text">Intrebari si Raspunsuri</h1>
    <SpoilerCollapser class="margin-top-2" title="Cum ma inscriu?">
        Conteacteaza-ma direct prin WhatsApp, apel telefonic sau email pentru inscrieri!
        <img style="max-width: 80%; display: block; margin-top: 0.75rem;" src="n.png"/>
    </SpoilerCollapser>     
    <SpoilerCollapser class="margin-top-1" title="Trebuie sa stiu ceva inainte de curs?">
        Nu! N-ai nevoie de nicio cunostinta de programare sau IT. Te invatam noi tot!
    </SpoilerCollapser>
    <SpoilerCollapser class="margin-top-1" title="Cursurile online sunt la acelasi pret?">
        Nu, cursurile online vor avea un discount si se vor face doar daca exista cerere.
    </SpoilerCollapser>
    <SpoilerCollapser class="margin-top-1" title="Am nevoie de laptop?">
        Da, va trebui sa vii cu laptopul personal.
    </SpoilerCollapser>
    <SpoilerCollapser class="margin-top-1" title="Unde se tine cursul live?">
        Veti primi locatia exacta odata cu inscrierea, dar este aproape de centru, Bucuresti.
    </SpoilerCollapser>
    <SpoilerCollapser class="margin-top-1" title="In ce zile/ore sunt cursurile?">
        Zilele si orele le vom stabili de comun acord cu grupa.
    </SpoilerCollapser>
    <SpoilerCollapser class="margin-top-1" title="Se da diploma?">
        Da! La finalul cursului, dupa predarea proiectului, oferim diploma.
        <br/>
        <br/>
        <i style="color: gray; font-size: 1rem;">
            Nota: suntem in proces de a obtine acreditare de la minister. Pana atunci, oferim diploma semnata digital calificat de firma noastra. Autenticitatea diplomei este verificabila.
            <br/>
            Diplomele acreditate vor fi oferite retroactiv studentilor care deja au terminat cursul si vor inlocui diploma neacreditata.
        </i>
    </SpoilerCollapser>
    <SpoilerCollapser class="margin-top-1" title="Oferiti oportunitati de angajare dupa curs?">
        Iti oferim cat mai multe posibil in cele 2-3 luni de curs.<br/>
        <strong>Te invatam categoric cum sa intri pe piata in freelance si game dev, si iti dam sfaturi de angajare!</strong>
    </SpoilerCollapser>
    <SpoilerCollapser class="margin-top-1" title="De ce durata cursului poate varia?">
        Durata cursului va depinde de studenti. Putem decide de comun acord daca lectiile sa fie mai scurte sau mai lungi.
    </SpoilerCollapser>
    <SpoilerCollapser class="margin-top-1" title="Se dau teme sau proiecte?">
        Da. Temele nu sunt obligatorii, dar sunt recomandate.
        <br/>
        Pentru toate cursurile vor fi proiecte alese de studenti. Proiectele se predau la finalul cursului.
    </SpoilerCollapser>
    <SpoilerCollapser class="margin-top-1" title="Cum putem plati?">
        Plata se poate face prin transfer bancar, Revolut sau cash, cu factura.
        <br/>
        Se poate plati in rate.
    </SpoilerCollapser>
    <SpoilerCollapser class="margin-top-1" title="Alte intrebari">
        Va astept cu orice intrebare!
        <img style="max-width: 80%; display: block; margin-top: 0.75rem;" src="n.png"/>
    </SpoilerCollapser>
</div>
        