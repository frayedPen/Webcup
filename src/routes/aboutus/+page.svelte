<!-- About us -->

<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind
    import FamilyImg from "$lib/img/family.jpg";
    import LandscapeImg from "$lib/img/landscape.jpg";
    import DoorImg from "$lib/img/door.jpg";
    import FounderImg from "$lib/img/founder.jpg";
    import BravoCounter from '$lib/compo/BravoCounter.svelte';
    import BravoFooter from '$lib/compo/BravoFooter.svelte';
    import { inview } from 'svelte-inview';
    import BravoNavbar from '$lib/compo/BravoNavbar.svelte';
    import { onMount } from 'svelte';
    import { fly, } from 'svelte/transition';

    let ready = false;
    let isInView = false;
    onMount(() => ready = true);

</script>

<BravoNavbar />
<!-- 1st section -->
<div class="pt-10 bg-primary-200 dark:bg-primary-dark-200 text-center">
    <div class="text-5xl lg:text-5xl  font-bold" id="title">
        {#if ready}
            <h1 in:fly={{delay: 0, duration:1000, y:50}}>
                We Are Restaurant Du Far West,
            </h1>
            <h2 in:fly={{delay: 300, duration:1000, y:50}}>
                Est 1878
            </h2>
        {/if}
    </div>
    <div class="px-5 lg:px-10 lg:px-20 2xl:px-96 pt-6 text-md lg:text-lg pb-10">
        <p>In the rugged heartland of Montana, "Restaurant du Far West" stands as a testament to the resilience and pioneering spirit of the American West. 
        </p>
        <p>Founded in 1878 amidst the vast expanse of Big Sky Country, our establishment emerged from the dreams of settlers seeking refuge and community in the wilderness. 
        </p>
        <br>
        <p>
            Experience the true essence of Montana's frontier spirit by stepping through the swinging doors of "Restaurant du Far West" and 
        </p>
        <p class="pb-5">
            immerse yourself in the rustic charm of a bygone era which mingles with the scent of wood smoke and the aroma of sizzling burgers on the grill.
        </p>
    </div>
    
</div>

<!--2nd section-->
<div class="grid grid-cols-3 h-140 overflow-hidden">
    <img alt="Family img" class="w-full hover:scale-105 duration-300 z-0" src={FamilyImg}/>
    <img alt="Landscape img" class="w-full hover:scale-105 duration-300 z-10" src={LandscapeImg}/>
    <img alt="Door img" class="w-full hover:scale-105 duration-300 z-20" src={DoorImg}/>
</div>

<!--3rd section-->
<div>
    <!-- Proxy -->
    <div
        use:inview={{ unobserveOnEnter: true, rootMargin: '0%' }}
        on:inview_enter={(event) => {
            isInView = true;
        }}>
    </div>

    <div class="bg-primary-200 dark:bg-primary-dark-200 pt-14">
        <div>
            <h1 class="text-5xl lg:text-5xl text-center font-semibold" id="title">Taste The West, One Bite At A Time!</h1>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-10 p-20">

            {#if isInView}
                <div class="text-center">
                    <BravoCounter duration={3} targetValue={146} divClass="text-4xl"/>
                    <h1 class="text-xl font-extrabold">Years Of Service</h1>
                </div>

                <div class="text-center">
                    <BravoCounter duration={3} targetValue={4} divClass="text-4xl"/>
                    <h1 class="text-xl font-extrabold">Average Star Rating</h1>
                </div>

                <div class="text-center">
                    <BravoCounter duration={3} targetValue={5} divClass="text-4xl"/>
                    <h1 class="text-xl font-extrabold">No Of Restos</h1>
                </div>

                <div class="text-center">
                    <BravoCounter duration={3} targetValue={250} divClass="text-4xl"/>
                    <h1 class="text-xl font-extrabold">Orders Per Day</h1>
                </div>
            {/if}
        </div>
    </div>
</div>

<!--4th section-->
<div class="px-10 xl:px-60 pb-1 flex justify-between dark:bg-primary-dark-200">
    <div>
        <h1 class="px-14 pt-14 text-5xl lg:text-7xl" id="title">Behind The Success</h1>
        <div class="px-5 pt-6 text-md lg:text-lg pb-10">
            <p class="pt-5">In the heart of Montana's rugged landscape, Tobias Henry Thompson, a seasoned cowboy turned chef, 
                founded "Restaurant du Far West" in 1878 at the age of 40.
            </p>
            <p class="pt-5">With a passion for hearty fare, Tobias specialized in burgers and beer, sourcing ingredients from local ranches. 
                His signature dish, the bison burger, became a frontier favourite, drawing travellers and locals alike to his rustic eatery. 
            </p>
            <p class="pt-5">With its warm hospitality and flavorful cuisine, "Restaurant du Far West" soon became a beloved landmark in Timber Ridge, 
                cementing John's legacy as the pioneer of Montana cuisine. 
            </p>
        </div>
    </div>
    <div class="lg:p-14 mt-12 lg:mt-0">
        <img alt="Founder img" class="w-full" src={FounderImg}/>
    </div>
</div>
                
<!-- Footer -->
<BravoFooter />

<style>
    #title {
        font-family: 'Royale', sans-serif
    }
</style>