<script>
    import Button from '$lib/components/Button.svelte';
    import logo from '$lib/assets/whiteLogo.png';
    import linkedin from '$lib/assets/social-media/linkedin.svg';
    import x from '$lib/assets/social-media/x.svg';
    import youtube from '$lib/assets/social-media/youtube.svg';
    import instagram from '$lib/assets/social-media/instagram.svg';
    import tiktok from '$lib/assets/social-media/tiktok.svg';
</script>

<footer class="bg-dark w-full h-70 flex flex-col justify-center items-start md:items-center p-10">
    <a href="https://aed.cat/" target="_blank"><img src={logo} class=" h-[70px] w-[90px] md:h-[81px] md:w-[111px]" alt="logo" /></a>
    <ul class="flex flex-row space-x-5 pt-10">
        <li class="hover:-translate-y-1 transform transition duration-200 ease-in-out"><a href="https://www.linkedin.com/company/data-students/" target="_blank" ><img src={linkedin} alt="instagram logo"/></a></li>
        <li class="hover:-translate-y-1  transform transition duration-200 ease-in-out"><a href="https://x.com/datastudents" target="_blank"><img src={x} alt="x logo"/></a></li>
        <li class="hover:-translate-y-1 transform transition duration-200 ease-in-out"><a href="https://www.youtube.com/@datastudents" target="_blank"><img src={youtube} alt="youtube logo"/></a></li>
        <li class="hover:-translate-y-1  transform transition duration-200 ease-in-out"><a href="https://www.instagram.com/datastudents" target="_blank"><img src={instagram} alt="instagram logo"/></a></li>
        <li class="hover:-translate-y-1  transform transition duration-200 ease-in-out"><a href="https://www.tiktok.com/@datastudents" target="_blank"><img src={tiktok} alt="tiktok logo"/></a></li>
    </ul>
    <ul class="text-terc font-body text-[13px] sm:text-[16px] flex flex-row space-x-2 pt-6 text-center">
        <li>© 2024</li>
        <li >·</li>
        <li><a href="/legal" target="_blank" class="underline hover:text-white">Legal notice</a></li>
        <li>·</li>
        <li><a href="/terms" target="_blank" class="underline hover:text-white">Terms & conditions</a></li>
        <li>·</li>
        <li><a href="/privacy" target="_blank" class="underline hover:text-white">Privacy policy</a></li>
    </ul>

</footer>