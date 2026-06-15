<script>
    import { browser } from '$app/environment';
    import { base } from '$app/paths';
    import CocktailCard from '$lib/components/CocktailCard.svelte';

    let favoriteCocktails = $state([]);
    let isLoading = $state(true);

    $effect(() => {
        if (browser) {
            loadFavorites();
        }
    });

    async function loadFavorites() {
        const savedIds = JSON.parse(localStorage.getItem('favorites') || '[]');
        
        if (savedIds.length === 0) {
            isLoading = false;
            return;
        }

        let loadedDrinks = [];
        for (let id of savedIds) {
            try {
                const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await res.json();
                if (data && data.drinks) {
                    loadedDrinks.push(data.drinks[0]);
                }
            } catch (error) {
                console.error("Fehler beim Laden von Favorit", id);
            }
        }
        
        favoriteCocktails = loadedDrinks;
        isLoading = false;
    }
</script>

<div class="min-h-screen bg-neutral-950 text-neutral-200 font-sans pb-24">
    
    <header class="pt-12 pb-10 px-6 max-w-6xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-black tracking-tight mb-3 text-white">
            Meine <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Favoriten</span>
        </h1>
        <p class="text-neutral-400 font-medium">
            Deine persönlichen Lieblings-Drinks auf einen Blick.
        </p>
    </header>

    <main class="max-w-6xl mx-auto px-6">
        {#if isLoading}
            <div class="text-center py-20">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
                <p class="mt-4 text-neutral-400">Lade Favoriten...</p>
            </div>
        {:else if favoriteCocktails.length === 0}
            <div class="text-center py-16 bg-neutral-900 rounded-3xl border border-neutral-800 shadow-xl max-w-2xl mx-auto">
                <p class="text-neutral-400 text-lg mb-6">Du hast noch keine Favoriten gespeichert.</p>
                <a href="{base}/" class="inline-flex px-6 py-3 bg-neutral-800 border border-neutral-700 text-white font-semibold rounded-2xl hover:bg-orange-500 hover:border-transparent transition-all duration-300 text-sm">
                    Cocktails entdecken
                </a>
            </div>
        {:else}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                {#each favoriteCocktails as drink (drink.idDrink)}
                    <CocktailCard cocktail={drink} />
                {/each}
            </div>
        {/if}
    </main>
</div>