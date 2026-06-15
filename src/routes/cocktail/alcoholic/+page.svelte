<script>
    import CocktailCard from '$lib/components/CocktailCard.svelte';
    import { base } from '$app/paths';

    let { data } = $props();
    
    let cocktails = data.cocktails;
    let errorMessage = data.errorMessage;
</script>

<div class="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-orange-500/30 pb-24">
    
    <header class="pt-16 pb-12 px-6 max-w-5xl mx-auto text-center">
        <div class="mb-8">
            <a href="{base}/" class="inline-flex items-center text-sm font-semibold text-neutral-400 hover:text-orange-400 transition-colors duration-300">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Zurück zur Startseite
            </a>
        </div>

        <h1 class="text-4xl md:text-6xl font-black tracking-tight mb-4 text-white">
            Alkoholische <span class="text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-rose-500">Cocktails</span>
        </h1>
        <p class="text-lg text-neutral-400 max-w-2xl mx-auto font-medium">
            Entdecke unsere Sammlung an Drinks mit Schuss. Bitte verantwortungsvoll genießen!
        </p>
    </header>

    <main class="max-w-6xl mx-auto px-6">
        {#if errorMessage}
            <div class="bg-red-900/20 text-red-400 p-6 rounded-2xl border border-red-900/50 font-medium text-center">
                {errorMessage}
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