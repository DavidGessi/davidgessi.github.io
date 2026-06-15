<script>
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';

    let searchQuery = $state('');

    function handleSearch(event) {
        event.preventDefault();
        
        if (searchQuery.trim() !== '') {
            goto(`${base}/search?q=${encodeURIComponent(searchQuery.trim())}`);
            searchQuery = ''; 
        }
    }
</script>

<form onsubmit={handleSearch} class="relative w-full max-w-sm">
    <input 
        type="text" 
        bind:value={searchQuery}
        placeholder="Cocktail suchen..." 
        class="w-full bg-neutral-900 text-white placeholder-neutral-500 pl-11 pr-4 py-2 rounded-2xl border border-neutral-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 text-sm"
    />
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
    </div>
</form>

<!-- Ohne Css
<script>
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';

    let searchQuery = $state('');

    function handleSearch(event) {
        event.preventDefault();
        
        if (searchQuery.trim() !== '') {
            goto(`${base}/search?q=${encodeURIComponent(searchQuery.trim())}`);
            searchQuery = ''; 
        }
    }
</script>

<form onsubmit={handleSearch}>
    <input 
        type="text" 
        bind:value={searchQuery}
        placeholder="Cocktail suchen..." 
    />
    <button type="submit">Suchen</button>
</form> -->