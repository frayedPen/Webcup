<script>
    import { Footer,FooterLinkGroup,FooterBrand, FooterLink, Input, Button, } from 'flowbite-svelte';
    import instagram from '$lib/img/instagram white.png';
    import x from '$lib/img/x white.png';
    import facebook from '$lib/img/facebook white.png';
    import logo from '$lib/img/logo transparent.png';

    const socials = [instagram, x, facebook, ];
    
    import {onMount} from 'svelte';

    onMount(
        (()=>{"use strict";var e;const t="https://bff.ecoindex.fr",n=document.getElementById("ecoindex-badge"),r="light",o=(null!==(e=null==n?void 0:n.getAttribute("data-theme"))&&void 0!==e?e:r)===r,d=window.location.href,i="#0d2e38",a=o?i:"#fff",l=o?"#eee":i;(()=>{if(!n)return;n.style.display="none";const e=`${t}/redirect/?url=${d}`,r="Résultat analyse écoIndex : ",o="badge écoIndex : ";let i=r+"Page non mesurée",s=o+"page non mesurée",c="?",u="grey";fetch(`${t}/api/results/?url=${d}`,{method:"GET"}).then((e=>e.ok?e.json():new Promise(((e,t)=>t(`Erreur dans l'appel à l'écoindex de : ${d}`))))).then((e=>{const t=e["latest-result"],n=t.grade;i=r+n,s=o+"résultat analyse = "+n,c=n,u=t.color})).catch(console.error).finally((()=>{const t=(e=>{const t=document.createElement("span");return t.setAttribute("id","ecoindex-badge-letter"),t.append(e),t})(c),r=((e,t,n)=>{const r=document.createElement("a");return r.setAttribute("href",e),r.setAttribute("target","_blank"),r.setAttribute("rel","noreferrer"),r.setAttribute("id","ecoindex-badge-link"),r.setAttribute("title",t),r.setAttribute("aria-label",n),r.append("Ecoindex"),r})(e,i,s),o=(e=>{const t=document.createElement("style"),n=`#ecoindex-badge{font-family:Arial,sans-serif;width:108px}#ecoindex-badge-link{align-items:center;border-radius:1.3em;display:flex;font-size:13px;gap:.85em;padding:.5em .5em .5em .8em;text-decoration:none;background-color:${l};color:${a};}#ecoindex-badge-letter{align-items:center;border-radius:50%;color:#fff;display:flex;font-size:11px;font-weight:700;height:22px;justify-content:center;width:22px;background-color:${e}};`;return t.append(n),t})(u);r.appendChild(t),n.appendChild(o),n.appendChild(r),n.style.display=""}))})()})
    )
</script>

<Footer class="bg-primary-400 py-4 px-2 z-50 relative md:px-10 xl:px-40 overflow-x-hidden">
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
        
        <div class="col-start-4 row-start-1">
            <div id="ecoindex-badge" class="-space-y-2 mb-10"></div>
            <h1 class="text-white text-lg lg:text-2xl">Get the latest Newsletter</h1>
            <FooterLinkGroup ulClass="text-gray-300 text-xs lg:text-sm flex gap-5">
                <Input placeholder="Email Address" />
                <Button pill color="dark" class="w-40">Sign up</Button>
            </FooterLinkGroup>
        </div>
    </div>
</Footer>