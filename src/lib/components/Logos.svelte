<script>
    import restb from '$lib/assets/sponsors/restbLogo.svg';
    import schneider from '$lib/assets/sponsors/schneiderLogo.svg';
    import fme from '$lib/assets/fmeLogo.png';
    import aed from '$lib/assets/aedLogo2.png';
    import novartis from '$lib/assets/sponsors/novartisLogo.svg';
    import qualcomm from '$lib/assets/sponsors/qualcommLogo.svg';
    import mango from '$lib/assets/sponsors/mangoLogo.svg';
    import t2c from '$lib/assets/sponsors/t2cLogo.svg';
    import salut from '$lib/assets/sponsors/salutLogo.png';
    import dorahacks from '$lib/assets/sponsors/dorahacksLogo.png';
    import { t } from '$lib/translations/translations';
</script>

<div class="py-0">
    <div class=" ">
        <h6 class="text-dark/80 font-title text-center font-bold">{$t("main.sponsored")}</h6>
        <ul class="flex flex-wrap items-center justify-center [&_li]:mx-8 [&_li]:my-4 ">
            <li class="">
                <a href="https://shop.mango.com" target="_blank" aria-label="mango logo">
                    <img src={mango} alt="mango logo" class=" w-auto h-10 md:h-11 lg:h-[3rem]"/>
                </a>
            </li>
            <li class="lg:pl-6 pl-0">
                <a href="https://restb.ai/" target="_blank" aria-label="restb logo">
                    <img src={restb} alt="restb logo" class="w-auto h-10 md:h-14 lg:h-14 " />
                </a>
            </li>
        </ul>                
       
        <ul class="flex flex-wrap items-center justify-center [&_li]:mx-8 [&_li]:my-4 my-4">
              <li class="lg:pr-10 pr-0">
                <a href="https://www.t2client.com/" target="_blank" aria-label="t2c logo">
                    <img src={t2c} alt="t2c logo" class=" w-auto h-6 md:h-8 lg:h-10 opacity-[80%]"/>
                </a>
            </li>
            <li>
                <a href="https://www.se.com" target="_blank" aria-label="schneider electric logo">
                    <img src={schneider} alt="schneider electric logo" class=" w-auto h-6 md:h-8 lg:h-11 opacity-[80%]"/>
                </a>
            </li>
            <li>
                <a href="https://www.qualcomm.com/" target="_blank" aria-label="qualcomm logo">
                    <img src={qualcomm} alt="qualcomm logo" class=" w-auto h-6 md:h-8 lg:h-8 opacity-[80%]"/>
                </a>
            </li>
        </ul>
        <ul class="flex flex-wrap items-center justify-center [&_li]:mx-8 [&_li]:my-4 ">
            <li class="lg:pl-10 pl-0">
                <a href="https://www.novartis.com/" target="_blank" aria-label="novartis logo">
                    <img src={novartis} alt="novartis logo" class="w-auto h-6 md:h-8 lg:h-10 opacity-[80%]" />
                </a>
            </li>
            <li class="">
                <a href="https://catsalut.gencat.cat/ca/inici/" target="_blank" aria-label="salut logo">
                    <img src={salut} alt="salut logo" class=" w-auto h-6 md:h-8 lg:h-10 opacity-[80%]"/>
                </a>
            </li>
        </ul> 
        <ul class="flex flex-wrap items-center justify-center [&_li]:mx-8 [&_li]:my-4 my-4">
              <li class="">
                <a href="https://dorahacks.io/" target="_blank" aria-label="dorahacks logo">
                    <img src={dorahacks} alt="dorahacks logo" class=" w-auto h-20 opacity-[80%]"/>
                </a>
            </li>
        </ul>
    </div>

    <div class="w-full pt-24">
        <h6 class="text-dark/90 font-title text-center font-bold">{$t("main.organized")}</h6>
        <ul class="flex flex-wrap items-center justify-center [&_li]:mx-8 [&_li]:my-4 ">
            <li>
                <a href="https://aed.cat/" target="_blank" aria-label="aed logo">
                    <img src={aed} alt="aed logo" class="h-16 w-auto sm:h-12 md:h-14 lg:h-16"/>
                </a>
            </li>
            <li>
                <a href="https://fme.upc.edu/ca" target="_blank" aria-label="fme logo">
                    <img src={fme} alt="fme logo" class="h-16 object-contain sm:h-12 md:h-14 lg:h-16"/>
                </a>
            </li>
        </ul>                
    </div>

</div>