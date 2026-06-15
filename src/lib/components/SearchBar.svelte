<script>
    import { goto } from '$app/navigation';
    
    let searchQuery = $state('');
    let filterCategory = $state('all'); 
    let searchTimer;

    function triggerSearch() {
        clearTimeout(searchTimer);
        
        searchTimer = setTimeout(() => {
            if (searchQuery.trim()) {
                // keepFocus: true ist extrem wichtig, damit das Textfeld beim Tippen nicht den Fokus verliert!
                goto(`/search?s=${encodeURIComponent(searchQuery)}&category=${encodeURIComponent(filterCategory)}`, { keepFocus: true });
            }
        }, 500);
    }
</script>

<div class="flex flex-col lg:flex-row items-center gap-2 w-full lg:w-auto mt-4 lg:mt-0">
    
    <input 
        type="text" 
        bind:value={searchQuery} 
        oninput={triggerSearch}
        placeholder="Cocktail suchen..." 
        class="bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-orange-500 transition-colors w-full lg:w-56"
    />
    
    <select 
        bind:value={filterCategory} 
        onchange={triggerSearch}
        class="bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-orange-500 transition-colors cursor-pointer w-full lg:w-44"
    >
        <option value="all">Alle Kategorien</option>
        <option value="Cocktail">Cocktail</option>
        <option value="Ordinary Drink">Ordinary Drink</option>
        <option value="Shot">Shot</option>
        <option value="Punch / Party Drink">Punch / Party Drink</option>
        <option value="Shake">Shake</option>
        <option value="Beer">Beer</option>
        <option value="Soft Drink">Soft Drink</option>
    </select>
</div>

<!-- Ohne Css

-->