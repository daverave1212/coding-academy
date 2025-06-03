<script>
    import DotsPattern from "../../components-standalone/DotsPattern.svelte";
    import FloaterBox from "../../components-standalone/FloaterBox.svelte";
    import FloatingCircle from "../../components-standalone/FloatingCircle.svelte";

</script>

    
<div class="page margin-top-4 relative">
    <DotsPattern style="top: 30vh; left: calc(-64px);" nRows={12} nCols={6} color={`#DDDDDD`} size={6} gap={20}/>
    <DotsPattern style="top: 0vh; right: calc(-48px);" nRows={12} nCols={6} color={`#DDDDDD`} size={6} gap={20}/>

    <div class="landscape-1300-only">
        <FloatingCircle style="--duration: 8.5s; top: -5vh; right: 0vw; background-color: var(--theme-color-1);"/>
        <FloatingCircle style="--duration: 10s; top: 10vh; right: 18.5vw; background-color: var(--theme-color-2); width: 1.25rem;"/>
        <FloatingCircle style="--duration: 8s; top: calc(35vh); left: 5vw; background-color: var(--theme-color-1); width: 16px;"/>
        <FloatingCircle style="--duration: 9s; top: calc(60vh); left: 11vw; background-color: var(--theme-color-1); width: 0.5rem;"/>
        <FloatingCircle style="--duration: 6s; left: -2.5vw; top: calc(var(--portrait-height) * 0.35); background-color: var(--theme-color-2); width: 1.5rem;"/>
        <FloaterBox
            style='z-index: var(--z-higher); top: -20vh; left: 6.5vw;'
            src="/images/js.png"
            delay={500} rotate={-10} scale={1} x={0} y={0} color="var(--theme-color-2)"
        />
        <FloaterBox
            style='z-index: var(--z-lower); bottom: -10vh; left: 5vw;'
            delay={100} src="/images/cs.png"
            rotate={10} scale={1} x={0} y={0} color="var(--theme-color-1)"
        />
        <FloaterBox
                style='z-index: var(--z-higher); top: 40vh; right: 10vw;'
                delay={200} src="/images/education.png"
                rotate={20} scale={1} x={0} y={0} color="var(--theme-color-2)"
            />
        <FloaterBox
            style='z-index: var(--z-higher); top: -4rem; right: 2vw;'
            src="/images/growth.png"
            delay={400} rotate={25} scale={1} x={0} y={0} color="var(--theme-color-1)"
        />
    </div>
    <div class="portrait-1300-only">
        <FloatingCircle style="--duration: 8.5s; top: -5vh; right: 0vw; background-color: var(--theme-color-1);"/>
        <FloatingCircle style="--duration: 10s; top: 10vh; right: 18.5vw; background-color: var(--theme-color-2); width: 1.25rem;"/>
        <FloatingCircle style="--duration: 8s; top: calc(35vh); left: 5vw; background-color: var(--theme-color-1); width: 16px;"/>
        <FloatingCircle style="--duration: 9s; top: calc(60vh); left: 11vw; background-color: var(--theme-color-1); width: 0.5rem;"/>
        <FloatingCircle style="--duration: 6s; left: -2.5vw; top: calc(var(--portrait-height) * 0.35); background-color: var(--theme-color-2); width: 1.5rem;"/>
        <FloaterBox
            style='z-index: var(--z-higher); top: -20vh; left: 6.5vw;'
            src="/images/js.png"
            delay={500} rotate={-10} scale={1} x={0} y={0} color="var(--theme-color-2)"
        />
        <FloaterBox
            style='z-index: var(--z-lower); bottom: -10vh; left: 5vw;'
            delay={100} src="/images/cs.png"
            rotate={10} scale={1} x={0} y={0} color="var(--theme-color-1)"
        />
        <FloaterBox
                style='z-index: var(--z-higher); top: 40vh; right: 10vw;'
                delay={200} src="/images/education.png"
                rotate={20} scale={1} x={0} y={0} color="var(--theme-color-2)"
            />
        <FloaterBox
            style='z-index: var(--z-higher); top: -4rem; right: 2vw;'
            src="/images/growth.png"
            delay={400} rotate={25} scale={1} x={0} y={0} color="var(--theme-color-1)"
        />
    </div>

    <h1 class="hero-title">Inscriere Cursuri</h1>
    <h2 class="hero-subtitle margin-top-3">
        Pentru inscrieri, contactati-ma direct, prin mesaj sau apel direct.
        <div class="margin-top-2">
            <img src="n.png" style="max-width: 85vw; display: block;"/>
        </div>
    </h2>
</div>

