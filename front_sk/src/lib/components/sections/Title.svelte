
<script>
    import Button from '$lib/components/Button.svelte';
    import Logos from '$lib/components/Logos.svelte';
    import Stats from '$lib/components/Stats.svelte';
</script>

<div class="flex flex-col justify-center items-center my-40">
    <h1 class="font-title font-bold text-[62px] md:text-[96px] text-dark text-center">Datathon FME</h1>
    <h4 class="font-body text-[20px] md:text-[36px] text-secondary text-center">Join the competition now!</h4>
    <Button className="mt-8">Register</Button>
</div>
<Logos />
<Stats/>

