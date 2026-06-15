<script>
	import CocktailCard from '$lib/components/CocktailCard.svelte';
	import { base } from '$app/paths';

	let { data } = $props();
	let cocktails = data.cocktails;
	let errorMessage = data.errorMessage;
</script>

<div
	class="min-h-screen bg-neutral-950 pb-24 font-sans text-neutral-200 selection:bg-orange-500/30"
>
	<header class="mx-auto max-w-5xl px-6 pt-24 pb-16 text-center">
		<h1 class="mb-6 text-5xl font-black tracking-tight text-white md:text-7xl">
			Dein nächster <br class="hidden md:block" />
			<span class="bg-gradient-to-br from-orange-400 to-rose-500 bg-clip-text text-transparent"
				>Lieblings-Drink.</span
			>
		</h1>
		<p class="mx-auto max-w-2xl text-lg font-medium text-neutral-400">
			Entdecke inspirierende Rezepte und mixe beeindruckende Cocktails ganz einfach bei dir zu
			Hause.
		</p>

		<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a
				href="{base}/cocktail/alcoholic"
				class="w-full rounded-2xl border border-neutral-800 bg-neutral-900 px-8 py-3.5 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-rose-500 hover:shadow-orange-500/25 sm:w-auto"
			>
				Alcoholic Cocktails
			</a>

			<a
				href="{base}/cocktail/nonAlcoholic"
				class="w-full rounded-2xl border border-neutral-800 bg-neutral-900 px-8 py-3.5 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-rose-500 hover:shadow-orange-500/25 sm:w-auto"
			>
				Non-Alcoholic Cocktails
			</a>
		</div>
	</header>

	<main class="mx-auto max-w-6xl px-6">
		<div class="mb-10 flex items-center justify-between">
			<h2 class="text-2xl font-bold tracking-tight text-white">Aktuelle Empfehlungen</h2>
			<div class="ml-6 h-px flex-grow bg-neutral-800"></div>
		</div>

		{#if errorMessage}
			<div
				class="rounded-2xl border border-red-900/50 bg-red-900/20 p-6 text-center font-medium text-red-400"
			>
				{errorMessage}
			</div>
		{:else}
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each cocktails as drink (drink.idDrink)}
					<CocktailCard cocktail={drink} />
				{/each}
			</div>
		{/if}
	</main>
</div>
