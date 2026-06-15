export async function load({ fetch, url }) {
    const query = url.searchParams.get('q') || '';
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`;

    if (!query) {
        return { cocktails: [], query };
    }

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Fehler bei der Suche');
        
        const data = await response.json();
        
        return {
            cocktails: data.drinks || [],
            query: query
        };
    } catch (error) {
        console.error(error);
        return {
            cocktails: [],
            query,
            errorMessage: 'Suche fehlgeschlagen.'
        };
    }
}