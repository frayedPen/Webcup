<!-- Our locations -->

<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind
    import MapImg from "$lib/img/map.png";
    import BravoFooter from '$lib/compo/BravoFooter.svelte';
    import BravoNavbar from '$lib/compo/BravoNavbar.svelte';
    import { PhoneSolid } from 'flowbite-svelte-icons';
    import { DarkMode, } from 'flowbite-svelte';   
     import { onMount } from 'svelte';
    import { fly, } from 'svelte/transition';

    let ready = false;
    onMount(() => ready = true);
</script>

<BravoNavbar />

<!--1st section-->
<div class="bg-primary-200 dark:bg-primary-dark-200 py-32">
    {#if ready}
        <h1 in:fly={{delay: 0, duration:1000, y:50}}  class="text-5xl lg:text-5xl font-bold text-center" id="title">
            Hours & Locations
        </h1>
    {/if}
</div>

<!--2nd section-->
<div class="grid grid-cols-2 px-10 lg:px-60 pt-14 dark:bg-primary-dark-200">
    <div class="flex flex-col justify-center gap-10">
        <div>
            <h1 class="font-bold" >Opening and Closing hours</h1>
            <h2 class="pt-5 font-semibold">Brunch</h2>
            <p>Saturdays & Sundays: </p>
            <div> 10:30 am - 3 pm</div>
        </div>
        <div>
            <h2 class="pt-5 font-semibold">Dinner</h2>
            <p>Sundays to Thursdays: </p>
            <p>05:30 pm - 10 pm</p>
            <p>Fridays & Saturdays</p>
            <p>05:30 pm - 11 pm</p>
        </div>
        <div>
            <h2 class="pt-5 font-semibold">Happy Hour</h2>
            <p>Fridays:</p>
            <p>4 pm - 8 pm</p>
            <p>Saturdays:</p>
            <p>4 pm - 6 pm</p>
        </div>
    </div>
    <div class="px-4 md:px-8 xl:px-24">
        <img alt="Map img" class="" src={MapImg}/>
    </div>
</div>

<!--3rd section-->
<div class="px-10 lg:px-60 pt-6 pb-5 grid grid-rows lg:grid-cols-3 dark:bg-primary-dark-200">
    <div>
        <h1 class="pt-5 font-semibold">Address</h1>
        <p>635 Cactus St, </p>
        <p>Virginia City, </p>   
        <p>MT 59788, </p>  
        <p>United States</p>
    </div>
    <div>
        <h1 class="pt-5 font-semibold">Contact Us</h1>
        <p>Phone number:</p>
        <p>+406-854-9503</p>
        <p>Email:</p>
        <p>restofarwest@bravo6.com</p>
    </div>
    <div>
        <h1 class="pt-5 font-semibold">Other Locations</h1>
        <p>3891 Masonic Drive, Billings, MT 59102 <PhoneSolid slot="left" class=" inline-block w-5 h-5 fill-black" />
            +406-655-0464</p>
        <p>1856 Seltice Way, Owyhee, ID 89832 <PhoneSolid slot="left" class=" inline-block w-5 h-5 fill-black" /> +208-759-0192</p>
        <p> 2987 Brooklyn Street, Eugene, OR 97401 <PhoneSolid slot="left" class=" inline-block w-5 h-5 fill-black" /> +541-236-6702</p>
        <p>2537 Clearview Drive, Greenwood, CO 80111 <PhoneSolid slot="left" class=" inline-block w-5 h-5 fill-black" /> +303-656-6722</p>
    </div>
</div>

<!-- Footer -->
<BravoFooter />

<style>
    #title {
        font-family: 'Royale', sans-serif
    }
</style>