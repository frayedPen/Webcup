<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind
    import { DarkMode, Navbar, NavBrand,Input, NavLi, NavUl, Button, NavHamburger,Thumbnails,ButtonGroup,Card, Avatar, } from 'flowbite-svelte';
    import logo from '$lib/img/logo.jpg';
    import { fly } from 'svelte/transition';

    import { onMount } from 'svelte'
    let ready = false;
    onMount(() => ready = true);
</script>

<Navbar class="border-b py-0 relative top-0 z-50">
    <NavBrand href="/">
        <img src="{logo}" class="me-3 h-28" alt="Restaurent du far west" /> 
        {#if ready}
            <div class="text-2xl" id="title" in:fly={{x:-100, duration: 2000}}>Restaurant du Far West</div>
        {/if}
        <NavHamburger />
    </NavBrand>

    <NavUl activeClass="text-blue-600 align-middle">
        <NavLi href="/" class="h-full flex items-center">Home</NavLi>
        <NavLi href="/aboutus" class="h-full flex items-center">About us</NavLi>
        <NavLi href="/location" class="h-full flex items-center">Locations</NavLi>
        <NavLi><DarkMode /></NavLi>
    </NavUl>
</Navbar>

<style>
    #title {
        font-family: 'Royale', sans-serif;
    }
</style>