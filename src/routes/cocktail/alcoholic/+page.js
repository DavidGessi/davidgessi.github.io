export async function load ({fetch}){
    const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';

    try{
            const response = await fetch(apiUrl);

            if(!response.ok){
                throw new Error('Api Fehler beim Laden der Cocktails')
            }

            const data = await response.json();

            const alcoholicCocktails = data.drinks;

            return {
                cocktails: alcoholicCocktails
            };
    }catch (error) {
        // Fehlerbehandlung für die Note
        console.error("Fehler beim Laden:", error);
        return {
            cocktails: [],
            errorMessage: "Die alkoholischen Cocktails konnten leider nicht geladen werden."
        }
    }
}