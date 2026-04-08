export type DeployState = {
	is_deployed: boolean;
	deployed_at?: string;
	remaining?: string;
};

export type ServiceHealth = {
	name: string;
	ready: boolean;
	checked_at: string;
};

export type HealthResponse = Record<string, ServiceHealth>;
