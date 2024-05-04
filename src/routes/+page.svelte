<!-- Index -->

<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind
    import BravoMealBuilder from "$lib/compo/BravoMealBuilder.svelte"
    import BravoReservation from "$lib/compo/BravoReservation.svelte"
    import { Navbar, NavBrand,Input, NavLi, NavUl, Button, NavHamburger,Thumbnails,ButtonGroup,Card, Avatar, } from 'flowbite-svelte';

    import landingImage from '$lib/img/landingImage.jpg';
    import beerBurger from '$lib/img/beer and burger.jpg';
    import parallaxBack from '$lib/img/parallaxBack.jpg';
</script>

<!-- Landing -->
<div class="bravo-landing-image bg-cover bg-no-repeat relative" style="background-image: url('{landingImage}');">

</div>

<BravoMealBuilder />

<div class="bg-primary-400 grid grid-cols-3 items-center py-6 px-6 lg:py-20 lg:px-40">
    <div class="col-span-2 text-center">
        <h1 class="text-5xl lg:text-9xl">Our Speciality</h1>
        <h2 class="text-4xl lg:text-8xl">Beers & Burger</h2>
    </div>
    
    <img class="col-start-3" src="{beerBurger}" alt="Beer and burger">
</div>

<!-- Parallax background -->
<div class="h-60 lg:h-80 z-40 relative items-center justify-center flex bg-transparent overflow-hidden">
    <div class="h-screen w-full left-0 top-0 absolute z-0 bg-fixed object-cover" style="background-image: url('{parallaxBack}');"></div>
</div>

<!-- Make reservations -->
<BravoReservation />

<style>
    :global(.bravo-landing-image) {
        height: 90vh; 
        /* use javascript */
    }
</style>