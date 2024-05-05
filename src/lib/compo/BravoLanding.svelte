<script>
    // @ts-nocheck
    import landingImage from '$lib/img/landingImage2.jpg';
    import leftImage from '$lib/img/left door.png';
    import rightImage from '$lib/img/right door.png';

    import { Button, } from 'flowbite-svelte';
</script>

<div class="bravo-landing-image bg-cover bg-no-repeat overflow-hidden relative" style="background-image: url('{landingImage}'); background-position: center bottom">
    <div class="h-full w-screen text-6xl flex justify-center items-center flex-col z-50">
        <h1 class="text-white">Are You Craving The Far West Taste?</h1>
        <Button pill size="lg">Order Now</Button>
    </div>
    <div class="h-full w-full absolute top-0 left-0 grid grid-cols-2">
        <img src="{leftImage}" alt="left door" class="h-full bravo-left-door">
        <img src="{rightImage}" alt="right door" class="h-full bravo-right-door absolute right-0">
    </div>
</div>

<style>
    .bravo-left-door {
        animation: rotateYL 1.5s linear;
        transform: scale(1.2) scaleX(1.5) translateX(-100px);
        animation-fill-mode: forwards;
        transform-origin: -10% 50%;
        perspective: 500px;
    }

    @keyframes rotateYL {
        to { transform: rotateY(-90deg) scale(1.2) scaleX(1.5) translateX(-100px); }
    }

    .bravo-right-door {
        animation: rotateYR 1.5s linear;
        transform: scale(1.2) scaleX(1.5) translateX(100px);
        animation-fill-mode: forwards;
        transform-origin: 110% 50%;
        perspective: 500px;
    }

    @keyframes rotateYR {
        to { transform: rotateY(-90deg) scale(1.2) scaleX(1.5) translateX(-100px); }
    }
</style>