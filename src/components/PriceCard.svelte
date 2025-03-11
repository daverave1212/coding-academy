
<style>
    .price-card {
        width: 300px;
        height: 450px;
        position: relative;
        background-color: white;
        border-radius: 2rem;
    }
    .price-card .content {
        padding: 3rem;
    }
    .price .left {
        font-family: HeroMuli !important;
        font-size: 5rem;
    }

    .currency {
        font-size: 1rem;
        margin-top: -0.75rem;
        color: gray;
        font-family: RoundedNunito !important;
        font-weight: 600;
    }
</style>

<script>
    import Ribbon from "../components-standalone/Ribbon.svelte";


</script>

<div class="price-card shadowed">
    <Ribbon name="RibbonPurple" style='top: 2rem;'>Game Dev</Ribbon>
    <div class="content">
        <div class="price flex-center margin-top-4">
            <div class="flex column">
                <div class="left text-align-left">765</div>
                <div class="currency">RON</div>
            </div>

            <!-- <div class="currency" style="width: 3rem;">
                <div style="left: -1.5rem;">ron</div>
            </div> -->
            <!-- 
            <div class="right">
                <div class="remainder"></div>
                <div class="per">&nbsp;RON</div> -->
            <!-- </div> -->
        </div>
    </div>
</div>