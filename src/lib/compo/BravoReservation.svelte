<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind
    import { Select, Label,Input, Button, ButtonGroup,Card, Avatar, } from 'flowbite-svelte';
    import { UserOutline, } from 'flowbite-svelte-icons';
    let selected;
    let countries = [
        { value: 'us', name: 'United States' },
        { value: 'ca', name: 'Canada' },
        { value: 'fr', name: 'France' }
    ];
</script>

<div class="py-20 px-60">
    <div class="bg-accent2-400 p-10">
        <h1 class="text-6xl lg:text-7xl text-center mb-10">Make a reservation</h1>
        <div class="grid grid-cols-3 grid-rows-2 gap-10">
            <Input placeholder="Calendar" />
            <Input placeholder="Time" />
            <div class="flex items-center">
                <UserOutline class="w-10 h-10" />
                <Select class="mt-2" items={countries} bind:value={selected} />
            </div>
            <Button outline color="dark" class="col-start-2 text-white">Make Reservation</Button>
        </div>
    </div>
</div>