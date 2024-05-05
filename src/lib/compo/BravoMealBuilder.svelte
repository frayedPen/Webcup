<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind

    import { Navbar, NavBrand,Input, Label, NavUl, Button, NavHamburger,Thumbnails,ButtonGroup,Card, Avatar, } from 'flowbite-svelte';
    import {onMount} from 'svelte';
    import { Toast } from 'flowbite-svelte';
    import { RefreshOutline, } from 'flowbite-svelte-icons';
    import meat from "$lib/img/meat.jpg";
    import blank from "$lib/img/blank.jpg";

    const categories = 4;

    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };
    const menuItems = new Array(categories).fill(null).map(() => []);

    let loaded = false;
    let showError = false;

    onMount(async () => {
        const items = await fetch("https://bravo6.latchoomun.com/api/food_items?page=1", options).then((x) => x.json());

        const mediaIn = await fetch('https://bravo6.latchoomun.com/api/medias?page=1', options).then((x) => x.json()),
            medias = [];

        for(let i = 0; i < mediaIn.length; i++) {
            mediaIn[i].id = parseInt(mediaIn[i].id) - 1;
            medias[mediaIn[i].id] = mediaIn[i];
        }
        // debugger;        
        items.forEach(item => {
            const name = item.name,
                category = parseInt(item.foodCategory.charAt(item.foodCategory.length - 1)),
                media = item.media == undefined ? meat : (medias[parseInt(item.media.replace(/\D/g, ""))-1]?.media_original ?? meat);

            menuItems[category-1].push({media:media, name:name});
        });

        loaded = true;
    });

    const refs = new Array(categories).fill(null);

    let visible = new Array(categories).fill(false);
    let chosen = new Array(categories).fill(-1);
    visible[0] = true;
    let index = 0;
    let screen = 0;

    let firstName;
    let lastName;
    let email;
    let address;

    function nextPage() {
        visible[index] = false;
        chosen[index] = this;
        index++;
        visible[index] = true; 
    }

    function nextScreen() {
        screen++;
    }

    function reset() {
        visible = new Array(categories).fill(false);
        chosen = new Array(categories).fill(-1);
        visible[0] = true;
        index = 0;
        screen = 0;
    }
</script>

<div class="w-full z-50 ">
    <div class="" id="order">
        <div id="custom-grid" class="grid grid-rows-2 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 p-10 lg:px-20 xl:px-40 lg:py-10">

            {#if screen==0}
                <div class="row-start-2 lg:row-start-1 xl:mt-4">
                    {#key loaded}
                        {#each menuItems as category, i}
                            {#if visible[i]}
                                <!-- svelte-ignore missing-declaration -->
                                <!-- svelte-ignore a11y-click-events-have-key-events -->
                                <!-- svelte-ignore a11y-no-static-element-interactions -->
                                <div class="grid grid-rows-4 grid-cols-4 gap-2">
                                    <h1 class="col-start-2 text-center text-xl col-span-2">The Base</h1>
                                    {#each category as c, j}
                                        <Button pill color="blue" size="xl" on:click={nextPage.bind(j)} class="col-start-2 col-span-2">{c.name}</Button>                            
                                    {/each}
                                </div>
                            {/if}
                        {/each}
                    {/key}

                    {#if chosen[3] != -1}
                        <div class="row-start-2 lg:row-start-1 xl:mt-8 flex flex-col px-10 mt-4 lg:mt-0 xl:px-40">
                            <Button color="blue" on:click={nextScreen}> Place order</Button>
                            <br>
                            <Button color="red" on:click={reset}><RefreshOutline /> Recreate</Button>
                        </div>
                    {/if}
                </div>
            {:else if screen == 1}
                <div class="row-start-2 lg:row-start-1 mt-4 xl:mt-8">
                    <div class="mb-6">
                        <Input id="first-name" placeholder="First Name" bind:value={firstName}/>
                    </div>
                    <div class="mb-6">
                        <Input id="last-name" placeholder="Last Name" bind:value={lastName} />
                    </div>
                    <div class="mb-6">
                        <Input id="address" placeholder="Address" bind:value={address} />
                    </div>
                    <div class="mb-6">
                        <Input id="email" placeholder="Email" bind:value={email} />
                    </div>
                    <Button color="blue" on:click={nextScreen}>Confirm</Button>
                    {#key showError}
                        {#key screen}
                            {#if showError}
                                <Toast dismissable color="red" class="mt-4">
                                    Please fill in all fields
                                </Toast>
                            {/if}
                        {/key}
                    {/key}
                </div>
            {:else}
                <div class="row-start-2 lg:row-start-1 mt-8">
                    <h1 class="text-xl mb-4">Your order is confirmed and will delivered shortly</h1>
                    <Button color="blue" on:click={reset}><RefreshOutline /> New order</Button>
                </div>
            {/if}
        
            <div class="grid grid-cols-1 auto-rows-auto row-start-1 lg:row-start-1 px-10 xl:px-20">
                {#each refs as ref,i}
                    <img src="{chosen[i]!=-1 ? menuItems[i][chosen[i]].media:blank}" alt="" bind:this={ref} class="w-full">
                {/each}
                <img src="{chosen[0]!=-1 ? menuItems[0][chosen[0]].media:blank}" alt="" class="w-full -scale-y-100">
            </div>
        </div>
    </div>
    
</div>

<style>
    @media only screen and (max-width: 1024px) {
        #custom-grid {
            grid-template-rows: minmax(0, 1fr);
        }
    }
</style>