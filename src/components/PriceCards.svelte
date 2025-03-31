<script>
	import { courses } from './../stores/CoursesConstants.js';
    import PriceCard from "./PriceCard.svelte";

    let props = $props()

</script>

<div class={`flex flex-center ${props.class}`} style={`gap: 2rem; ${props.style}`}>
    {#each courses as course (course.price)}
        <PriceCard {...course} isAnimated={false}/>
    {/each}
</div>
<!-- 
<!-- <PriceCard
    ribbonName="Yellow" ribbonText="App Dev"
    price={850} subtext="RON"
    subtitle="Creeaza aplicatii adevarate la cel mai practic curs de programare apps pentru incepatori, freelanceri si antreprenori."

    featureTickName="CheckYellow" features={[
        'Invata bazele JavaScript, HTML si CSS',
        'Apps pe Web/Desktop/Mobile',
        'UI/UX design',
        '9-11 lectii, cu diploma la final',
        'Zona Unirii (sau online*)'
    ]}

    discountText="Aplicati reduceri:" discountCheckColor="var(--theme-color-2)"
    
    buttonText='Inscrie-te seiunea Iulie!'
    buttonColor='var(--theme-color-2)' buttonAnimationColor='var(--theme-color-1)'
>
    Zero to Hero: Code Full Real-World Apps
</PriceCard> -->

<!-- <PriceCard
    ribbonName="Purple" ribbonText="Game Dev"
    price={1350} subtext="RON"
    subtitle="Code it, design it, release it: cel mai practic curs de dezvoltare de jocuri pentru incepatori."

    featureTickName="CheckPurple" features={[
        'Invata bazele C# si Unity 2D si 3D',
        'Game development si game design',
        'Game marketing + release pe Steam',
        '14-16 lectii',
        'Zona Unirii (sau online*)'
    ]}

    discountText="Aplicati reduceri:" discountCheckColor="var(--theme-color-1)"

    buttonText='Inscrie-te seiunea Iulie!'
    buttonColor='var(--theme-color-1)' buttonAnimationColor='var(--theme-color-2)'
>
    Practical Game Making: Code It, Design It, Release It
</PriceCard> -->