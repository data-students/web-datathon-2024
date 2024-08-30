<script lang="ts">
    export let className: string = "";
</script>

<div class={`rounded-[16px] drop-shadow-xl flex ${className}`}>
    <slot></slot>
</div>
