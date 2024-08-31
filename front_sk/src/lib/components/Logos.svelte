<script>
    import restb from '$lib/assets/restbLogo.svg';
    import schneider from '$lib/assets/schneiderLogo.svg';
    import upc from '$lib/assets/upcLogo.png';
    import fme from '$lib/assets/fmeLogo.jpeg';
    import aed from '$lib/assets/aedLogo2.png';
</script>

<div class="w-full opacity-80">
    <ul class="flex flex-wrap items-center justify-center [&_li]:mx-8 [&_li]:my-4 ">
        <li>
            <a href="https://restb.ai/" target="_blank" aria-label="restb logo">
                <img src={restb} alt="restb logo" class="h-16 w-auto sm:h-12 md:h-14 lg:h-16" />
            </a>
        </li>
        <li>
            <a href="https://www.se.com/" target="_blank" aria-label="schneider electric logo">
                <img src={schneider} alt="schneider electric logo" class="h-16 w-auto sm:h-12 md:h-14 lg:h-16"/>
            </a>
        </li>
        <li>
            <a href="https://www.upc.edu/" target="_blank" aria-label="upc logo">
                <img src={upc} alt="upc logo" class="h-16 w-auto object-contain sm:h-12 md:h-14 lg:h-16" />
            </a>
        </li>
        <li>
            <a href="https://aed.cat/" target="_blank" aria-label="aed logo">
                <img src={aed} alt="aed logo" class="h-16 w-auto sm:h-12 md:h-14 lg:h-16"/>
            </a>
        </li>
        <li>
            <a href="https://fme.upc.edu/es" target="_blank" aria-label="fme logo">
                <img src={fme} alt="fme logo" class="h-16 object-contain sm:h-12 md:h-14 lg:h-16"/>
            </a>
        </li>
    </ul>                
</div>
