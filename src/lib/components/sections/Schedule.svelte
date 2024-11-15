<script lang="ts">
    import { t, locale, loadTranslations } from '$lib/translations/translations';
    import agenda from '$lib/assets/agenda.png';
</script>

<div id="schedule" class="flex flex-col justify-center items-center w-full mt-52">
    <h2
        class="font-title font-bold md:text-[48px] text-[36px] text-dark text-center"
    >
        {$t("main.schedule")}
    </h2>
    <div class=" h-full w-full flex items-center justify-center ">
        <img src={agenda} alt="Schedule" class="w-[40rem] h-full object-contain" />
    </div>
</div>
