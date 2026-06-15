<script>
    import { base } from '$app/paths';
    import FavoriteButton from '$lib/components/FavoriteButton.svelte';
    
    let { data } = $props();
    
    let cocktail = data.cocktail;
    let ingredients = data.ingredients;
    let errorMessage = data.errorMessage;
</script>

<div class="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-orange-500/30 pb-24">
    
    <div class="pt-16 pb-8 px-6 max-w-6xl mx-auto">
        
        <a href="{base}/" class="inline-flex items-center text-sm font-semibold text-neutral-400 hover:text-orange-400 transition-colors duration-300 mb-8">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Zurück zur Übersicht
        </a>

        {#if errorMessage}
            <div class="bg-red-900/20 text-red-400 p-8 rounded-3xl border border-red-900/50 font-medium text-center">
                {errorMessage}
            </div>
        {:else if cocktail}
            <div class="bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
                
                <div class="grid grid-cols-1 md:grid-cols-2">
                    
                    <div class="relative h-96 md:h-auto md:min-h-[600px] overflow-hidden bg-neutral-800">
                        <img 
                            src={cocktail.strDrinkThumb} 
                            alt={cocktail.strDrink} 
                            class="absolute inset-0 w-full h-full object-cover" 
                        />
                        <div class="absolute top-6 left-6 flex flex-wrap gap-2">
                            <span class="px-4 py-2 bg-black/70 backdrop-blur-md text-xs font-bold uppercase tracking-wider rounded-full text-white shadow-lg border border-white/10">
                                {cocktail.strCategory}
                            </span>
                            <span class="px-4 py-2 bg-orange-500/90 backdrop-blur-md text-xs font-bold uppercase tracking-wider rounded-full text-white shadow-lg border border-orange-400/20">
                                {cocktail.strAlcoholic}
                            </span>
                        </div>
                    </div>

                    <div class="p-8 md:p-12 flex flex-col justify-center">
                        
                        <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
                            <h1 class="text-4xl md:text-5xl font-black text-white leading-tight">
                                {cocktail.strDrink}
                            </h1>
                            
                            <div class="shrink-0 sm:mt-2">
                                <FavoriteButton cocktailId={cocktail.idDrink} />
                            </div>
                        </div>

                        <div class="mb-10">
                            <h2 class="text-xl font-bold text-neutral-300 mb-5 flex items-center">
                                <svg class="w-6 h-6 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                Zutaten
                            </h2>
                            
                            <ul class="space-y-3">
                                {#each ingredients as item}
                                    <li class="flex justify-between items-center bg-neutral-950/50 px-5 py-3.5 rounded-2xl border border-neutral-800/50 hover:border-neutral-700 transition-colors">
                                        <span class="font-medium text-white text-lg">{item.name}</span>
                                        <span class="text-orange-400 font-bold bg-orange-500/10 px-3 py-1 rounded-lg">{item.amount}</span>
                                    </li>
                                {/each}
                            </ul>
                        </div>

                        <div class="mb-10">
                            <h2 class="text-xl font-bold text-neutral-300 mb-5 flex items-center">
                                <svg class="w-6 h-6 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                Zubereitung
                            </h2>
                            <p class="text-neutral-400 leading-relaxed text-lg bg-neutral-950/30 p-6 rounded-2xl border border-neutral-800/30">
                                {#if cocktail.strInstructionsDE}
                                    {cocktail.strInstructionsDE}
                                {:else}
                                    {cocktail.strInstructions}
                                {/if}
                            </p>
                        </div>

                        <div>
                            <div class="inline-flex items-center bg-neutral-950 rounded-2xl px-6 py-4 border border-neutral-800">
                                <div class="mr-4 text-neutral-500">
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 6v2a2 2 0 002 2h12a2 2 0 002-2V6M4 6l2-4h12l2 4M10 10v10a2 2 0 002 2h0a2 2 0 002-2V10"></path></svg>
                                </div>
                                <div>
                                    <span class="block text-sm text-neutral-500 mb-0.5 uppercase tracking-wider font-bold">Servieren in</span>
                                    <span class="font-bold text-white text-lg">{cocktail.strGlass}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>
<!-- Version ohne Css
<script>
    import { base } from '$app/paths';
    // NEU: Den Button importieren
    import FavoriteButton from '$lib/components/FavoriteButton.svelte';
    
    let { data } = $props();
    
    let cocktail = data.cocktail;
    let ingredients = data.ingredients;
    let errorMessage = data.errorMessage;
</script>

<div>
    {#if errorMessage}
        <p>{errorMessage}</p>
        <a href="{base}/">Zurück zur Startseite</a>
    {:else if cocktail}
        <a href="{base}/">Zurück zur Startseite</a>
        
        <h1>{cocktail.strDrink}</h1>
        
        <FavoriteButton cocktailId={cocktail.idDrink} />
        
        <p>Kategorie: {cocktail.strCategory} | {cocktail.strAlcoholic}</p>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width="300" />

        {/if}
</div> -->