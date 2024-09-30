<script>
  import Card from "$lib/components/Card.svelte";
  import Button from "$lib/components/Button.svelte";

  import location from "$lib/assets/info-icons/location.svg";
  import time from "$lib/assets/info-icons/time.svg";
  import user from "$lib/assets/info-icons/user.svg";

</script>
<div id="about" class="bg-dark w-full flex flex-col justify-center items-center py-52 space-y-44 ">
     <Card className="w-[90%] xl:w-[70%]  bg-terc flex flex-col p-12">
        <h2 class="text-dark font-title md:text-[48px] text-[35px]  font-bold w-full ">What is Datathon FME?</h2> 
        <div class=" w-full flex flex-row space-x-6 pt-2">
            <p class="w-full lg:w-[80%] font-body text-black/75 text-justify  text-[14px] md:text-[17px]"> The datathon is a weekend-long competition where you are challenged to solve real-world problems using machine learning, AI and data science techniques in groups of maximum 4 people. We'll present 3 challenges, and you'll have to  choose one. Typically, you'll be asked to find solutions to specific  problems using some datasets. Apart from this, there will be  non-mandatory workshops and activities to get relaxed and meet new  people!</p>
          <div class="hidden lg:flex items-center justify-center w-1/4">
        <a class="-mt-4" href="https://otld03s5z97.typeform.com/to/GAz1tKet" target="_blank"><Button >Join now!</Button></a>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row  pt-10 w-full lg:space-x-12 space-y-12 lg:space-y-0">
          <div class="flex flex-col items-start space-y-2 lg:w-1/3">
            <img src={location} class="h-16 w-auto" alt="location icon"/>
            <h3 class="font-title font-bold text-[28px] md:text-[32px] text-dark">Where?</h3>
            <p class="font-body text-black/75 text-justify text-[14px] md:text-[17px]">Our event will take place in UPC's School of Mathematics and Statistics, located in <a class="underline decoration-accent hover:text-accent"  href="https://maps.app.goo.gl/14XKLDg4Jk5bdcZj6" target="_blank">C/ Pau Gargallo 14, Barcelona.</a>
            </p>
          </div>

           <div class="flex flex-col flex-wrap items-start space-y-2 lg:w-1/3">
            <img src={time} class="h-16 w-auto" alt="location icon"/>
            <h3 class="font-title font-bold text-[28px] md:text-[32px]  text-dark">When?</h3>
            <p class="font-body text-black/75 text-justify  text-[14px] md:text-[17px]"> The fourth edition of Datathon FME will take place on <b> November 16 and 17 </b>.
            </p>
          </div>

           <div class="flex flex-col items-start space-y-2 lg:w-1/3">
            <img src={user} class="h-16 w-auto" alt="location icon"/>
            <h3 class="font-title font-bold text-[28px] md:text-[32px] text-dark">Who?</h3>
            <p class="font-body text-black/75 text-justify text-[14px] md:text-[17px]"> Data enthusiasts currently enrolled at university or recent graduates are welcome!
            </p>
          </div>

        </div>
        
    </Card>

    <div class="w-full h-full flex items-center justify-center flex-col">
      <h2 class="font-title font-bold md:text-[48px] text-[36px]  text-terc text-center px-4">Summary of last year’s edition!  </h2>
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