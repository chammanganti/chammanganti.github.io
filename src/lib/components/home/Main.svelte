<script lang="ts">
	import type { HealthResponse } from '$lib/types';
	import { isReady, nodeClass } from '$lib/utils/health';

	const { health }: { health: HealthResponse } = $props();
</script>

<div class="main">
	<div class="content">
		<h1>DevOps Engineer</h1>
		<div class="lines">
			<div>
				Automates infrastructure and build CI/CD pipelines that actually hold up in production.
			</div>
			<div>Works across containers, cloud, IaC, and observability — end to end.</div>
			<div>Ships small experiments on the side. Stay curious, stay sharp.</div>
		</div>
		<div class="chips">
			<span>Kubernetes</span>
			<span>Docker</span>
			<span>CI/CD</span>
			<span>AWS</span>
			<span>Terraform</span>
			<span>programming</span>
			<span>scripting</span>
		</div>
	</div>

	<div class="homelab">
		<div class="label">homelab · rpi 4b · k3s</div>
		<div class="topology">
			<div class="node">
				<div class="icon">
					<svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
						<circle cx="20" cy="20" r="16" stroke-width="1.5" />
						<ellipse cx="20" cy="20" rx="7" ry="16" stroke-width="1.5" />
						<line x1="4" y1="20" x2="36" y2="20" stroke-width="1.5" />
						<path d="M6 13h28M6 27h28" stroke-width="1.2" stroke-linecap="round" />
					</svg>
				</div>
				<div class="info">
					<div class="name">internet</div>
					<div class="desc">You</div>
				</div>
			</div>
			<div class="wire"></div>
			<div class="node">
				<div class="icon">
					<svg viewBox="0 0 36 42" fill="none" stroke="currentColor" stroke-width="2.5">
						<path d="M18 1L33 8V20C33 29 26.5 37 18 41C9.5 37 3 29 3 20V8L18 1Z" />
					</svg>
				</div>
				<div class="info">
					<div class="name">cloudflare</div>
					<div class="desc">zero trust · tunnel</div>
				</div>
				<span class={nodeClass(isReady(health, 'homelab-health'))}>
					{isReady(health, 'homelab-health') ? 'up' : 'unknown'}
				</span>
			</div>
			<div class="wire"></div>
			<div class="node">
				<div class="icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
						><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path
							d="M2 12l10 5 10-5"
						/></svg
					>
				</div>
				<div class="info">
					<div class="name">traefik</div>
					<div class="desc">ingress · TLS termination</div>
				</div>
				<span class={nodeClass(isReady(health, 'traefik'))}>
					{isReady(health, 'traefik') ? 'running' : 'unknown'}
				</span>
			</div>
			<div class="wire"></div>
			<div class="node">
				<div class="icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
						><circle cx="12" cy="12" r="3" /><path
							d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"
						/></svg
					>
				</div>
				<div class="info">
					<div class="name">argocd</div>
					<div class="desc">GitOps · app sync</div>
				</div>
				<span class={nodeClass(isReady(health, 'argocd'))}>
					{isReady(health, 'argocd') ? 'running' : 'unknown'}
				</span>
			</div>
			<div class="fork">
				<div class="wire"></div>
				<div class="wire"></div>
				<div class="wire"></div>
				<div class="wire"></div>
			</div>
			<div class="fork">
				<div class="node">
					<div class="icon">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
							><path
								d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
							/></svg
						>
					</div>
					<div class="info">
						<div class="name">health</div>
						<div class="desc">go</div>
					</div>
					<span class="status-dot {isReady(health, 'homelab-health') ? 'up' : 'down'}"></span>
				</div>
				<div class="node">
					<div class="icon">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
							><path
								d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
							/></svg
						>
					</div>
					<div class="info">
						<div class="name">action</div>
						<div class="desc">go</div>
					</div>
					<span class="status-dot {isReady(health, 'homelab-action') ? 'up' : 'down'}"></span>
				</div>
				<div class="node">
					<div class="icon">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
							><path
								d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
							/></svg
						>
					</div>
					<div class="info">
						<div class="name">demo-app-1</div>
						<div class="desc">demo · go</div>
					</div>
					<span class="status-dot {isReady(health, 'demo-app-1') ? 'up' : 'down'}"></span>
				</div>
				<div class="node">
					<div class="icon">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
							><path
								d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
							/></svg
						>
					</div>
					<div class="info">
						<div class="name">demo-app-2</div>
						<div class="desc">demo · go</div>
					</div>
					<span class="status-dot {isReady(health, 'demo-app-2') ? 'up' : 'down'}"></span>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.main {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		align-items: center;
		padding: 3.5rem 2rem 2.5rem;
	}
	@media (min-width: 768px) {
		.main {
			grid-template-columns: 1fr 1fr;
			gap: 3rem;
		}
	}
	.main > .content > h1 {
		font-size: clamp(1.7rem, 4vw, 2.4rem);
		font-weight: 500;
		line-height: 1.2;
		letter-spacing: -0.03em;
		margin-bottom: 1rem;
	}
	.main > .content > .lines {
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
		margin-bottom: 1.5rem;
	}
	.main > .content > .lines > div {
		display: flex;
		align-items: baseline;
		gap: 0.6rem;
		font-size: 16px;
		color: var(--ink2);
		line-height: 1.25;
	}
	.main > .content > .lines > div::before {
		content: '—';
		color: var(--ink3);
		flex-shrink: 0;
		font-size: 14px;
	}
	.main > .content > .chips {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.main > .content > .chips > span {
		font-size: 11px;
		padding: 3px 10px;
		border-radius: 20px;
		border: 0.5px solid var(--bdr2);
		color: var(--ink2);
		font-family: var(--fm);
	}

	.homelab {
		background: var(--surf2);
		border: 0.5px solid var(--bdr);
		border-radius: var(--border-radius-lg);
		padding: 1.5rem;
	}
	.homelab > .label {
		font-size: 10px;
		color: var(--ink3);
		font-family: var(--fm);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-bottom: 1.25rem;
	}

	.topology {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
	}
	.topology > .node,
	.topology > .fork > .node {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		padding: 7px 10px;
		background: var(--surf);
		border: 0.5px solid var(--bdr);
		border-radius: var(--border-radius-md);
		width: 100%;
		text-align: center;
	}
	@media (min-width: 768px) {
		.topology > .node,
		.topology > .fork > .node {
			display: flex;
			flex-direction: row;
			text-align: left;
		}
	}
	.topology > .fork {
		display: grid;
		grid-template-columns: 1fr;
		gap: 8px;
		width: 100%;
	}
	@media (min-width: 768px) {
		.topology > .fork {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
	.topology > .node > .icon,
	.topology > .fork > .node > .icon {
		width: 28px;
		height: 28px;
		border-radius: 6px;
		background: var(--surf2);
		border: 0.5px solid var(--bdr);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	.topology > .node > .icon > svg,
	.topology > .fork > .node > .icon > svg {
		width: 14px;
		height: 14px;
	}
	.topology > .node > .info,
	.topology > .fork > .node > .info {
		flex: 1;
		min-width: 0;
	}
	.topology > .node > .info > .name,
	.topology > .fork > .node > .info > .name {
		font-size: 12px;
		font-weight: 500;
		font-family: var(--fm);
	}
	.topology > .node > .info > .desc,
	.topology > .fork > .node > .info > .desc {
		font-size: 10px;
		color: var(--ink3);
		margin-top: 1px;
	}
	.topology > .node > .badge {
		font-size: 10px;
		padding: 2px 7px;
		border-radius: 20px;
		font-family: var(--fm);
		white-space: nowrap;
	}
	.topology > .node > .badge.ok {
		background: var(--green-bg);
		color: var(--green-txt);
	}
	.topology > .node > .badge.off {
		background: var(--surf2);
		color: var(--ink3);
	}
	.topology > .wire,
	.topology > .fork > .wire {
		width: 2px;
		height: 14px;
		background: var(--bdr2);
		margin: 0 auto;
	}
	.topology > .fork > .wire:not(:first-child) {
		display: none;
	}
	@media (min-width: 768px) {
		.topology > .fork > .wire:not(:first-child) {
			display: block;
		}
	}
	.topology > .fork > .node > .status-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		flex-shrink: 0;
	}
	.topology > .fork > .node > .status-dot.up {
		background: #639922;
	}
	.topology > .fork > .node > .status-dot.down {
		background: var(--bdr2);
	}
</style>
