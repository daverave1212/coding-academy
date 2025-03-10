<style>

    :root {
        --portrait-width: 300px;
        --portrait-height: 450px
    }

    .portrait-card {
        width: var(--portrait-width);
        height: var(--portrait-height);

        padding: 0px;
        gap: 0px;

        display: flex;
        flex-direction: column;
    }

    .img-box {
        width: 100%;
        height: 80%;
        background-color: blue;
        overflow: hidden;
        border-radius: 0.75rem 0.75rem 0 0;
    }
    .img-box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .bottom-box {
        width: 100%;
        height: 31%;
        margin-top: -1%;
        background-color: #111111;
        padding: 1.5rem;
        position: relative;
        border-radius: 0 0 0.75rem 0.75rem;
    }

</style>

<script>

    let { src, children, style } = $props()

</script>

<div class="portrait-card rounded shadowed snappy-object" style={style}>
    <div class="img-box">
        <img src={src}/>
    </div>
    <div class="bottom-box">
        {@render children?.()}
    </div>
</div>