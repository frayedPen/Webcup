<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind
    import { Select, Label,Input, Button, ButtonGroup,Card, Avatar, } from 'flowbite-svelte';
    import { UserOutline, } from 'flowbite-svelte-icons';
    let selected;
    let countries = [
        { value: '1', name: '1 people' },
        { value: '2', name: '2 people' },
        { value: '3', name: '3 people' },
        { value: '4', name: '4 people' },
        { value: '5', name: '5 people' },
        { value: '6', name: '6 people' },
    ];
</script>

<div class="py-20 px-60" id="reservations">
    <div class="bg-accent2-400 p-10">
        <h1 class="text-6xl lg:text-7xl text-center mb-10 text-white" id="title">Make a reservation</h1>
        <div class="grid grid-cols-3 grid-rows-2 gap-10">
            <Input placeholder="Calendar" type="date"/>
            <Input placeholder="Time"  type="time"/>
            <div class="flex items-center">
                <UserOutline class="w-10 h-10" />
                <Select class="mt-2" items={countries} bind:value={selected} />
            </div>
            <Button outline color="dark" class="col-start-2 text-white hover:bg-primary-500">Make Reservation</Button>
        </div>
    </div>
</div>

<style>
    #title {
        font-family: 'Royale', sans-serif
    }
</style>