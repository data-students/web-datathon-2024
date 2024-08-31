<script>
  import Button from "../Button.svelte";
  import aedLogo from '$lib/assets/aedLogo.png';
  import blackLogo from '$lib/assets/blackLogo.png';
</script>

<div id="aed" class="flex justify-center items-center w-full mt-52">
  <!-- <div class="flex flex-col gap-24 lg:gap-0 lg:flex-row w-full lg:justify-evenly"> -->
  <div class="w-full flex flex-col gap-24 min-[1500px]:flex-row min-[1500px]:justify-center min-[1500px]:space-x-20">

    <section class="flex flex-col min-[1500px]:flex-row items-center text-center min-[1500px]:text-left mb-8 min-[1500px]:mb-0 p-6 sm:p-0 ">
      <img src={aedLogo} alt="About us icon" class="mb-4 min-[1500px]:mb-0 min-[1500px]:mr-6 h-auto w-24" />
      <div class="flex flex-col items-center min-[1500px]:items-start max-w-sm">
        <h2 class="font-title font-bold text-[36px] md:text-[48px] text-dark">About us</h2>
        <p class="text-secondary font-body mb-6 text-justify text-[14px] md:text-[17px] ">
          We are the Data Students' Association! We are organizing the third edition of this datathon, jointly with FME. Among our goals, we aim to promote data science within UPC. If you are studying <a href="https://dse.upc.edu/" target="_blank" class="text-accent underline">Data Science & Engineering</a>, you should definitely join us!
        </p>
        <a href="https://aed.cat/" target="_blank">
          <Button outline>Learn More</Button>
        </a>
      </div>
    </section>

    <section class="flex flex-col min-[1500px]:flex-row items-center text-center min-[1500px]:text-left  p-6 sm:p-0">
      <img src={blackLogo} alt="Join the event icon" class="mb-4 min-[1500px]:mb-0 min-[1500px]:mr-6 h-auto w-24" />
      <div class="flex flex-col items-center min-[1500px]:items-start max-w-sm">
        <h2 class="font-title font-bold text-[36px] md:text-[48px] text-dark">Join the event!</h2>
        <p class="text-secondary font-body mb-6 text-justify text-[14px] md:text-[17px]">
          If you are thinking of partnering/sponsoring us, don’t hesitate to reach us via email. If you have any doubts, feel free to contact us as well! We also accept suggestions or ideas for other events. We’re currently recruiting mentors and volunteers! Join us, it'll be fun!
        </p>
        <div class="flex flex-wrap space-x-1 align-stretch sm:space-x-4 justify-center">
          <a href="https://aed.cat/" target="_blank" class="mb-4">
            <Button outline>Contact us</Button>
          </a>
          <a href="https://aed.cat/" target="_blank">
            <Button outline>Volunteer</Button>
          </a>
        </div>
      </div>
    </section>
  </div>
</div>