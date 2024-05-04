<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind
    import { Select, Label,Input, NavLi, NavUl, Button, NavHamburger,Thumbnails,ButtonGroup,Card, Avatar, } from 'flowbite-svelte';
    let selected;
    let countries = [
        { value: 'us', name: 'United States' },
        { value: 'ca', name: 'Canada' },
        { value: 'fr', name: 'France' }
    ];
</script>

<div class="h-screen pt-20">
    <h1 class="text-6xl lg:text-7xl text-center">Make a reservation</h1>
    <div class="grid grid-cols-3 grid-rows-2">
        <Input placeholder="Calendar" />
        <Input placeholder="Time" />
        <Label>
            Select an option
            <Select class="mt-2" items={countries} bind:value={selected} />
        </Label>
    </div>
</div>