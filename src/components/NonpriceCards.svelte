<script>
	import { courses } from './../stores/CoursesConstants.js';
    import PriceCard from "./PriceCard.svelte";

    let props = $props()

</script>


<div class={`flex flex-center ${props.class}`} style={`gap: 2rem; ${props.style}`}>
    {#each courses as course (course.price)}
        <PriceCard {...course} isAnimated={true} price={null} height={`450px`} buttonText="Vezi cursul!"/>
    {/each}
</div>