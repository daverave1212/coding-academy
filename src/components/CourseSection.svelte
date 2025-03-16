<style>

    .course-section {
        --color: black;
    }

    .by {
        display: flex;
        height: 1.75rem;
    }
    .by img {
        height: 100%;
        border-radius: 100%;
        margin-right: 0.5rem;
    }
    .by * {
        font-size: 1.25rem;
        font-weight: 600;
    }

    video {
        width: 100%;
        border-radius: 0.5rem;
    }

    .overtext {
        font-family: RoundedNunito;
        font-weight: 400;
        font-size: 1rem;
        color: gray;
        margin-top: 2rem;
    }
    .undertext {
        font-family: RoundedNunito;
        font-weight: 700;
        font-size: 1.25rem;
    }
    b {
        color: var(--color);
    }

</style>

<script>
    import BigButton from "./BigButton.svelte";
    import MediumButton from "./MediumButton.svelte";


    let props = $props()

    let {
        date, length, perWeek,
        color, anticolor
    } = $derived(props)

    let {
        title,
        content,
        subtext
    } = $derived(props)


</script>

<div class="course-section column" style={`--color: ${color};`}>
    <h2 style={`color: ${color}`}>
        {@render title()}
    </h2>

    <div class="by margin-top-2">
        <img src="/images/app/Me.png"/>
        <p><span style="color: gray;">by</span> David Irimia</p>
    </div>

    <div>
        <video class="margin-top-1 shadowed" controls>
            <source src="/images/app/test.mp4"/>
        </video>
    </div>

    <div class="columns">
        <div>
            <h4 class="overtext">Dificultate</h4>
            <p class="undertext">Începător</p>

            
            <h4 class="overtext">Durata</h4>
            <p class="undertext">{length}</p>
        </div>
        <div>
            <h4 class="overtext">Data de început</h4>
            <p class="undertext">{date}</p>

            <h4 class="overtext">Lecții pe săptămână</h4>
            <p class="undertext">{perWeek}</p>
        </div>
    </div>
    <div>
        <MediumButton class="margin-top-2" color={color} animationColor={anticolor} onclick={() => {}}>Inscrie-te!</MediumButton>
    </div>

    <h2 class="margin-top-4">Despre curs</h2>
    <div class="margin-top-1">
        {@render content()}
    </div>

    <MediumButton class="margin-top-3" color={color} animationColor={anticolor} onclick={() => {}}>Inscrie-te!</MediumButton>

    <div class="margin-top-4">
        {@render subtext?.()}
    </div>
</div>