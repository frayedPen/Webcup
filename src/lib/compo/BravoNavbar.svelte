<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind
    import { Navbar, NavBrand,Input, NavLi, NavUl, Button, NavHamburger,Thumbnails,ButtonGroup,Card, Avatar, } from 'flowbite-svelte';
    import logo from '$lib/img/logo.jpg';
</script>

<Navbar class="border-b py-0 absolute top-0 z-50">
    <NavBrand href="/">
        <img src="{logo}" class="me-3 h-28" alt="Restaurent du far west" /> 
        <NavHamburger />
    </NavBrand>

    <NavUl activeClass="text-blue-600 align-middle">
        <NavLi href="/aboutus">About us</NavLi>
        <NavLi href="/location">Locations</NavLi>
        <NavLi class="bg-green-500 rounded-xl w-8 h-8 text-center leading-8 align-middle">A</NavLi>
    </NavUl>
</Navbar>