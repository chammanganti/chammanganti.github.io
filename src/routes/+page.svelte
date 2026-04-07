<script lang="ts">
	import Demo from '$lib/components/home/Demo.svelte';
	import Deploy from '$lib/components/home/Deploy.svelte';
	import Main from '$lib/components/home/Main.svelte';
	import type { DeployState } from '$lib/types';

	let deployState: DeployState = $state({ is_deployed: true });
</script>

<Main />
<hr class="section-divider" />
<Deploy bind:deployState />
<hr class="section-divider" />
<Demo isDeployed={deployState.is_deployed} />
