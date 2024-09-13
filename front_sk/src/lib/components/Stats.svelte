<script>
    import Card from "$lib/components/Card.svelte";

    import { tweened } from "svelte/motion";
    import { expoOut } from "svelte/easing";

    export let participants = 350;
    export let money = 2000;

    function createTweenedStore(initialValue, duration = 4000) {
        return tweened(initialValue, {
            duration,
            easing: expoOut,
            interpolate: (a, b) => (t) => Math.round(a + (b - a) * t),
        });
    }

    let animatedParticipants = createTweenedStore(0);
    let animatedMoney = createTweenedStore(0);

    function handleIntersect(node) {
        let observer;
        const handleVisibilityChange = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animatedParticipants.set(participants);
                    animatedMoney.set(money);
                    observer.disconnect();
                }
            });
        };
        observer = new IntersectionObserver(handleVisibilityChange, {
            threshold: 0.4,
        });
        observer.observe(node);
        return {
            destroy() {
                if (observer) observer.disconnect();
            },
        };
    }
</script>

<div class="mt-44 pb-20" use:handleIntersect>
     <div class="parent ">
        <div class="div1 -z-10">
            <Card className=" w-[250px] sm:w-[330px] h-[200px] bg-terc p-[30px] justify-center">
                <div class="">
                    <p class="text-accent font-title text-[64px] font-bold">
                        {$animatedMoney}€
                    </p>
                    <p class="text-dark font-title font-bold text-[22px] text-center">
                        IN PRIZES
                    </p>
                </div>
            </Card>
        </div>
        <div class="div2 z-20">
            <Card className="w-[250px] sm:w-[330px] h-[200px] bg-accent p-[30px] justify-center">
                <div class="">
                    <p class="text-terc font-title text-[44px] font-bold text-center">
                        It's <span class="text-dark font-extrabold a">FREE</span> to join!
                    </p>
                </div>
            </Card>
        </div>
        <div class="div3 ">
            <Card className="-z-10 w-[250px] sm:w-[336px] h-[200px] bg-dark p-[30px]  justify-start">
                <div class="">
                    <p class="text-terc font-title text-[64px] font-bold">
                        +{$animatedParticipants}
                    </p>
                    <p class="text-terc font-title font-bold text-[22px] absolute bottom-0/2 right-1 pr-8 -my-4">
                        PARTICIPANTS
                    </p>
                </div>
            </Card>
        </div>
    </div> 
</div>

<style>
   
    .parent {
        display: grid;
        grid-template-columns: repeat(13, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 0px;
    }

    .div1 { grid-area: 1 / 1 / 4 / 6; }
    .div2 { grid-area: 3 / 5 / 6 / 10; }
    .div3 { grid-area: 1 / 9 / 4 / 14; }

     @media (max-width: 1000px) {
        .parent {
            display: block;
        }
        .div1, .div2, .div3 {
            margin-bottom: 3rem;
        }
    }


</style>
