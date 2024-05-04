<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind

    import { Navbar, NavBrand,Input, NavLi, NavUl, Button, NavHamburger,Thumbnails,ButtonGroup,Card, Avatar, } from 'flowbite-svelte';

    import bottomBun from "$lib/img/bottomBun.jpg";
    import leaves from "$lib/img/leaves.jpg";
    import meat from "$lib/img/meat.jpg";
    import topBun from "$lib/img/topBun.jpg";
    import sandwich from "$lib/img/sandwich.jpg";
    import blank from "$lib/img/blank.jpg";

    const categories = 3;

    const menuItems = [
        [ // Top of bun
            topBun,
            sandwich,
        ],[
            meat,
            leaves,
        ],[
            bottomBun,
            topBun,
            meat,
        ]
    ]

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

<div class="bg-white w-full">
    <div class="grid grid-rows-2 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 p-10 lg:px-40 lg:py-20">

        <div class="row-start-2 lg:row-start-1 mt-8">
            {#if visible[0]}
                <!-- svelte-ignore missing-declaration -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="grid grid-rows-4 grid-cols-4 gap-2">
                    <h1 class="col-start-2 text-center text-xl col-span-2">The Base</h1>
                    <Button pill color="blue" on:click={nextPage.bind(0)} class="col-start-2 col-span-2">Top Bun</Button>
                    <Button pill color="blue" on:click={nextPage.bind(1)} class="col-start-2 col-span-2">sandwich</Button>
                </div>
            {/if}

            {#if visible[1]}
                <div class="grid grid-rows-4 grid-cols-1">
                    <h1>Meat</h1>
                    <Button pill color="blue" on:click={nextPage.bind(0)}>Meat</Button>
                    <Button pill color="blue" on:click={nextPage.bind(1)}>Leaf</Button>
                </div>
            {/if}

            {#if visible[2]}
                <div class="grid grid-rows-4 grid-cols-1">
                    <h1>Meat</h1>
                    <Button pill color="blue" on:click={nextPage.bind(0)}>Bottom bun</Button>
                    <Button pill color="blue" on:click={nextPage.bind(1)}>Top bun</Button>
                    <Button pill color="blue" on:click={nextPage.bind(2)}>meat</Button>
                </div>
            {/if}

        </div>
      
        <div class="grid grid-cols-1 auto-rows-auto row-start-1 lg:row-start-1 ">
            {#each refs as ref,i}
                <img src="{chosen[i]!=-1 ? menuItems[i][chosen[i]]:blank}" alt="" bind:this={ref} class="w-full">
            {/each}
        </div>
    </div>
</div>