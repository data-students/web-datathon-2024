<script>
  import logo from '$lib/assets/accentLogo.png';
  import Button from '$lib/components/Button.svelte';
  import menuIcon from '$lib/assets/menu.svg';
  import crossIcon from '$lib/assets/cross.svg';
  import { page } from '$app/stores'; 

  let toggle = false;
  function scrollToSection({ target }) {
      toggle = false;

      const el = document.querySelector(target.getAttribute('href'));
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth' });
}
</script>

<nav id="home" class="flex flex-row justify-between lg:justify-center items-center w-full py-10">
    <a href="/" class=" flex justify-center items-center lg:basis-1/4 pl-9 lg:pl-0"><img src={logo} class="h-20 lg:h-[113px] lg:w-[160px] " alt="logo" /></a>

     <div class={`items-center justify-center ${$page.url.pathname !== '/' ? 'opacity-0' : ''}`}>
        <ul class=" hidden lg:flex flex-row space-x-12 px-10 py-2.5 rounded-full font-title font-semibold  bg-dark text-terc text-[16px]">
            
            <li class="hover:text-accent group relative ">
                <a href="#about" on:click|preventDefault={scrollToSection} >About</a>
                <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
                <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
            </li>
            <li class="hover:text-accent group relative ">
                <a href="#schedule" on:click|preventDefault={scrollToSection}>Schedule</a>
                <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
                <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
            </li>
            <li class="hover:text-accent group relative ">
                <a href="#aed" on:click|preventDefault={scrollToSection}>AED</a>
                <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
                <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
            </li>
            <li class="hover:text-accent group relative ">
                <a href="#contact" on:click|preventDefault={scrollToSection} >Contact</a>
                <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
                <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
            </li>
            <li class="hover:text-accent group relative ">
                <a href="#faqs" on:click|preventDefault={scrollToSection}>FAQs</a>
                <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
                <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
            </li>
        </ul>
    </div>

    <div class=" hidden lg:flex mx-5 space-x-2 justify-center basis-1/4 items-center">
        {#if $page.url.pathname === '/generator'}
            <a href="/"><Button outline>Home</Button></a>
        {:else}
            <a href="/generator"><Button outline>Generator</Button></a>
        {/if}
        <a href="https://otld03s5z97.typeform.com/to/GAz1tKet" target="_blank"><Button >Join</Button></a>
    </div>
    
    <div class="pr-9 lg:pr-0">
        <Button outline className="lg:hidden" onClick={() => (toggle = !toggle)} >
            <img src={menuIcon} class="w-8" alt="menu" />
        </Button>
    </div>

    {#if toggle}
    <div  class="fixed inset-0 flex items-center justify-center bg-white w-full h-full overflow-hidden z-50">
        <div class=" flex flex-col just-center items-center space-y-2  text-center ">
            <h2 class="text-[36px] font-title font-bold mb-4 text-accent">Menu</h2>
            <ul class={` space-y-4 text-[20px] ${$page.url.pathname !== '/' ? 'hidden' : ''} `}>
                <li><a href="#about" on:click|preventDefault={scrollToSection} class=" text-primary font-body">About</a></li>
                <li><a href="#schedule" on:click|preventDefault={scrollToSection}  class=" text-primary font-body">Schedule</a></li>
                <li><a href="#aed" on:click|preventDefault={scrollToSection}  class=" text-primary font-body">AED</a></li>
                <li><a href="#contact" on:click|preventDefault={scrollToSection} class=" text-primary font-body">Contact</a></li>
                <li><a href="#faqs" on:click|preventDefault={scrollToSection}  class="font-body">FAQs</a></li>
            </ul>
            <div class="space-x-4 flex flex-row flex-wrap justify-center items-center pt-4">
                {#if $page.url.pathname === '/generator'}
                    <a href="/"><Button onClick={() => (toggle = !toggle)} outline>Home</Button></a>
                {:else}
                    <a href="/generator"><Button onClick={() => (toggle = !toggle)} outline>Generator</Button></a>
                {/if}
                <a href="https://otld03s5z97.typeform.com/to/GAz1tKet" target="_blank"><Button >Join</Button></a>
            </div>
            <div class="fixed bottom-0">
                <Button  plain outline onClick={() => (toggle = !toggle)} className="w-22 h-22  mb-8 bg-primary text-dark px-4 py-2 rounded">
                    <img src={crossIcon} class="w-8 h-8" alt="menu" />
                </Button>
            </div>
        </div>
    </div>
    {/if}
</nav>





<slot />