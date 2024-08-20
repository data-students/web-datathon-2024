
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

<div class="custom-shape-divider-bottom-1723973619 pb-40">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill fill-dark"></path>
    </svg>
</div>

<style>

.custom-shape-divider-bottom-1723973619 {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1723973619 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 164px;
    transform: rotateY(180deg);
}




</style>