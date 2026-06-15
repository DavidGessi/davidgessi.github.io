export async function load({ fetch, url }) {
    const searchQuery = url.searchParams.get('s') || '';
    // Parameter jetzt 'category' nennen
    const filterCategory = url.searchParams.get('category') || 'all'; 

    let cocktails = [];
    let errorMessage = null;

    if (searchQuery) {
        try {
            const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`);
            const data = await res.json();
            
            if (data.drinks) {
                // HIER IST DIE ANPASSUNG: Wir prüfen jetzt drink.strCategory
                if (filterCategory === 'all') {
                    cocktails = data.drinks;
                } else {
                    cocktails = data.drinks.filter(drink => drink.strCategory === filterCategory);
                }
                
                if (cocktails.length === 0) {
                    errorMessage = "Keine passenden Drinks für diese Kategorie gefunden.";
                }
            } else {
                errorMessage = "Keine Drinks zu diesem Suchbegriff gefunden.";
            }
        } catch (error) {
            errorMessage = "Fehler beim Laden der Daten. Bitte überprüfe deine Verbindung.";
        }
    }

    return {
        cocktails,
        errorMessage,
        searchQuery,
        filterCategory
    };
}