<script lang="ts">
    export let data: { combination: string };
    let copied = false;
    let progress = 0;
    let intervalId: NodeJS.Timeout;

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(data.combination);
            copied = true;
            progress = 0;

            intervalId = setInterval(() => {
                progress += 1;
                if (progress >= 100) {
                    clearInterval(intervalId); 
                    copied = false; 
                }
            }, 60); 
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };
</script>

<div class="flex justify-center items-center flex-col min-h-[60vh]">
    <h1 class="font-title font-bold text-[25px] sm:text-[32px] md:text-[46px] text-dark text-center pb-4">Team Code Generator</h1>
    
    <h2
        class=" bg-terc p-10 rounded-[10px] mt-10 font-body text-[30px] sm:text-[50px] md:text-[98px] text-accent cursor-pointer select-text"
        on:click={copyToClipboard}
    >
        {data.combination}
    </h2>
    <h3 class="mt-4 font-body text-dark/70 text-sm sm:text-md md:text-lg">Click the code to copy!</h3>
</div>

{#if copied}
    <div class="absolute bottom-1 w-full h-20 bg-accent flex justify-center items-center p-4">
        <h2 class="text-white text-center text-[17px] sm:text-[20px] md:text-[23px] font-body font-bold">
          Copied to clipboard!
        </h2>

        <div class="absolute bottom-0 left-0 w-full h-1 bg-gray-300">
            <div class="bg-accent/50 h-full transition-all" style="width: {progress}%"></div>
        </div>
    </div>
{/if}

<style>
    .select-text {
        user-select: text;
    }
    .cursor-pointer {
        cursor: pointer;
    }
    .transition-all {
        transition: width 100ms linear;
    }
</style>
