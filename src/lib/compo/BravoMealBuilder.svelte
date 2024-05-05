<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind

    import { Navbar, NavBrand,Input, NavLi, NavUl, Button, NavHamburger,Thumbnails,ButtonGroup,Card, Avatar, } from 'flowbite-svelte';
    import {onMount} from 'svelte';
    import bottomBun from "$lib/img/bottomBun.jpg";
    import leaves from "$lib/img/leaves.jpg";
    import meat from "$lib/img/meat.jpg";
    import topBun from "$lib/img/topBun.jpg";
    import sandwich from "$lib/img/sandwich.jpg";
    import blank from "$lib/img/blank.jpg";

    import {fly,} from 'svelte/transition';

    const categories = 4;

    const options = {
        method: 'GET',
        // body: JSON.stringify( params ),
        headers: {
            'Accept': 'application/json'
        }
    };

    // const menuItems = [
    //     [ // Top of bun
    //         topBun,
    //         sandwich,
    //     ],[
    //         meat,
    //         leaves,
    //     ],[
    //         bottomBun,
    //         topBun,
    //         meat,
    //     ]
    // ];
    
    const menuItems = new Array(categories).fill(null).map(() => []);

    let loaded = false;

    onMount(async () => {
        const items = await fetch('https://bravo6.latchoomun.com/api/food_items?page=1', options).then((x) => x.json());

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

        console.log(menuItems);
    });

    const refs = new Array(categories).fill(null);

    let visible = new Array(categories).fill(false);
    let chosen = new Array(categories).fill(-1);
    visible[0] = true;
    let index = 0;

    function nextPage() {
        visible[index] = false;
        chosen[index] = this;
        index++;
        visible[index] = true; 
    }
</script>

<div class="w-full bg-accent2-400 z-50" id="order">
    <div class="grid grid-rows-2 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 p-10 lg:px-40 lg:py-10">

        <div class="row-start-2 lg:row-start-1 mt-8">
            {#key loaded}
                {#each menuItems as category, i}
                    {#if visible[i]}
                        <!-- svelte-ignore missing-declaration -->
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <div class="grid grid-rows-4 grid-cols-4 gap-2">
                            <h1 class="col-start-2 text-center text-xl col-span-2">The Base</h1>
                            {#each category as c, j}
                                <Button pill color="blue" on:click={nextPage.bind(j)} class="col-start-2 col-span-2">{c.name}</Button>                            
                            {/each}
                        </div>
                    {/if}
                {/each}
            {/key}
        </div>
      
        <div class="grid grid-cols-1 auto-rows-auto row-start-1 lg:row-start-1 px-20">
            {#each refs as ref,i}
                <img src="{chosen[i]!=-1 ? menuItems[i][chosen[i]].media:blank}" alt="" bind:this={ref} class="w-full">
            {/each}
            <img src="{chosen[0]!=-1 ? menuItems[0][chosen[0]].media:blank}" alt="" class="w-full -scale-y-100">
        </div>
    </div>
</div>