<script>
    import { base } from '$app/paths';
    import FavoriteButton from './FavoriteButton.svelte'; // NEU: Button importieren
    let { cocktail } = $props();
</script>

<div class="group relative flex flex-col bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 hover:border-neutral-700 hover:shadow-2xl hover:shadow-black/50 transition-all duration-500">
    
    <div class="relative h-64 overflow-hidden bg-neutral-800">
        <img 
            src={cocktail.strDrinkThumb} 
            alt={cocktail.strDrink} 
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
        />
        <div class="absolute top-4 left-4 z-10">
            <span class="px-3 py-1.5 bg-black/60 backdrop-blur-md text-xs font-bold uppercase tracking-wider rounded-full text-neutral-200 shadow-sm border border-white/10">
                {cocktail.strCategory}
            </span>
        </div>
        
        <div class="absolute top-3 right-3 z-10">
            <FavoriteButton cocktailId={cocktail.idDrink} />
        </div>
    </div>
    
    <div class="p-6 flex flex-col flex-grow">
        <h3 class="text-2xl font-bold text-white mb-2 leading-tight">
            {cocktail.strDrink}
        </h3>
        
        <div class="flex-grow"></div>
        
        <a 
            href="{base}/cocktail/{cocktail.idDrink}" 
            class="mt-6 inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-white bg-neutral-800 rounded-2xl hover:bg-orange-500 transition-colors duration-300 border border-neutral-700 hover:border-transparent"
        >
            Rezept ansehen
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
        </a>
    </div>
</div>