<footer>
	<div>
		<span class="copy">© {new Date().getFullYear()} Cham Manganti</span>
		<div class="links">
			<a href="https://github.com/chammanganti" target="_blank" rel="noopener">GitHub</a>
			<a href="https://linkedin.com/in/chammanganti" target="_blank" rel="noopener">LinkedIn</a>
			<a href="mailto:chammanganti@gmail.com">Email</a>
		</div>
		<span class="stack">built with SvelteKit · deployed on GitHub Pages</span>
	</div>
</footer>

<style>
	footer {
		border-top: 0.5px solid var(--bdr);
		padding: 1.5rem 2rem;
		margin-top: auto;
	}

	footer > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	@media (min-width: 768px) {
		footer > div {
			flex-direction: row;
			align-items: center;
			gap: 5rem;
		}
	}

	.copy {
		font-size: 12px;
		color: var(--ink3);
		font-family: var(--fm);
	}

	.links {
		display: flex;
		gap: 1.25rem;
	}

	.links > a {
		font-size: 12px;
		color: var(--ink3);
		text-decoration: none;
		transition: color 0.15s;
	}

	.links > a:hover {
		color: var(--ink);
	}

	.stack {
		font-size: 11px;
		color: var(--ink3);
		font-family: var(--fm);
	}
</style>
