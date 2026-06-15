<script>
    import CocktailCard from '$lib/components/CocktailCard.svelte';
    
    let { data } = $props();
    let cocktails = $derived(data.cocktails);
    let query = $derived(data.query);
</script>

<div class="min-h-screen text-neutral-200 font-sans pb-24">
    <main class="max-w-6xl mx-auto px-6 pt-12">
        
        <h1 class="text-3xl font-black text-white mb-2">
            Suchergebnisse für: <span class="text-orange-400">"{query}"</span>
        </h1>
        <p class="text-neutral-500 mb-10">{cocktails.length} passende Cocktails gefunden</p>

        {#if cocktails.length === 0}
            <div class="text-center py-12 bg-neutral-900 rounded-3xl border border-neutral-800">
                <p class="text-neutral-400 text-lg">Leider keine Cocktails mit diesem Namen gefunden.</p>
            </div>
        {:else}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each cocktails as drink (drink.idDrink)}
                    <CocktailCard cocktail={drink} />
                {/each}
            </div>
        {/if}
        
    </main>
</div>


<!-- Ohne Css
<script>
    import CocktailCard from '$lib/components/CocktailCard.svelte';
    
    let { data } = $props();
    let cocktails = $derived(data.cocktails);
    let query = $derived(data.query);
</script>

<div>
    <main>
        <h1>Suchergebnisse für: "{query}"</h1>
        <p>{cocktails.length} passende Cocktails gefunden</p>

        {#if cocktails.length === 0}
            <div>
                <p>Leider keine Cocktails mit diesem Namen gefunden.</p>
            </div>
        {:else}
            <div>
                {#each cocktails as drink (drink.idDrink)}
                    <CocktailCard cocktail={drink} />
                {/each}
            </div>
        {/if}
    </main>
</div> -->