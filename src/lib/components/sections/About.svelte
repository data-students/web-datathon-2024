<script>
  import Card from "$lib/components/Card.svelte";
  import Button from "$lib/components/Button.svelte";

  import location from "$lib/assets/info-icons/location.svg";
  import time from "$lib/assets/info-icons/time.svg";
  import user from "$lib/assets/info-icons/user.svg";
  import { t, locale, loadTranslations } from '$lib/translations/translations';

</script>
<div id="about" class="bg-dark w-full flex flex-col justify-center items-center py-52 space-y-44 ">
     <Card className="w-[90%] xl:w-[70%]  bg-terc flex flex-col p-12">
        <h2 class="text-dark font-title md:text-[48px] text-[35px]  font-bold w-full ">{$t("main.what.title")}</h2> 
        <div class=" w-full flex flex-row space-x-6 pt-2">
            <p class="w-full lg:w-[80%] font-body text-black/75 text-justify text-[14px] md:text-[17px]">{$t("main.what.body")} </p>
          <div class="hidden lg:flex items-center justify-center w-1/4">
          <Button className="-mt-4" disabled >{$t("main.what.cta")}</Button>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row  pt-10 w-full lg:space-x-12 space-y-12 lg:space-y-0">
          <div class="flex flex-col items-start space-y-2 lg:w-1/3">
            <img src={location} class="h-16 w-auto" alt="location icon"/>
            <h3 class="font-title font-bold text-[28px] md:text-[32px] text-dark">{$t("main.what.section1.title")}</h3>
            <p class="font-body text-black/75 text-justify text-[14px] md:text-[17px]">{@html $t("main.what.section1.body")}
            </p>
          </div>

           <div class="flex flex-col flex-wrap items-start space-y-2 lg:w-1/3">
            <img src={time} class="h-16 w-auto" alt="location icon"/>
            <h3 class="font-title font-bold text-[28px] md:text-[32px]  text-dark">{$t("main.what.section2.title")}</h3>
            <p class="font-body text-black/75 text-justify  text-[14px] md:text-[17px]"> {@html $t("main.what.section2.body")}
            </p>
          </div>

           <div class="flex flex-col items-start space-y-2 lg:w-1/3">
            <img src={user} class="h-16 w-auto" alt="location icon"/>
            <h3 class="font-title font-bold text-[28px] md:text-[32px] text-dark">{$t("main.what.section3.title")}</h3>
            <p class="font-body text-black/75 text-justify text-[14px] md:text-[17px]">{$t("main.what.section3.body")}
            </p>
          </div>

        </div>
        
    </Card>

    <div class="w-full h-full flex items-center justify-center flex-col">
      <h2 class="font-title font-bold md:text-[48px] text-[36px]  text-terc text-center px-4">{$t("main.summary")}</h2>
      <iframe class="w-[70%] h-[30vh] sm:h-[50vh] lg:h-[70vh] pt-10" src="https://www.youtube.com/embed/5PUtT34NhrI?si=vmb4dj6mWIEaoNfW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</div>


<div class="custom-shape-divider-top-1724412405 -mt-2 ">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>

<style>

.custom-shape-divider-top-1724412405 {
    position: relative;
    top: 0;
    left: 0;
    width: 101%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1724412405 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 79px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1724412405 .shape-fill {
    fill: #27272A;
}

</style>