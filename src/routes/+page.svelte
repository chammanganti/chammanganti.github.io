<script lang="ts">
	import Demo from '$lib/components/home/Demo.svelte';
	import Deploy from '$lib/components/home/Deploy.svelte';
	import Main from '$lib/components/home/Main.svelte';
	import type { DeployState, HealthResponse } from '$lib/types';

	let health = $state({} as HealthResponse);
	let deployState = $state<DeployState>({ is_deployed: true });
</script>

<Main {health} isDeployed={deployState.is_deployed} />
<hr class="section-divider" />
<Deploy bind:deployState bind:health />
<hr class="section-divider" />
<Demo isDeployed={deployState.is_deployed} />
