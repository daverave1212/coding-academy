<style>

</style>

<script>
    import SpoilerCollapser from "../components-standalone/SpoilerCollapser.svelte";

    let props = $props()

</script>

<div class={props.class} style={props.style}>
    <h1 class="center-text">Intrebari si Raspunsuri</h1>        
    
    <SpoilerCollapser class="margin-top-2" title="Oferiti oportunitati de angajare dupa curs?">
        Adevarul este ca pentru angajare criteriile sunt mult mai mari decat poate oferi orice curs, de la orice academie.<br/>
        Trebuie (de obicei) experienta specializata pe o tehnologie anume, mai multe proiecte facute si teorie (noi suntem practici).<br/>
        Se poate, totusi? Da, absolut! Piata e mai accesibila decat se spune!<br/><br/>
        <strong>In schimb, te invatam categoric cum sa intri pe piata de freelance.</strong>

    </SpoilerCollapser>
    <SpoilerCollapser class="margin-top-2" title="Trebuie sa stiu ceva inainte de curs?">
        Nu! N-ai nevoie de nicio cunostinta de programare sau IT. Te invatam noi tot!
    </SpoilerCollapser>
    <SpoilerCollapser class="margin-top-1" title="Am nevoie de laptop?">
        Da, va trebui sa vii cu laptopul personal.
    </SpoilerCollapser>
    <SpoilerCollapser class="margin-top-1" title="Unde se tine cursul live?">
        Veti primi locatia exacta odata cu inscrierea.
    </SpoilerCollapser>
    <SpoilerCollapser class="margin-top-1" title="In ce zile/ore sunt cursurile?">
        Zilele si orele le vom stabili de comun acord cu grupa.
    </SpoilerCollapser>
    <SpoilerCollapser class="margin-top-1" title="De ce durata cursului poate varia?">
        Durata cursului va depinde de studenti. Daca decidem de comun acord ca lectiile sa fie mai lungi, atunci vor fi mai putine lectii.
        Conteaza, de asemenea, si vitea cu care ne miscam. Daca totul merge rapid, vor fi mai putine lectii sau lectiile vor fi mai scurte.
    </SpoilerCollapser>
    <SpoilerCollapser class="margin-top-1" title="Se dau teme sau proiecte?">
        In timpul cursului la partea de practica, studentii vor lucra ajutati la tema lectiei. Ce nu terminam la lectie va ramane tema pentru acasa si este optionala.
        <br/><br/>
        Pentru toate cursurile vor fi proiecte alese de studenti pe care trebuie sa le faca. Proiectele se vor preda la finalul cursului.
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
    <SpoilerCollapser class="margin-top-1" title="Cum putem plati?">
        Plata se poate face prin transfer bancar, Revolut sau cash, cu factura.
        <br/>
        Se poate plati in rate.
    </SpoilerCollapser>
    <SpoilerCollapser class="margin-top-1" title="Alte intrebari">
        TODO: Show contact
    </SpoilerCollapser>
</div>
        