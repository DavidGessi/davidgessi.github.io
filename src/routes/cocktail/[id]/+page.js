export async function load({ fetch, params }) {
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`;

    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('API Fehler beim Laden der Cocktail-Details');
        }

        const data = await response.json();
        const cocktail = data.drinks[0];

        let ingredients = [];
        for (let i = 1; i <= 15; i++) {
            let ingredientName = cocktail[`strIngredient${i}`];
            let ingredientAmount = cocktail[`strMeasure${i}`];

            if (ingredientName && ingredientName.trim() !== "") {
                ingredients.push({
                    name: ingredientName,
                    amount: ingredientAmount ? ingredientAmount : ""
                });
            }
        }

        return {
            cocktail: cocktail,
            ingredients: ingredients
        };

    } catch (error) {
        console.error("Fehler beim Laden der Details:", error);
        return {
            cocktail: null,
            ingredients: [],
            errorMessage: "Die Details für diesen Cocktail konnten leider nicht geladen werden."
        };
    }
}