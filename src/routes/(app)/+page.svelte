<script>
    import Title from '$lib/components/sections/Title.svelte';
    import Footer from '$lib/components/sections/Footer.svelte';
    import Schedule from '$lib/components/sections/Schedule.svelte';
    import Aed from '$lib/components/sections/Aed.svelte';
    import About from '$lib/components/sections/About.svelte'
    import Faqs from '$lib/components/sections/Faqs.svelte';
    import Scroll from '$lib/components/Scroll.svelte';
    import Contact from '$lib/components/sections/Contact.svelte';
</script>

<div class="flex flex-col items-center max-w-screen overflow-hidden ">
    <Title />
    <About/>
    <Schedule />
    <Aed />
    <Contact />
    <Faqs />
    <Footer />
    <Scroll />
</div>
