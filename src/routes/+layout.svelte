<script lang="ts">
	import '../app.css';
	import logo from '$lib/assets/logo.svg';

	const homeHref = (import.meta.env.BASE_URL ?? '/') as string;

	let { children } = $props();
</script>

<svelte:head>
	<title>Cham Manganti</title>
</svelte:head>

<header
	class="fixed top-0 right-0 left-0 z-50 bg-none from-slate-50 to-slate-100 p-6 pb-6 backdrop-blur-sm dark:from-slate-900 dark:to-slate-800"
>
	<nav class="flex items-center space-x-2">
		<a href={homeHref} class="flex items-center gap-2 no-underline">
			<img src={logo} alt="Logo" class="h-5 w-5 text-slate-700 dark:text-slate-300" />
			<h1 class="text-lg font-bold text-slate-800 dark:text-slate-200">Cham Manganti</h1>
		</a>
	</nav>
</header>
<div class="h-16 shrink-0"></div>

<main
	class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
>
	<div class="mx-auto px-6 pt-24">
		{@render children?.()}
	</div>
</main>
