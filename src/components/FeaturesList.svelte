
<script>

    let props = $props()

    

</script>

{#each props.features as feature (feature)}
    <p class="feature margin-top-3q"><img src={`/images/${props.featureTickName}.png`}/>{feature}</p>
{/each}