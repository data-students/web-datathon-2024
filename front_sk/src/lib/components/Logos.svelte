<script>
    import restb from '$lib/assets/restbLogo.svg';
    import schneider from '$lib/assets/schneiderLogo.svg';
    import upc from '$lib/assets/upcLogo.png';
    import fme from '$lib/assets/fmeLogo.jpeg';
    import aed from '$lib/assets/aedLogo2.png';

</script>


<div class="w-[70%] flex  justify-items-center overflow-hidden opacity-90 ">
<div class="logos w-full inline-flex flex-nowrap">
    <ul class="logos-slide flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
            <img src={restb} alt="restb logo" class="h-16 w-auto" />
        </li>
        <li>
            <img src={schneider} alt="schneider electric logo" class="h-16 w-auto"/>
        </li>
        <li>
            <img src={upc} alt="upc logo" class="h-16 w-auto" />
        </li>
        <li>
            <img src={aed} alt="aed logo" class="h-16 w-auto"/>
        </li>
        <li>
            <img src={fme} alt="fme logo" class="h-16 w-auto"/>
        </li>
        
    </ul>                
    <ul class="logos-slide flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        <li>
            <img src={restb} alt="restb logo" class="h-16 w-auto" />
        </li>
        <li>
            <img src={schneider} alt="schneider electric logo" class="h-16 w-auto"/>
        </li>
        <li>
            <img src={upc} alt="upc logo" class="h-16 w-auto" />
        </li>
        <li>
            <img src={aed} alt="aed logo" class="h-16 w-auto"/>
        </li>
        <li>
            <img src={fme} alt="fme logo" class="h-16 w-auto"/>
        </li>
    </ul>          
</div>
</div>

<style>
    .logos {
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    }
    .logos:before,
    .logos:after {
    position: absolute;
    top: 0;
    width: 50px;
    height: 100%;
    content: "";
    z-index: 2;
    }
    .logos:before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
    }

    .logos:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
    }
    .logos:hover .logos-slide{
        animation-play-state: paused;
    }
</style>