<script>
  import logo from '$lib/assets/accentLogo.png';
  import Button from '$lib/components/Button.svelte';
  import menuIcon from '$lib/assets/menu.svg';
  import crossIcon from '$lib/assets/cross.svg';
  import { page } from '$app/stores'; 
  import {t, locale} from '$lib/translations/translations';
  import englishFlag from '$lib/assets/english.svg';
  import catalanFlag from '$lib/assets/catala.svg'; 

  let toggle = false;
  function scrollToSection({ target }) {
      toggle = false;

      const el = document.querySelector(target.getAttribute('href'));
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth' });
}
</script>

<nav id="home" class={`flex flex-row justify-between xl:justify-center items-center w-full py-8 ${($page.url.pathname.startsWith("/privacy") || $page.url.pathname.startsWith("/legal") || $page.url.pathname.startsWith("/terms")) ? 'hidden' : ''}`}>

  <a href="/" class="xl:flex pl-8 justify-center items-center xl:flex-1 ">
    <img src={logo} class="h-20 xl:h-[113px] xl:w-[160px]" alt="logo" />
  </a>

  <div class={`items-center justify-center flex-0 ${$page.url.pathname !== '/' ? 'opacity-0' : ''}`}>
    <ul class="hidden xl:flex flex-row space-x-12 px-10 py-2.5 rounded-full font-title font-semibold bg-dark text-terc text-[16px]">
      <li class="hover:text-accent group relative">
        <a href="#about" on:click|preventDefault={scrollToSection}>{$t("main.about")}</a>
        <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
        <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
      </li>
      <li class="hover:text-accent group relative">
        <a href="#schedule" on:click|preventDefault={scrollToSection}>{$t("main.schedule")}</a>
        <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
        <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
      </li>
      <li class="hover:text-accent group relative">
        <a href="#aed" on:click|preventDefault={scrollToSection}>{$t("main.aed")}</a>
        <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
        <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
      </li>
      <li class="hover:text-accent group relative">
        <a href="#contact" on:click|preventDefault={scrollToSection}>{$t("main.contact")}</a>
        <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
        <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
      </li>
      <li class="hover:text-accent group relative">
        <a href="#faqs" on:click|preventDefault={scrollToSection}>{$t("main.faqs")}</a>
        <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
        <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-accent group-hover:w-3/6"></span>
      </li>
    </ul>
  </div>

  <div class="hidden xl:flex mx-5 space-x-2 justify-center items-center flex-1">
    {#if $page.url.pathname === '/generator'}
      <a href="/"><Button outline>{$t("main.home")}</Button></a>
    {:else}
      <a href="/generator"><Button outline>{$t("main.generator")}</Button></a>
    {/if}
    <a href="https://otld03s5z97.typeform.com/to/GAz1tKet" target="_blank"><Button>{$t("main.join")}</Button></a>
    <Button onClick={() => locale.update(current => (current ===  "en" ? "ca" : "en"))}>
        <img src={$locale === 'en' ? catalanFlag : englishFlag} alt="Language Flag" class="w-8 h-8" />
    </Button>
  </div>

  <div class="pr-6 xl:pr-0 space-y-2">
    <Button outline className="xl:hidden mr-3" onClick={() => (toggle = !toggle)}>
      <img src={menuIcon} class="w-8" alt="menu" />
    </Button>
    <Button className="xl:hidden" onClick={() => locale.update(current => (current ===  "en" ? "ca" : "en"))}>
        <img src={$locale === 'en' ? catalanFlag : englishFlag} alt="Language Flag" class="w-[32px] h-auto shrink-1" />
    </Button>
  </div>

  {#if toggle}
    <div class="fixed inset-0 flex items-center justify-center bg-white w-full h-full overflow-hidden z-50">
      <div class="flex flex-col just-center items-center space-y-2 text-center">
        <h2 class="text-[36px] font-title font-bold mb-4 text-accent">{$t("main.menu")}</h2>
        <ul class={`space-y-4 text-[20px] ${$page.url.pathname !== '/' ? 'hidden' : ''}`}>
          <li><a href="#about" on:click|preventDefault={scrollToSection} class="text-primary font-body">{$t("main.about")}</a></li>
          <li><a href="#schedule" on:click|preventDefault={scrollToSection} class="text-primary font-body">{$t("main.schedule")}</a></li>
          <li><a href="#aed" on:click|preventDefault={scrollToSection} class="text-primary font-body">{$t("main.aed")}</a></li>
          <li><a href="#contact" on:click|preventDefault={scrollToSection} class="text-primary font-body">{$t("main.contact")}</a></li>
          <li><a href="#faqs" on:click|preventDefault={scrollToSection} class="font-body">{$t("main.faqs")}</a></li>
        </ul>
        <div class="space-x-4 flex flex-row flex-wrap justify-center items-center pt-4">
          {#if $page.url.pathname === '/generator'}
            <a href="/"><Button onClick={() => (toggle = !toggle)} outline>{$t("main.home")}</Button></a>
          {:else}
            <a href="/generator"><Button onClick={() => (toggle = !toggle)} outline>{$t("main.generator")}</Button></a>
          {/if}
          <a href="https://otld03s5z97.typeform.com/to/GAz1tKet" target="_blank"><Button>{$t("main.join")}</Button></a>
        </div>
        <div class="fixed bottom-0">
          <Button plain outline onClick={() => (toggle = !toggle)} className="w-22 h-22 mb-8 bg-primary text-dark px-4 py-2 rounded">
            <img src={crossIcon} class="w-8 h-8" alt="menu" />
          </Button>
        </div>
      </div>
    </div>
  {/if}
</nav>

<slot />
