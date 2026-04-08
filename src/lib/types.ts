export type ServiceHealth = {
	name: string;
	ready: boolean;
	checked_at: string;
};

export type HealthResponse = Record<string, ServiceHealth>;
