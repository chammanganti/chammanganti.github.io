<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	const HEALTH_STREAM_URL = 'https://hlbe.chammanganti.dev/sts/stats/stream';

	type NodeStats = {
		cpu_percent: number;
		mem_total: number;
		mem_used: number;
		mem_percent: number;
		pod_count: number;
		checked_at: string;
	};

	let stats = $state<NodeStats>({
		cpu_percent: 0,
		mem_total: 0,
		mem_used: 0,
		mem_percent: 0,
		pod_count: 0,
		checked_at: ''
	});
	let es: EventSource | null = null;

	function connectSSE(): void {
		es = new EventSource(HEALTH_STREAM_URL);
		es.onmessage = (e) => {
			const data = JSON.parse(e.data) as NodeStats;
			Object.assign(stats, data);
		};
		es.onerror = () => {
			es?.close();
			setTimeout(connectSSE, 3000);
		};
	}

	onMount(() => connectSSE());
	onDestroy(() => es?.close());
</script>

<div class="stats">
	<div class="label">thinkcentre · talos linux</div>
	<div class="content">
		<div class="card">
			<div class="info">
				<div class="key">cpu</div>
				<div class="value">{stats.cpu_percent}%</div>
			</div>
			<div class="info">
				<div class="key">mem</div>
				<div class="value">{stats.mem_percent}%</div>
			</div>
			<div class="info">
				<div class="key">pods</div>
				<div class="value">{stats.pod_count}</div>
			</div>
		</div>
	</div>
</div>

<style>
	.label {
		font-size: 10px;
		color: var(--ink3);
		font-family: var(--fm);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-top: 1.25rem;
		margin-bottom: 1.25rem;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
	}
	.content > .card {
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 10px;
		padding: 7px 10px;
		background: var(--surf);
		border: 0.5px solid var(--bdr);
		border-radius: var(--border-radius-md);
		width: 100%;
		text-align: center;
	}
	.content > .card > .info {
		flex: 1;
		min-width: 0;
	}
	.content > .card > .info > .key {
		font-size: 12px;
		font-weight: 500;
		font-family: var(--fm);
	}
	.content > .card > .info > .value {
		font-size: 10px;
		color: var(--ink3);
		margin-top: 1px;
	}
</style>
