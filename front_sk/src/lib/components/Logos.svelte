<script>
    import restb from '$lib/assets/sponsors/restbLogo.svg';
    import schneider from '$lib/assets/sponsors/schneiderLogo.svg';
    import fme from '$lib/assets/fmeLogo.png';
    import aed from '$lib/assets/aedLogo2.png';
</script>

<div class="space-y-20">
    <div class="w-full ">
        <h6 class="text-secondary/40 font-title text-center font-bold">SPONSORED BY</h6>
        <ul class="flex flex-wrap items-center justify-center [&_li]:mx-8 [&_li]:my-4 ">
            <li>
                <a href="https://restb.ai/" target="_blank" aria-label="restb logo">
                    <img src={restb} alt="restb logo" class="h-16 w-auto sm:h-12 md:h-14 lg:h-16" />
                </a>
            </li>
            <li>
                <a href="https://www.se.com/es/es/" target="_blank" aria-label="schneider electric logo">
                    <img src={schneider} alt="schneider electric logo" class="h-16 w-auto sm:h-12 md:h-14 lg:h-16"/>
                </a>
            </li>
        </ul>                
    </div>


    <div class="w-full opacity-80">
        <h6 class="text-secondary/40 font-title text-center font-bold">ORGANIZED BY</h6>
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