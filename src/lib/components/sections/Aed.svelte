<script>
  import Button from "../Button.svelte";
  import aedLogo from '$lib/assets/aedLogo.png';
  import blackLogo from '$lib/assets/blackLogo.png';
  import {t} from '$lib/translations/translations';
</script>

<div id="aed" class="flex justify-center items-center w-full mt-52">
  <!-- <div class="flex flex-col gap-24 lg:gap-0 lg:flex-row w-full lg:justify-evenly"> -->
  <div class="w-full flex flex-col gap-24 min-[1400px]:flex-row min-[1400px]:justify-center min-[1400px]:space-x-20">

    <section class="flex flex-col min-[1400px]:flex-row items-center text-center min-[1400px]:text-left mb-8 min-[1400px]:mb-0 p-6 sm:p-0 ">
      <img src={aedLogo} alt="About us icon" class="mb-4 min-[1400px]:mb-0 min-[1400px]:mr-6 h-auto w-24" />
      <div class="flex flex-col items-center min-[1400px]:items-start max-w-sm md:max-w-2xl min-[1400px]:max-w-sm">
        <h2 class="font-title font-bold text-[36px] md:text-[48px] text-dark">{$t("main.aed1.title")}</h2>
        <p class="text-secondary font-body mb-6 text-justify text-[14px] md:text-[17px] ">
          {@html $t("main.aed1.body")}
        </p>
        <a href="https://aed.cat/" target="_blank">
          <Button outline>{$t("main.aed1.cta")}</Button>
        </a>
      </div>
    </section>

    <section class="flex flex-col min-[1400px]:flex-row items-center text-center min-[1400px]:text-left  p-6 sm:p-0">
      <img src={blackLogo} alt="Join the event icon" class="mb-4 min-[1400px]:mb-0 min-[1400px]:mr-6 h-auto w-24" />
      <div class="flex flex-col items-center min-[1400px]:items-start max-w-sm md:max-w-2xl min-[1400px]:max-w-sm">
        <h2 class="font-title font-bold text-[36px] md:text-[48px] text-dark">{$t("main.aed2.title")}</h2>
        <p class="text-secondary font-body mb-6 text-justify text-[14px] md:text-[17px]">
          {$t("main.aed2.body")}
        </p>
        <div class="flex flex-wrap space-x-1 align-stretch sm:space-x-4 justify-center">
          <a href="mailto:sponsors.datathon@aed.cat" target="_blank" class="mb-4">
            <Button outline>{$t("main.aed2.cta")}</Button>
          </a>
        </div>
      </div>
    </section>
  </div>
  
</div>
  
<div class="relative mt-20 md:mt-40 p-6 sm:p-0">
  <!-- <img src={circle} alt="circle" class="absolute left-0 object-cover -z-20 w-auto h-[150%] w-[150%]" /> -->
  <section class="relative flex flex-col min-[1400px]:flex-row items-center text-center min-[1400px]:text-left ">
    <!-- Positioned absolutely within the section to act as a background -->
    
    <!-- Content of the section -->
    <div class="flex flex-col items-center max-w-sm md:max-w-2xl  z-10">
      <h2 class=" u font-title font-bold text-[36px] md:text-[48px] text-accent text-center">{$t("main.aed3.title")}</h2>
      <p class="text-secondary font-body mb-6 mt-2 text-justify text-[14px] md:text-[17px]">
        {$t("main.aed3.body")}
        
      </p>
      <div class="flex flex-wrap space-x-1 sm:space-x-4 justify-center">
        <a href="https://otld03s5z97.typeform.com/to/rvhjbdrf" target="_blank">
          <Button outline>{$t("main.aed3.cta")}</Button>
        </a>
      </div>
    </div>
  </section>
</div>

<style>
  .u {
    text-decoration: #21918C wavy underline;
}
</style>
