<script lang="ts">
    export let className: string = "";
</script>

<div class={`rounded-[16px]  flex ${className}`}>
    <slot></slot>
</div>
