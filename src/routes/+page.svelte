<script lang="ts">
	import Demo from '$lib/components/home/Demo.svelte';
	import Deploy from '$lib/components/home/Deploy.svelte';
	import Main from '$lib/components/home/Main.svelte';
	import type { HealthResponse } from '$lib/types';

	let health = $state({} as HealthResponse);
</script>

<Main {health} />
<hr class="section-divider" />
<Deploy bind:health />
<hr class="section-divider" />
<Demo {health} />
