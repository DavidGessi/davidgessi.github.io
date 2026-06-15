<script>
    import CocktailCard from '$lib/components/CocktailCard.svelte';
    
    let { data } = $props();
</script>

<div class="w-full max-w-7xl mx-auto px-4 py-8">
    
    <div class="mb-10">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
            Suchergebnisse für: <span class="text-orange-500">"{data.searchQuery}"</span>
        </h1>
        
        {#if data.cocktails && data.cocktails.length > 0}
            <p class="text-neutral-400">
                {data.cocktails.length} passende Cocktails gefunden
                {#if data.filterCategory !== 'all'}
                    <span class="text-neutral-500 text-sm ml-2">(Kategorie: {data.filterCategory})</span>
                {/if}
            </p>
        {:else}
            <p class="text-neutral-400">0 passende Cocktails gefunden</p>
        {/if}
    </div>

    {#if data.errorMessage}
        <div class="bg-[#1a1a1a] border border-neutral-800 rounded-2xl p-12 text-center mt-8 shadow-lg">
            <p class="text-neutral-300 text-lg">{data.errorMessage}</p>
        </div>
    {/if}

    {#if data.cocktails && data.cocktails.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each data.cocktails as cocktail}
                <CocktailCard {cocktail} />
            {/each}
        </div>
    {/if}

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