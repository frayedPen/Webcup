<script>
    import { Footer,FooterLinkGroup,FooterBrand, FooterLink, Input, Button, } from 'flowbite-svelte';
    import instagram from '$lib/img/instagram white.png';
    import x from '$lib/img/x white.png';
    import facebook from '$lib/img/facebook white.png';
    import logo from '$lib/img/logo transparent.png';

    const socials = [instagram, x, facebook, ];
</script>

<Footer class="bg-accent1-400 py-4 px-2 z-50 relative md:px-10 xl:px-40">
    <FooterBrand href="" imgClass="h-20" src="{logo}" alt="Logo" name="" />
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 py-4 mt-0">
        <div class="w-full row-start-1">
            <div class="text-white text-xl font-bold">Follow us</div>
            <div class="flex w-full max-w-20 pt-1 gap-2">
                {#each socials as social}
                    <img src="{social}" class="w-1/3" alt="instagram">
                {/each}
            </div>
        </div>

        <div class="col-start-4">
            <h1 class="text-white text-lg lg:text-2xl">Get the latest Newsletter</h1>
            <FooterLinkGroup ulClass="text-gray-300 text-xs lg:text-sm flex gap-5">
                <Input placeholder="Email Address" />
                <Button pill color="dark" class="w-40">Sign up</Button>
            </FooterLinkGroup>
        </div>
    </div>
</Footer>