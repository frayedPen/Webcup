<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind

    import { Navbar, NavBrand,Input, NavLi, NavUl, Button, NavHamburger,Thumbnails,ButtonGroup,Card, Avatar, } from 'flowbite-svelte';

    import bottomBun from "$lib/img/bottomBun.jpg";
    import leaves from "$lib/img/leaves.jpg";
    import meat from "$lib/img/meat.jpg";
    import topBun from "$lib/img/topBun.jpg";

    const menuPages = new Array(4).fill(null);
    let visible = new Array(4).fill(false);
    visible[0] = true;

    let index = 0;

    function nextPage() {
        visible[index] = false;
        index++;
        visible[index] = true;
    }
</script>

<div class="h-screen bg-white w-full">
    <div class="grid grid-cols-2">

        <div class="text-black">
            {#if visible[0]}
                <!-- svelte-ignore missing-declaration -->
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="grid grid-rows-4 grid-cols-1">
                    <h1>The Base</h1>
                    <Button pill color="blue" on:click={nextPage}>Bread sandwich</Button>
                    <Button pill color="blue" on:click={nextPage}>Bun</Button>
                    <Button pill color="blue" on:click={nextPage}>Toast</Button>
                </div>
            {/if}

            {#if visible[1]}
            <!-- svelte-ignore missing-declaration -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="grid grid-rows-4 grid-cols-1">
                    <h1>Meat</h1>
                    <Button pill color="blue" on:click={nextPage}>Croc</Button>
                    <Button pill color="blue" on:click={nextPage}>Scorpion</Button>
                    <Button pill color="blue" on:click={nextPage}>Bison</Button>
                </div>
            {/if}

            {#if visible[2]}
            <!-- svelte-ignore missing-declaration -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="grid grid-rows-4 grid-cols-1">
                    <h1>Leaf</h1>
                    <Button pill color="blue" on:click={nextPage}>Tumbleweed</Button>
                    <Button pill color="blue" on:click={nextPage}>Wild flowers</Button>
                    <Button pill color="blue" on:click={nextPage}>Pine tree</Button>
                </div>
            {/if}

            {#if visible[3]}
            <!-- svelte-ignore missing-declaration -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="grid grid-rows-4 grid-cols-1">
                    <h1>Condiments</h1>
                    <Button pill color="blue" on:click={nextPage}>Snake oil</Button>
                    <Button pill color="blue" on:click={nextPage}>Petrol</Button>
                    <Button pill color="blue" on:click={nextPage}>Maple sirup</Button>
                </div>
            {/if}

        </div>
      
        <div class="grid grid-cols-1 auto-rows-auto">
            <img src="{topBun}" alt="">
            <img src="{leaves}" alt="">
            <img src="{meat}" alt="">
            <img src="{bottomBun}" alt="">
        </div>
    </div>
</div>