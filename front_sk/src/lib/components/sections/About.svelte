<script>
  import Card from "$lib/components/Card.svelte";
  import Button from "$lib/components/Button.svelte";

  import location from "$lib/assets/location.svg";
  import time from "$lib/assets/time.svg";
  import user from "$lib/assets/user.svg";

</script>
<div class="bg-dark w-full flex flex-col justify-center items-center py-64 space-y-44 ">
     <Card className="w-[90%] md:w-[70%]  bg-terc flex flex-col  p-12">
        <h2 class="text-dark font-title md:text-[48px] text-[35px]  font-bold w-full ">What's the datathon?</h2> 
        <div class=" w-full flex flex-row space-x-6 pt-2">
          <p class="w-full lg:w-[80%] font-body text-secondary text-justify  text-[14px] md:text-[16px]"> The datathon is a weekend-long competition where you are challenge  to solve real-world challenges using techniques in machine learning, AI,  and data science in groups of maximum 4 people. We'll present three challenges, and you'll have to  choose one. Typically, you'll be asked to find solutions to specific  problems using some datasets. Apart from this, there will be  non-mandatory workshops and activities to get relaxed and meet new  people!</p>
          <div class="hidden lg:flex items-center justify-center w-1/4">
            <Button plain className="-mt-4">Join now!</Button>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row  pt-10 w-full lg:space-x-12 space-y-12 lg:space-y-0">
          <div class="flex flex-col items-start space-y-2 lg:w-1/3">
            <img src={location} class="h-16 w-auto" alt="location icon"/>
            <h3 class="font-title font-bold text-[28px] md:text-[32px] text-dark">Where?</h3>
            <p class="font-body text-secondary text-justify text-[14px] md:text-[16px]">Our event will take place in UPC's School of Mathematics and Statistics, located in C/ Pau Gargallo 14, Barcelona. You can find a map here!
              You will have access to classrooms to work with your own laptop. We will provide you Wi-Fi and food.
            </p>
          </div>

           <div class="flex flex-col flex-wrap items-start space-y-2 lg:w-1/3">
            <img src={time} class="h-16 w-auto" alt="location icon"/>
            <h3 class="font-title font-bold text-[28px] md:text-[32px]  text-dark">When?</h3>
            <p class="font-body text-secondary text-justify  text-[14px] md:text-[16px]">Our event will take place in UPC's School of Mathematics and Statistics, located in C/ Pau Gargallo 14, Barcelona. You can find a map here!
              You will have access to classrooms to work with your own laptop. We will provide you Wi-Fi and food.
            </p>
          </div>

           <div class="flex flex-col items-start space-y-2 lg:w-1/3">
            <img src={user} class="h-16 w-auto" alt="location icon"/>
            <h3 class="font-title font-bold text-[28px] md:text-[32px] text-dark">Who?</h3>
            <p class="font-body text-secondary text-justify text-[14px] md:text-[16px]">Our event will take place in UPC's School of Mathematics and Statistics, located in C/ Pau Gargallo 14, Barcelona. You can find a map here!
              You will have access to classrooms to work with your own laptop. We will provide you Wi-Fi and food.
            </p>
          </div>

        </div>
        
    </Card>

    <div class="w-full h-full flex items-center justify-center flex-col">
      <h2 class="font-title font-bold md:text-[48px] text-[36px]  text-terc text-center">Summary of last year’s edition!  </h2>
      <iframe class="w-[70%] h-[30vh] sm:h-[50vh] lg:h-[70vh] pt-10" src="https://www.youtube.com/embed/5PUtT34NhrI?si=vmb4dj6mWIEaoNfW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</div>
