<script>
    import Header from '$lib/components/sections/Header.svelte';
    import Title from '$lib/components/sections/Title.svelte';
    import Footer from '$lib/components/sections/Footer.svelte';
    import Schedule from '$lib/components/sections/Schedule.svelte';
    import Aed from '$lib/components/sections/AED.svelte';
    import About from '$lib/components/sections/About.svelte'
</script>

<div class="flex flex-col items-center ">
    <Header />
    <Title />
    <About/>
    <div class="h-[200px]"></div>
    <Schedule />
    <div class="h-[200px]"></div>
    <Aed />
    <div class="h-[200px]"></div>
    <Footer />
</div>
