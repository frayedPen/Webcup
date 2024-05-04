<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind
    
    import BravoNavbar from '$lib/compo/BravoNavbar.svelte';
    import { Navbar, NavBrand,Input, NavLi, NavUl, Button, NavHamburger,Thumbnails,ButtonGroup,Card, Avatar, } from 'flowbite-svelte';
</script>

<BravoNavbar />

<slot />

<style>
    :global(body) {
        /* background-color: black; */
        margin: 0;
        overflow-x:hidden;
    }
</style>