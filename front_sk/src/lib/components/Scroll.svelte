<script>
    import { onMount, onDestroy } from 'svelte';

    let showButton = false;

    function handleScroll() {
        showButton = window.scrollY > 100; // Show button if scrolled more than 100px
    }

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>

<button 
    on:click={scrollToTop}
    class="fixed center bottom-5 md:top-8 md:right-8 w-12 h-12 bg-accent hover:bg-accent/70 text-white rounded-full flex items-center justify-center shadow-lg transition-opacity duration-500"
    class:opacity-0={!showButton}
    class:opacity-100={showButton}
>
    <div class="w-full p-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path fill="#ffffff" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
        </svg>
    </div>
</button>
