<script>
    // @ts-nocheck
    import baseImg from '$lib/img/landingImageBase.webp';
    import tumble from '$lib/img/tumble.png';
    
    import { Button, } from 'flowbite-svelte';
</script>

<div class="bravo-landing-image h-screen bg-[#ffc275] overflow-hidden relative">
    
    <div class="h-4/6 w-screen text-6xl flex justify-center items-center flex-col absolute top-0 z-30">
        <h1 id="title" class="text-white mt-40 lg:mt-0 px-4 text-center md:px-4">Are You Craving The Far West Taste?</h1>
        <div>
            <Button outline color="dark" size="xl" href="#reservations" class="dark:text-white">Reserve a Table</Button>
            <Button outline color="dark" size="xl" href="#order" class="dark:text-white">Order Now</Button>
        </div>
    </div>

    <img src="{baseImg}" alt="" class="absolute bottom-0 left-0 z-20 w-full">

    <img src="{tumble}" alt="tumble weed" class="w-40 absolute z-40 bottom-0 bravo-tumble-1">
</div>

<style>
    .bravo-landing-image {
        background-color: #b1b0c1;
        animation: fade 2s linear;
        animation-fill-mode: forwards;
    }

    @keyframes fade {
        to { background-color: #ffc275; }
    }

    .bravo-tumble-1 {
        left:-10%;
        /* transform: translateX(-100%); */
        animation: xMove 10s linear , bounce 1s infinite;
        animation-fill-mode: forwards;
    }

    @keyframes xMove {
        to { left: 100%; transform: rotate(720deg); }
    }

    @keyframes rotate {
        to { transform: rotate(360deg); }
    }

    @keyframes bounce { 
        0%, 100% {bottom:-5px;} 
        50% {bottom: 30px;} 
    }

    @keyframes sunRise {
        to { bottom: 60%; }
    }

    #title {
        font-family: 'Royale', sans-serif;
    }
</style>