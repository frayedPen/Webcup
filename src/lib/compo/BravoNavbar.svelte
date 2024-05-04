<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind
    import { Navbar, NavBrand,Input, NavLi, NavUl, Button, NavHamburger,Thumbnails,ButtonGroup,Card, Avatar, } from 'flowbite-svelte';
    import logo from '$lib/img/logo.jpg';
</script>

<Navbar class="border-b py-0">
    <NavUl>
        <NavLi>
            <Button outline color="dark">Reservation</Button>
        </NavLi>

        <NavLi>
            <Button outline color="dark">Order Now</Button>
        </NavLi>
    </NavUl>

    <NavBrand href="/">
        <img src="{logo}" class="me-3 h-28" alt="Restaurent du far west" /> 
        <NavHamburger />
    </NavBrand>

    <NavUl activeClass="text-blue-600">
        <NavLi href="/aboutus">About us</NavLi>
        <NavLi href="/location">Locations</NavLi>
    </NavUl>
</Navbar>