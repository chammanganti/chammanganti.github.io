<script lang="ts">
	const homeHref = (import.meta.env.BASE_URL ?? '/') as string;
</script>

<svelte:head>
	<title>404 Not Found</title>
</svelte:head>

<section
	class="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center"
>
	<h1 class="mb-3 text-5xl font-bold text-slate-800 dark:text-slate-200">404</h1>
	<p class="mb-6 text-lg text-slate-600 dark:text-slate-400">
		This page drifted from the desired state. Maybe it skipped the deploy.
	</p>
	<a
		href={homeHref}
		class="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800/40"
	>
		<span>Go back home</span>
	</a>
</section>
