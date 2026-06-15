<script>
    import { base } from '$app/paths';
    
    // Wir holen uns dynamisch das aktuelle Jahr
    let currentYear = new Date().getFullYear();
</script>

<footer class="bg-neutral-950 border-t border-neutral-900 py-8 text-neutral-500 text-sm mt-12">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p>&copy; {currentYear} CocktailCraft.</p>
        <p>Pictures and Data Provided By <a href="https://www.thecocktaildb.com" class="hover:text-orange-400 transition-colors">TheCocktailDB</a></p>
        
    </div>
</footer>