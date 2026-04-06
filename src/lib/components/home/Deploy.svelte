<div class="section">
	<div class="head">
		<h2>Deploy the demo apps</h2>
		<p>
			Trigger a live ArgoCD sync to spin up both apps into the cluster. Watch the diagram light up
			above once pods are running.
		</p>
		<p class="note">Note: After an hour the apps will be automatically removed.</p>
	</div>

	<div class="deploy">
		<div class="card">
			<div class="info">
				<div class="name">homelab demo</div>
				<div class="desc">namespace: demo</div>
			</div>
			<div class="state">
				<div class="dot" id="state-dot"></div>
				<span id="state-text">not deployed</span>
			</div>
			<button class="btn-primary" id="deploy" disabled>Deploy</button>
			<button class="btn-outline btn-sm" id="btn-teardown" style="display:none">Teardown</button>
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
		width: 7px;
		height: 7px;
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
</style>
