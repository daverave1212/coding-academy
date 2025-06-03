
<style>

    .courses-box {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }
    @media (max-width: 1080px) {
        .courses-box {
            flex-direction: column;
        }
    }

</style>


<script>
    import PriceCard from "./PriceCard.svelte";

    import { courses } from '../stores/CoursesConstants'

</script>


<div class="courses-box">
    {#each courses as course (course.ribbonText)}
        <PriceCard {...course} height="665px">
            { course.name }
        </PriceCard>
    {/each}
</div>