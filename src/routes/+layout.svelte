<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind
    import favicon from "$lib/img/favicon.png";
    
    import { Navbar, NavBrand,Input, NavLi, NavUl, Button, NavHamburger,Thumbnails,ButtonGroup,Card, Avatar, } from 'flowbite-svelte';
</script>

<svelte:head>
    <title>Restaurant Du Far West</title>
    <link rel="icon" type="image/x-icon" href="{favicon}">
</svelte:head>

<slot />

<style>
    :global(body) {
        /* background-color: black; */
        margin: 0;
        overflow-x:hidden;
    }
</style>