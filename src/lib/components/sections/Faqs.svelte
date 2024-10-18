<script>
    import { faqs_ca, faqs_en } from '$lib/assets/faqs.json';
    import Faq from "$lib/components/Faq.svelte";
    import Card from "$lib/components/Card.svelte";
    import { locale } from '$lib/translations/translations';

    let faqs = [];
    $: {
        $locale === 'ca' ? faqs = faqs_ca : faqs = faqs_en;
    }


</script>

<div id="faqs" class="w-[90%] sm:w-[85%] grid grid-cols-1 lg:grid-cols-2 items-start pb-40 mt-40 ">
    <h2 class="font-title font-bold md:text-[48px] text-[36px] mb-10 text-dark text-center col-span-full">FAQs</h2>
    <div class="flex flex-col items-center ">
        <Card className="w-full sm:w-[90%] bg-terc p-12 flex flex-col mb-20 ">
            <h6 class="text-accent font-title text-[16px] font-bold">{faqs[0].section_title}</h6>

            <ul class="pt-4 space-y-6">
                {#each faqs[0].questions as question}
                    <Faq question={question} />
                {/each}
            </ul>
        </Card>
    </div>
    <div class="flex flex-col items-center">
        {#each faqs.slice(1) as section}
            <Card className="w-[90%] sm:w-[90%] bg-terc p-10 flex flex-col mb-10 ">
                <h6 class="text-accent font-title text-[16px] font-bold">{section.section_title}</h6>

                <ul class="pt-4 space-y-6">
                    {#each section.questions as question}
                        <Faq question={question} />
                    {/each}
                </ul>
            </Card>
        {/each}
    </div>
</div>
