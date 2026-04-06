<div class="section">
	<div class="head">
		<h2>Test the apps</h2>
		<p>Once deployed, interact with both services.</p>
	</div>

	<div class="apps">
		<div class="card">
			<div class="header">
				<div class="title">demo-app-1</div>
				<div class="tag disabled" id="app-1-tag">not running</div>
			</div>
			<div class="endpoint">GET /demo-app-1</div>
			<div class="input">
				<button class="btn-outline btn-sm" id="btn-ping" disabled>Send request</button>
			</div>
			<div class="response" id="app-1-resp"></div>
		</div>

		<div class="card">
			<div class="header">
				<div class="title">demo-app-2</div>
				<div class="tag disabled" id="app-2-tag">not running</div>
			</div>
			<div class="endpoint">POST /demo-app-2</div>
			<div class="input">
				<input type="text" id="app-2-input" placeholder="Type something…" disabled />
				<button class="btn-outline btn-sm" id="btn-echo" disabled>Send request</button>
			</div>
			<div class="response" id="app-2-resp"></div>
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
		background: var(--blue-bg);
		color: var(--blue-txt);
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
</style>
