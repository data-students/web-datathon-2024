<script>
    import Header from '$lib/components/sections/Header.svelte';
    import Title from '$lib/components/sections/Title.svelte';
    import Footer from '$lib/components/sections/Footer.svelte';
    import Schedule from '$lib/components/sections/Schedule.svelte';
    import Aed from '$lib/components/sections/Aed.svelte';
    import About from '$lib/components/sections/About.svelte'
    import Faqs from '$lib/components/sections/Faqs.svelte';
</script>

<div class="flex flex-col items-center ">
    <Header />
    <Title />
    <About/>
    <Schedule />
    <Aed />
    <Faqs />
    <Footer />
</div>
