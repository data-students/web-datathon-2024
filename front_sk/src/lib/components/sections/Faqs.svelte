<script>
    import {faqs} from '$lib/assets/faqs.json';
    const section = faqs[0];
    console.log(section);
    import Faq from "$lib/components/Faq.svelte";
    import Card from "$lib/components/Card.svelte";

</script>

<div class=" w-full flex flex-col items-center pb-40 mt-52">
    <h2 class="font-title font-bold md:text-[48px] text-[36px] mb-10  text-dark text-center">FAQs</h2>

    {#each faqs as section}
        <Card className="w-[70%]  bg-terc p-12 flex flex-col mb-20">
            <h6 class="text-accent font-title text-[16px] font-bold">{section.section_title}</h6>

            <ul class="pt-4 space-y-6">
                {#each section.questions as question}
                    <Faq question={question}/>
                {/each}
            
            </ul>
        </Card>
    {/each}
</div>