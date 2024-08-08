<script>
    import Button from '$lib/components/Button.svelte';
import Header from '$lib/components/sections/Header.svelte';
</script>

<div class="flex flex-col items-center h-screen">
    <Header />

    <div class="h-[150px]"></div>
    <h1 class="font-title font-bold text-[96px] text-dark text-center">Datathon FME</h1>
    <h2 class="font-body text-[36px] text-secondary text-center">Join the competition now!</h2>
    <Button className="mt-8">Register</Button>
</div>