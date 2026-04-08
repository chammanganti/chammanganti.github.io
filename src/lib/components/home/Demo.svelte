<script lang="ts">
	import type { HealthResponse } from '$lib/types';
	import { isReady } from '$lib/utils/health';

	const ACTION_URL = 'https://hlbe.chammanganti.dev/act';

	type InfoResponse = {
		hostname: string;
		os: string;
		arch: string;
		uptime: string;
		pod: string;
		node: string;
	};

	type EvenResponse = {
		number: number;
		is_even: boolean;
		message: string;
	};

	type AppResponse = {
		loading: boolean;
		data: string;
		ok: boolean;
		visible: boolean;
	};

	const { health }: { health: HealthResponse } = $props();

	let app1 = $state<AppResponse>({ loading: false, data: '', ok: false, visible: false });
	let app2 = $state<AppResponse>({ loading: false, data: '', ok: false, visible: false });
	let isEvenInput = $state<string | number>('');

	async function fetchInfo(): Promise<void> {
		app1.loading = true;
		app1.visible = true;
		app1.data = '';
		try {
			const res = await fetch(`${ACTION_URL}/demo/info`);
			if (res.ok) {
				const json = (await res.json()) as InfoResponse;
				app1.data = JSON.stringify(json, null, 2);
				app1.ok = true;
			} else {
				app1.data = `error: ${res.status}`;
				app1.ok = false;
			}
		} catch {
			app1.data = 'could not reach app-1';
			app1.ok = false;
		} finally {
			app1.loading = false;
		}
	}

	async function fetchIsEven(): Promise<void> {
		const n = isEvenInput;
		if (!n) return;

		app2.loading = true;
		app2.visible = true;
		app2.data = '';
		try {
			const res = await fetch(`${ACTION_URL}/demo/is-even/${encodeURIComponent(n)}`);
			if (res.ok) {
				const json = (await res.json()) as EvenResponse;
				app2.data = JSON.stringify(json, null, 2);
				app2.ok = true;
			} else if (res.status === 400) {
				app2.data = "that's not even a number";
				app2.ok = false;
			} else {
				app2.data = `error: ${res.status}`;
				app2.ok = false;
			}
		} catch {
			app2.data = 'could not reach app-2';
			app2.ok = false;
		} finally {
			app2.loading = false;
		}
	}

	function handleKeydown(e: KeyboardEvent): void {
		if (e.key === 'Enter') fetchIsEven();
	}
</script>

<div class="section">
	<div class="head">
		<h2>Test the apps</h2>
		<p>Once deployed, interact with both services.</p>
	</div>

	<div class="apps">
		<div class="card">
			<div class="header">
				<div class="title">demo-app-1</div>
				<div class="tag {isReady(health, 'demo-app-1') ? '' : 'disabled'}">
					{isReady(health, 'demo-app-1') ? 'running' : 'not running'}
				</div>
			</div>
			<div class="endpoint">GET /info</div>
			<div class="input">
				<button
					class="btn-outline btn-sm"
					onclick={fetchInfo}
					disabled={!isReady(health, 'demo-app-1') || app1.loading}
				>
					{app1.loading ? 'Sending…' : 'Send request'}
				</button>
			</div>
			{#if app1.visible}
				<div class="response visible {app1.ok ? 'ok' : 'err'}">
					<pre>{app1.data}</pre>
				</div>
			{/if}
		</div>

		<div class="card">
			<div class="header">
				<div class="title">demo-app-2</div>
				<div class="tag {isReady(health, 'demo-app-2') ? '' : 'disabled'}">
					{isReady(health, 'demo-app-2') ? 'running' : 'not running'}
				</div>
			</div>
			<div class="endpoint">GET /is-even/{'{number}'}</div>
			<div class="input">
				<input
					type="number"
					placeholder="Enter a number…"
					bind:value={isEvenInput}
					onkeydown={handleKeydown}
					disabled={!isReady(health, 'demo-app-2') || app2.loading}
				/>
				<button
					class="btn-outline btn-sm"
					onclick={fetchIsEven}
					disabled={!isReady(health, 'demo-app-2') ||
						app2.loading ||
						isEvenInput === '' ||
						isEvenInput === null}
				>
					{app2.loading ? 'Sending…' : 'Send request'}
				</button>
			</div>
			{#if app2.visible}
				<div class="response visible {app2.ok ? 'ok' : 'err'}">
					<pre>{app2.data}</pre>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.apps {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}
	@media (min-width: 768px) {
		.apps {
			grid-template-columns: 1fr 1fr;
		}
	}
	.apps > .card {
		background: var(--surf);
		border: 0.5px solid var(--bdr);
		border-radius: var(--border-radius-lg);
		padding: 1.25rem 1.5rem;
	}
	.apps > .card > .header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1rem;
	}
	.apps > .card > .header > .title {
		font-size: 13px;
		font-weight: 500;
	}
	.apps > .card > .header > .tag {
		font-size: 10px;
		padding: 2px 8px;
		border-radius: 20px;
		font-family: var(--fm);
		background: var(--green-bg);
		color: var(--green-txt);
	}
	.apps > .card > .header > .tag.disabled {
		background: var(--surf2);
		color: var(--ink3);
	}
	.apps > .card > .endpoint {
		font-size: 11px;
		color: var(--ink3);
		font-family: var(--fm);
		margin-bottom: 1rem;
		padding: 6px 8px;
		background: var(--surf2);
		border-radius: var(--border-radius-md);
	}
	.apps > .card > .input {
		display: flex;
		flex-direction: column;
		gap: 8px;
		align-items: left;
	}
	@media (min-width: 768px) {
		.apps > .card > .input {
			display: flex;
			flex-direction: row;
			align-items: center;
		}
	}
	.apps > .card > .input > input {
		flex: 1;
		padding: 5px 12px;
		font-size: 12px;
	}
	.apps > .card > .response {
		margin-top: 0.75rem;
		background: var(--surf2);
		border-radius: var(--border-radius-md);
		padding: 0.65rem 0.85rem;
		font-family: var(--fm);
		font-size: 12px;
		color: var(--ink2);
		display: none;
	}
	.apps > .card > .response.visible {
		display: block;
	}
	.apps > .card > .response.ok {
		color: var(--green-txt);
	}
	.apps > .card > .response.err {
		color: var(--red-txt);
	}
	.apps > .card > .response > pre {
		white-space: pre-wrap;
		word-break: break-all;
		margin: 0;
	}
</style>
