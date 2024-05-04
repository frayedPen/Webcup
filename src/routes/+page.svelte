<!-- Index -->

<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind
    import BravoMealBuilder from "$lib/compo/BravoMealBuilder.svelte"
    import { Navbar, NavBrand,Input, NavLi, NavUl, Button, NavHamburger,Thumbnails,ButtonGroup,Card, Avatar, } from 'flowbite-svelte';

    import landingImage from '$lib/img/landingImage.jpg';
    import beerBurger from '$lib/img/beer and burger.jpg';
</script>

<!-- Landing -->
<div class="bravo-landing-image bg-cover bg-no-repeat relative" style="background-image: url('{landingImage}');">

</div>

<BravoMealBuilder />

<div class="h-screen bg-white grid grid-cols-2">
    <div>
        <h1 class="text-9xl">Our Speciality</h1>
        <h2 class="text-8xl">Beers & Burger</h2>
    </div>
    
    <img class="col-start-2" src="{beerBurger}" alt="Beer and burger">
</div>

<style>
    :global(.bravo-landing-image) {
        height: 90vh; 
        /* use javascript */
    }
</style>