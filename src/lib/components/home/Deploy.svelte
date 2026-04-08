<script lang="ts">
	import type { HealthResponse } from '$lib/types';
	import { isReady } from '$lib/utils/health';
	import { onMount } from 'svelte';

	const HEALTH_URL = 'https://hlbe.chammanganti.dev/hlh/health';
	const ACTION_URL = 'https://hlbe.chammanganti.dev/act';

	const { health = $bindable() }: { health: HealthResponse } = $props();

	let isDeploying = $state(false);
	let error = $state('');

	const areDemoAppsDeployed = $derived(
		isReady(health, 'demo-app-1') && isReady(health, 'demo-app-2')
	);

	async function fetchStatus(): Promise<void> {
		try {
			const healthRes = await fetch(HEALTH_URL);
			if (!healthRes.ok) return;
			const data = (await healthRes.json()) as HealthResponse;
			Object.assign(health, data);
		} catch {}
	}

	async function deploy(): Promise<void> {
		isDeploying = true;
		error = '';

		try {
			const res = await fetch(`${ACTION_URL}/deploy`, { method: 'POST' });

			if (!res.ok && res.status !== 202) {
				error = res.status === 409 ? 'already deployed' : 'deploy failed';
				return;
			}

			const maxRetries = 20;
			const intervalMs = 3000;

			for (let i = 0; i < maxRetries; i++) {
				await fetchStatus();
				if (areDemoAppsDeployed) break;
				await new Promise((r) => setTimeout(r, intervalMs));
			}

			if (!areDemoAppsDeployed) {
				error = 'deployment timed out';
			}
		} catch {
			error = 'could not reach homelab-action app';
		} finally {
			isDeploying = false;
		}
	}

	onMount(() => {
		fetchStatus();

		const interval = setInterval(fetchStatus, 30000);
		return () => clearInterval(interval);
	});
</script>

<div class="section">
	<div class="head">
		<h2>Deploy the demo apps</h2>
		<p>
			Trigger a live ArgoCD sync to spin up both apps into the cluster. Watch the diagram light up
			above once pods are running.
		</p>
		<p class="note">Note: Every 15 minutes the apps will be automatically removed.</p>
	</div>

	<div class="deploy">
		<div class="card">
			<div class="info">
				<div class="name">homelab demo</div>
				<div class="desc">namespace: demo</div>
			</div>
			<div class="state">
				<div class="dot {isDeploying ? 'pending' : areDemoAppsDeployed ? 'running' : ''}"></div>
				<span id="state-text">
					{#if isDeploying}
						deploying…
					{:else if areDemoAppsDeployed}
						running
					{:else}
						not deployed
					{/if}
				</span>
			</div>
			{#if error}
				<span class="error">{error}</span>
			{/if}
			<button class="btn-primary" onclick={deploy} disabled={isDeploying || areDemoAppsDeployed}
				>{isDeploying ? 'Deploying…' : 'Deploy'}</button
			>
		</div>
	</div>
</div>

<style>
	.deploy {
		background: var(--surf);
		border: 0.5px solid var(--bdr);
		border-radius: var(--border-radius-lg);
		padding: 1.25rem 1.5rem;
	}
	.deploy > .card {
		display: flex;
		flex-direction: column;
		align-items: right;
		gap: 1rem;
		flex-wrap: wrap;
	}
	@media (min-width: 768px) {
		.deploy > .card {
			display: flex;
			flex-direction: row;
			align-items: center;
		}
	}
	.deploy > .card > .info {
		flex: 1;
		min-width: 0;
	}
	.deploy > .card > .info > .name {
		font-size: 13px;
		font-weight: 500;
		font-family: var(--fm);
	}
	.deploy > .card > .info > .desc {
		font-size: 12px;
		color: var(--ink3);
		margin-top: 2px;
	}
	.deploy > .card > .state {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 12px;
		color: var(--ink2);
	}
	.deploy > .card > .state > .dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--bdr2);
		flex-shrink: 0;
		transition: background 0.3s;
	}
	.deploy > .card > .state > .dot.pending {
		background: #ef9f27;
		animation: blink 1s step-end infinite;
	}
	.deploy > .card > .state > .dot.running {
		background: #639922;
	}
	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
	.deploy > .card > .error {
		font-size: 12px;
		color: var(--red-txt);
		font-family: var(--fm);
	}
</style>
