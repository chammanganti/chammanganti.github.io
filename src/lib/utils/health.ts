import type { HealthResponse } from '$lib/types';

export function isReady(health: HealthResponse, key: string): boolean {
	return health[key]?.ready === true;
}

export function nodeClass(ready: boolean): string {
	return ready ? 'badge ok' : 'badge off';
}
