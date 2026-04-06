<script lang="ts">
	const homeHref = (import.meta.env.BASE_URL ?? '/') as string;
</script>

<header>
	<nav class="navbar">
		<a href={homeHref} class="brand">
			<div class="logo">
				<svg width="44" height="44" viewBox="0 0 44 44" fill="none">
					<circle cx="22" cy="22" r="16" stroke="#007aff" stroke-width="3" />
					<line
						x1="22"
						y1="22"
						x2="22"
						y2="6"
						stroke="#007aff"
						stroke-width="3"
						stroke-linecap="round"
						transform="rotate(45 22 22)"
					/>
					<circle cx="22" cy="6.3" r="4" fill="#007aff" transform="rotate(45 22 22)" />
				</svg>
			</div>
			<span class="name">Cham Manganti</span>
		</a>
		<div class="links">
			<a href="https://github.com/chammanganti" target="_blank" rel="noopener" aria-label="GitHub">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
					<path
						d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
					/>
				</svg>
			</a>
		</div>
	</nav>
</header>

<style>
	.navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.75rem 1rem;
		border-bottom: 0.5px solid var(--bdr);
	}
	@media (min-width: 768px) {
		.navbar {
			padding: 1rem 2rem;
		}
	}
	.navbar > .brand {
		display: flex;
		align-items: center;
		gap: 10px;
		text-decoration: none;
		color: inherit;
	}

	.navbar > .brand:hover .name {
		color: var(--ink2);
		transition: color 0.15s;
	}
	.navbar .logo {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 28px;
		height: 28px;
		border-radius: 6px;
	}
	.navbar .logo > svg {
		width: 24px;
		height: 24px;
	}
	.navbar .name {
		font-size: 15px;
		font-weight: 500;
		letter-spacing: -0.01em;
	}
	.navbar > .links {
		display: flex;
	}
	.navbar > .links > a {
		color: var(--ink3);
		display: flex;
		align-items: center;
		transition: color 0.15s;
	}
	.navbar > .links > a:hover {
		color: var(--ink);
	}
</style>
