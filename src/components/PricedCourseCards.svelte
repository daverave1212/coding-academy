<script>
    import PriceCard from "./PriceCard.svelte";

    import { courses } from '../stores/CoursesConstants'

</script>



<div class="flex flex-center" style="gap: 2rem;">
    {#each courses as course (course.ribbonText)}
        <PriceCard {...course} height="665px">
            { course.name }
        </PriceCard>
    {/each}
</div>