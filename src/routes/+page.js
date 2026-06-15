
export async function load({ fetch }) {
    const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    try {
        const requests = [
            fetch(apiUrl).then(res => {
                if (!res.ok) throw new Error('API Fehler');
                return res.json();
            }),
            fetch(apiUrl).then(res => {
                if (!res.ok) throw new Error('API Fehler');
                return res.json();
            }),
            fetch(apiUrl).then(res => {
                if (!res.ok) throw new Error('API Fehler');
                return res.json();
            })
        ];

        const responses = await Promise.all(requests);
        const randomCocktails = responses.map(data => data.drinks[0]);

        return {
            cocktails: randomCocktails
        };

    } catch (error) {
        console.error("Fehler beim Laden der Cocktails:", error);
        
        return {
            cocktails: [],
            errorMessage: "Die Cocktails konnten leider nicht geladen werden."
        };
    }
}