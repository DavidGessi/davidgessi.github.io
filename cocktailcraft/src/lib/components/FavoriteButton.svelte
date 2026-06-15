<script>
    import { browser } from '$app/environment';
    let { cocktailId } = $props();
    let isFavorite = $state(false);

    $effect(() => {
        if (browser) {
            const saved = JSON.parse(localStorage.getItem('favorites') || '[]');
            isFavorite = saved.includes(cocktailId);
        }
    });

    function toggleFavorite(event) {
        event.preventDefault(); // Verhindert, dass andere Klick-Events ausgelöst werden
        if (!browser) return;
        
        let saved = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (isFavorite) {
            saved = saved.filter(id => id !== cocktailId);
            isFavorite = false;
        } else {
            saved.push(cocktailId);
            isFavorite = true;
        }
        localStorage.setItem('favorites', JSON.stringify(saved));
    }
</script>

<button 
    onclick={toggleFavorite} 
    class="p-2.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:scale-110 transition-all duration-300 shadow-lg group"
    title="Favorit umschalten"
>
    {#if isFavorite}
        <svg class="w-6 h-6 text-rose-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
    {:else}
        <svg class="w-6 h-6 text-white group-hover:text-rose-400 transition-colors" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
    {/if}
</button>