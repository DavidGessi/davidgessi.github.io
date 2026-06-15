export async function load ({fetch}){
    const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

    try{
            const response = await fetch(apiUrl);

            if(!response.ok){
                throw new Error('Api Fehler beim Laden der Cocktails')
            }

            const data = await response.json();

            const nonAlcoholicCocktails = data.drinks;

            return {
                cocktails: nonAlcoholicCocktails
            };
    }catch (error) {
        // Fehlerbehandlung für die Note
        console.error("Fehler beim Laden:", error);
        return {
            cocktails: [],
            errorMessage: "Die nicht Alkoholischen Cocktails konnten leider nicht geladen werden."
        }
    }
}