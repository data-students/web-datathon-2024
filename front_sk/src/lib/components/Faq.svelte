<script>

  import plus from "$lib/assets/plus.svg";
  import minus from "$lib/assets/minus.svg";

  export let question = {};
  let toggle = false;
</script>



<li>
    <div class="flex flex-row justify-between">
        <h5 class="text-dark font-title text-[20px] font-bold">{question.question}</h5>
        <button on:click={() => toggle = !toggle} class="text-accent font-title text-[36px] p-0 m-0">
            {#if toggle}
                <img src={minus}  class="h-6" alt="plus icon"/>
            {:else}
                <img src={plus}  class="h-6" alt="plus icon"/>
            {/if}
        </button>
    </div>
    <div class="w-full bg-accent h-[2px] rounded-full mt-1"></div>
    <p class={`text-dark font-body text-[16px] mt-1 ${toggle ? "block" : "hidden"}`}>{question.answer}</p>
</li>

