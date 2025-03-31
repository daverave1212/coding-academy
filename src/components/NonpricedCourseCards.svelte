<style>
    .course-cards {
        display: flex;
        justify-content: center;
        gap: 2rem;
    }
    @media (max-width: 1000px) {
        .course-cards {
            flex-direction: column;
            align-items: center;
        }
    }
</style>

<script>
    import PriceCard from "./PriceCard.svelte";

    import { courses } from '../stores/CoursesConstants'

</script>



<div class="course-cards flex flex-center" style="gap: 2rem;">
    {#each courses as course (course.ribbonText)}
        <PriceCard {...course} price={null} height='500px'>
            { course.name }
        </PriceCard>
    {/each}
</div>