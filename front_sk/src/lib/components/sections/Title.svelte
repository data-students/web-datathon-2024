
<script>
    import Button from '$lib/components/Button.svelte';
    import Logos from '$lib/components/Logos.svelte';
    import Stats from '$lib/components/Stats.svelte';
</script>

<div class="h-full">
    <iframe loading="lazy" class=" absolute inset-x-0 -top-[18%] sm:-top-[20%] md:-top-[10%] lg:top-1 w-full  h-[158rem] sm:h-[143rem] md:h-[147rem] lg:h-[120rem] -z-10 border-0 opacity-[40%] overfow-hidden" title="bg" src='https://my.spline.design/vaporwavebackgroundcopy-d951eda28d2ab9cb3bdc517f94e2bdd4/' frameborder='0'></iframe>

    <div class="flex flex-col justify-center items-center my-[14vh]">
        <h1 class="font-title font-bold text-[62px] md:text-[96px] text-dark text-center">Datathon FME</h1>
        <h4 class="font-body text-[20px] md:text-[36px] text-secondary text-center">Barcelona, November 16 - 17</h4>
        <Button className="mt-8">Register</Button>
    </div>
    <Logos />
</div>
    <Stats/>

<div class=" custom-shape-divider-bottom-1723973619 pb-0">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill fill-dark"></path>
    </svg>
</div>

<style>

.custom-shape-divider-bottom-1723973619 {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1723973619 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 164px;
    transform: rotateY(180deg);
}




</style>