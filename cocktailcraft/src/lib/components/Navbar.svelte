<script>
    import { base } from '$app/paths';
    import SearchBar from './SearchBar.svelte';
</script>

<nav class="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 px-6 py-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <a href="{base}/" class="text-xl font-black tracking-tight text-white hover:text-orange-400 transition-colors">
            🍹 Cocktail<span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">Craft</span>
        </a>

        <div class="flex items-center gap-6 text-sm font-semibold text-neutral-400">
            <a href="{base}/" class="hover:text-white transition-colors">Home</a>
            <a href="{base}/cocktail/alcoholic" class="hover:text-white transition-colors">Alcoholic</a>
            <a href="{base}/cocktail/nonAlcoholic" class="hover:text-white transition-colors">Non-Alcoholic</a>
            <a href="{base}/favourites" class="hover:text-white transition-colors">Favoriten</a>
        </div>

        <SearchBar />
        
    </div>
</nav>

<!-- Ohne Css
<script>
    import { base } from '$app/paths';
    import SearchBar from './SearchBar.svelte';
</script>

<nav>
    <a href="{base}/">🍹 CocktailCraft</a>

    <div>
        <a href="{base}/">Home</a>
        <a href="{base}/cocktail/alcoholic">Alcoholic</a>
        <a href="{base}/cocktail/nonalcoholic">Non-Alcoholic</a>
    </div>

    <SearchBar />
</nav> -->