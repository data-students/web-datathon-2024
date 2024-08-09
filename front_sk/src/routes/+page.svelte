<script>
    import Button from '$lib/components/Button.svelte';
import Header from '$lib/components/sections/Header.svelte';
</script>

<div class="flex flex-col items-center h-screen">
    <Header />

    <!-- Title -->
    <div class="flex flex-col justify-center items-center h-[60vh]">
        <h1 class="font-title font-bold  text-[62px] md:text-[96px]  text-dark text-center">Datathon FME</h1>
        <h2 class="font-body text-[20px] md:text-[36px] text-secondary text-center">Join the competition now!</h2>
        <Button className="mt-8">Register</Button>
    </div>


</div>