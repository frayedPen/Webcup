<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind
    
    import BravoNavbar from '$lib/compo/BravoNavbar.svelte';
</script>

<BravoNavbar />

<slot />

<style>
    :global(body) {
        /* background-color: black; */
        margin: 0;
    }
</style>