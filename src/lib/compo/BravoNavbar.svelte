<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind
    import { Navbar, NavBrand,Input, NavLi, NavUl, Button, NavHamburger,Thumbnails,ButtonGroup,Card, Avatar, } from 'flowbite-svelte';
</script>

<Navbar class="px-2 sm:px-4 py-2.5 sticky w-full z-50 top-0 start-0 border-b">
    <NavBrand href="/">
        <NavHamburger />
    </NavBrand>
    <NavUl activeClass="text-blue-600">
        <NavLi href="/aboutus">About us</NavLi>
        <NavLi href="/locations">Locations</NavLi>
    </NavUl>
</Navbar>