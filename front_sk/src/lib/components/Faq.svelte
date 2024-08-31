<script>
  import plus from "$lib/assets/plus.svg";
  import minus from "$lib/assets/minus.svg";

  export let question = {};
  let toggle = false;
</script>

<style>
.plusminus {
	position: relative;
	width: 20px;
	height: 20px;
	cursor: pointer;
	
	&.active {
		&:before {
			transform: translatey(-50%) rotate(-90deg);
			opacity: 0;
		}
		&:after {
			transform: translatey(-50%) rotate(0);
		}
	}
	
	&:before , &:after {
		content: "";
		display: block;
		background-color: #21918c;
		position: absolute;		
		top: 50%; left: 0;
		transition: .35s;
		width: 100%;
		height: 3px;
	}
	
	&:before {		
		transform: translatey(-50%);
	}
	
	&:after {
		transform: translatey(-50%) rotate(90deg);
	}
}
</style>

<li>
  <button on:click={() => toggle = !toggle} class="flex flex-row justify-between w-full text-left items-center">
    <h5 class="text-dark font-title text-[18px] md:text-[20px] font-bold pr-4">{question.question}</h5>
    <div class="text-accent font-title text-[36px] p-0 m-0 icon-container {toggle ? 'toggle' : ''}">
        <div class=" plusminus {toggle ? "active" : ''}"></div>
    </div>
  </button>
  <div class="w-full bg-accent h-[2px] rounded-full mt-1"></div>
  <p class={`text-dark font-body text-[14px] md:text-[17px] mt-1 ${toggle ? "block" : "hidden"}`}>{question.answer}</p>
</li>
