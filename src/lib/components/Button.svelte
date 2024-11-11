<script lang="ts">
    export let className: string = "";
    export let plain: true | false = false;
    export let outline: true | false = false;
    export let onClick: () => void = () => {};
    export let disabled: true | false = false;

</script>

<button on:click={onClick} class={`font-title font-bold text-[20px] border-accent border-2 rounded-[13px] px-[20px] py-[6px]
                ${outline ? "bg-white text-accent border-accent" : "bg-accent text-white"}
                ${className}`}
        class:effect={!plain}
        disabled={disabled}>
    <slot></slot>
</button>

<style>
    .effect:hover{
        box-shadow: 0 0;
        cursor: pointer;
        transform: translate(5px,5px) !important;
    }
    .effect{
        box-shadow: 5px 5px #adadad;
        text-decoration: none;
        transition: transform .3s,box-shadow .3s;
    }

</style>