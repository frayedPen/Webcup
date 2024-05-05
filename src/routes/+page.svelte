<!-- Index -->

<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind
    import BravoMealBuilder from "$lib/compo/BravoMealBuilder.svelte"
    import BravoReservation from "$lib/compo/BravoReservation.svelte"
    import BravoStickySection from "$lib/compo/BravoStickySection.svelte"
    import BravoFooter from "$lib/compo/BravoFooter.svelte"
    import beerBurger from '$lib/img/beer and burger.jpg';
    import parallaxBack from '$lib/img/parallaxBack.jpg';
    import BravoLanding from '$lib/compo/BravoLanding1.svelte';
    import { Navbar, NavBrand,Input, NavLi, NavUl, Button, NavHamburger,Thumbnails,ButtonGroup,Card, Avatar, } from 'flowbite-svelte';
    import logo from '$lib/img/logo.jpg';    
    

</script>

<Navbar class="border-b py-0 absolute top-0 z-50">
    <NavBrand href="/">
        <img src="{logo}" class="me-3 h-28" alt="Restaurent du far west" /> 
        <div class="text-2xl" id="title">Restaurant du Far West</div>
        <NavHamburger />
    </NavBrand>

    <NavUl activeClass="text-blue-600">
        <NavLi href="/aboutus">About us</NavLi>
        <NavLi href="/location">Locations</NavLi>
    </NavUl>
</Navbar>

<!-- Landing -->
<BravoLanding />

<div class="bg-primary-400 grid grid-cols-3 justify-items-center py-6 lg:px-20 lg:py-10">
    <h1 class="text-center col-start-1 col-span-3 lg:col-span-2 lg:row-start-1 text-5xl lg:text-7xl">Our Speciality</h1>
    <h2 class="text-center col-start-1 col-span-3 lg:col-span-2 lg:row-start-2 text-4xl lg:text-6xl pt-2">Beers & Burgers</h2>
    <img class="col-start-1 col-span-3 lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-5 inline-block py-5 lg:py-0" src="{beerBurger}" alt="Beer and burger">
    <p class="text-center col-start-1 col-span-3 lg:col-span-2 lg:row-start-3 px-5 pt-0 lg:pt-10 pb-2 text-3xl lg:text-xl">
        Our speciality at "Restaurant Du Far West" is crafting mouthwatering burgers paired perfectly with ice-cold beers. 
    </p>
    <p class="text-center col-start-1 col-span-3 lg:col-span-2 lg:row-start-4 lg:col-start-1 px-5 pb-2 text-3xl lg:text-xl">
        Each burger is a flavour masterpiece, featuring locally sourced ingredients and bold, rustic seasonings that payhomage to Montana's culinary heritage. 
    </p>

</div>

<div class="h-20 w-full text-3xl py-10 text-center relative z-50 sm:px-4 md:px-40 lg:px-80 pb-20 text-black">
    <h1 class="text-5xl">
        Build Your Burger
    </h1>
    <hr class="mt-8">
</div>

<BravoMealBuilder />

<!-- Parallax background -->
<div class="h-96 lg:h-80 z-40 relative items-center justify-center flex bg-transparent overflow-hidden">
    <h1 class="pt-14 pb-14 font-bold text-white text-6xl z-10 relative text-center px-4 md:px-0">Rustic Flavours, Modern Delights!</h1>
    <div class="h-screen w-full left-0 top-0 absolute z-0 bg-fixed object-cover" style="background-image: url('{parallaxBack}');"></div>
</div>

<!-- Make reservations -->
<BravoReservation />

<!--Banner-->
<div class="py-2 md:py-5 w-full bg-primary-500 text-xl md:text-3xl text-center relative z-50 text-white">
    Our Philosophy - Honour the Land with Hearty Meals
</div>


<BravoStickySection />

<!-- Footer -->
<BravoFooter />

<style>
    #title {
        font-family: 'Royale', sans-serif;
    }
</style>