<!-- Our locations -->

<script>
    // @ts-nocheck
    import "$lib/app.css"; //tailwind
    import MapImg from "$lib/img/map.png";
    import BravoFooter from '$lib/compo/BravoFooter.svelte';
    import BravoNavbar from '$lib/compo/BravoNavbar.svelte';
</script>

<BravoNavbar />

<!--1st section-->
<div class="bg-primary-200">
    <h1 class="pt-32 pb-32 text-5xl lg:text-5xl font-bold text-center">
        Hours & Location
    </h1>
</div>

<!--2nd section-->
<div class="grid grid-cols-2 px-96 pt-14">
    <div class="flex flex-col justify-center gap-10">
        <div>
            <h1 class="font-bold">Opening and Closing hours</h1>
            <h2 class="pt-5 font-semibold">Brunch</h2>
            <p>Saturdays & Sundays: </p>
            <div> 10:30 am - 03:00 pm</div>
        </div>
        <div>
            <h2 class="pt-5 font-semibold">Dinner</h2>
            <p>Mondays to Sundays: </p>
            <p>05:30 pm - 10:00 pm</p>
        </div>
        <div>
            <h2 class="pt-5 font-semibold">Happy Hour</h2>
            <p>Fridays only:</p>
            <p>04:00 pm - 08:00 pm</p>
        </div>
    </div>
    <div>
        <img alt="Map img" class="" src={MapImg}/>
    </div>
</div>

<!--3rd section-->
<div class="px-96 pb-5 grid grid-cols-2">
    <div>
        <h1 class="pt-5 font-semibold">Address</h1>
        <p>635 Cactus St, Virginia City, MT 59788</p>
        <p>3891 Masonic Drive, Billings, MT 59102</p>
        <p>1856 Seltice Way, Owyhee, ID 89832</p>
        <p> 2987 Brooklyn Street, Eugene, OR 97401</p>
        <p>2537 Clearview Drive, Greenwood Village, CO 80111</p>
    </div>
    <div>
        <h1 class="pt-5 font-semibold">Contact Us</h1>
        <p>Phone number:</p>
        <p>+406-854-9503</p>
        <p class="pt-2">Email:</p>
        <p>restofarwest@bravo6.com</p>
    </div>
</div>

<!-- Footer -->
<BravoFooter />