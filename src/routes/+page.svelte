<!-- Index -->

<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind
    import BravoMealBuilder from "$lib/compo/BravoMealBuilder.svelte"
    import { Navbar, NavBrand,Input, NavLi, NavUl, Button, NavHamburger,Thumbnails,ButtonGroup,Card, Avatar, } from 'flowbite-svelte';

    import landingImage from '$lib/img/landingImage.jpg';
</script>

<div class="bravo-landing-image bg-cover bg-no-repeat relative" style="background-image: url('{landingImage}');">

</div>

<BravoMealBuilder />

<style>
    :global(.bravo-landing-image) {
        height: 90vh; 
        /* use javascript */
    }
</style>