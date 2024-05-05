<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind
    import { Navbar, NavBrand,Input, NavLi, NavUl, Button, NavHamburger,Thumbnails,ButtonGroup,Card, Avatar, } from 'flowbite-svelte';
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
        <NavLi href="/aboutus">About us</NavLi>
        <NavLi href="/location">Locations</NavLi>
    </NavUl>
</Navbar>

<style>
    #title {
        font-family: 'Royale', sans-serif;
    }
</style>