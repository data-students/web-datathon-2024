
<script lang="ts">
    import Button from '$lib/components/Button.svelte';
    import Logos from '$lib/components/Logos.svelte';
    import Stats from '$lib/components/Stats.svelte';
    import mango from '$lib/assets/sponsors/mangoLogo.svg';
    import { t, locale, loadTranslations } from '$lib/translations/translations';
</script>

<div class="h-full">
    <iframe loading="lazy" class=" absolute inset-x-0 -top-[17%] sm:-top-[17%] md:-top-[10%] lg:top-1 w-full  h-[182rem] sm:h-[160rem] md:h-[159rem] lg:h-[140rem] -z-10 border-0 opacity-[50%] overfow-hidden" title="bg" src='https://my.spline.design/vaporwavebackgroundcopy-d951eda28d2ab9cb3bdc517f94e2bdd4/' frameborder='0'></iframe>

    <div class="flex flex-col justify-center items-center my-[14vh]">
        <h1 class="font-title font-bold text-[62px] md:text-[96px] text-dark text-center">Datathon FME</h1>
        <h4 class="font-body text-[20px] md:text-[36px] px-4 text-secondary text-center">{$t("main.subtitle")}</h4>
        <p class=" w-full mb-8 mt-3 px-2 text-right font-title font-bold text-black text-lg flex flex-row items-center justify-center xs:justify-center">Powered by <span><img src={mango} alt="mango logo" class="pl-2 w-auto h-4"/></span></p>
        <Button disabled >{$t("main.register")}</Button>
    </div>
    <Logos />
</div>
    <Stats/>

<div class=" custom-shape-divider-bottom-1723973619 pb-0 -mb-2">
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