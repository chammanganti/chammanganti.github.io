<script lang="ts">
	const homeHref = (import.meta.env.BASE_URL ?? '/') as string;
</script>

<svelte:head>
	<title>404 — Cham Manganti</title>
</svelte:head>

<section class="error-page">
	<div class="code">404</div>
	<h1>Page not found</h1>
	<p>This page drifted from the desired state.<br />Maybe it skipped the deploy.</p>
	<a href={homeHref} class="btn-outline">← Go back home</a>
</section>

<style>
	.error-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 80vh;
		text-align: center;
		padding: 3rem 2rem;
		gap: 1rem;
	}

	.code {
		font-family: var(--fm);
		font-size: 11px;
		letter-spacing: 0.18em;
		color: var(--ink3);
		text-transform: uppercase;
		border: 0.5px solid var(--bdr2);
		padding: 3px 12px;
		border-radius: 20px;
		margin-bottom: 0.5rem;
	}

	h1 {
		font-size: clamp(1.4rem, 4vw, 1.8rem);
		font-weight: 500;
		letter-spacing: -0.03em;
		line-height: 1.2;
	}

	p {
		font-size: 14px;
		color: var(--ink2);
		line-height: 1.75;
	}

	a {
		margin-top: 0.5rem;
		background: transparent;
		color: var(--ink);
		border: 0.5px solid var(--bdr2);
		padding: 7px 16px;
		border-radius: var(--border-radius-md);
		font-size: 13px;
		text-decoration: none;
		transition: background 0.15s;
	}

	a:hover {
		background: var(--surf2);
	}
</style>
