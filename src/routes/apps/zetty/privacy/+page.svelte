<script>
	const email = 'chammanganti@gmail.com';
</script>

<article>
	<div class="meta">Last updated · November 14, 2025</div>
	<h1>Zetty — Privacy Policy</h1>

	<section>
		<h2>1. Introduction</h2>
		<p>
			Zetty ("the App", "we", "us", or "our") is a personal knowledge and note-taking tool built
			around the Zettelkasten method. We value your privacy and are committed to protecting your
			information.
		</p>
		<p>
			This Privacy Policy explains what data the App collects, how it is stored, and how it is used.
		</p>
	</section>

	<section>
		<h2>2. Information We Collect</h2>
		<h3>a. Note data and metadata (stored locally only)</h3>
		<p>
			All note content, links, relationships, and metadata are stored locally on your device using
			Apple's secure storage technologies:
		</p>
		<ul>
			<li>SwiftData — for storing notes and metadata</li>
			<li>UserDefaults — for storing app preferences and lightweight settings</li>
		</ul>
		<p>No data is ever uploaded, transmitted, or shared externally.</p>

		<h3>b. App settings</h3>
		<p>
			Settings you configure within the App (such as appearance preferences or filters) are stored
			locally using UserDefaults. These settings remain on your device and are never transmitted to
			any external service.
		</p>

		<h3>c. No personal data collection</h3>
		<p>
			Zetty does not collect, store, or access any personal information. The App does not require an
			account or login of any kind.
		</p>
	</section>

	<section>
		<h2>3. How We Use Your Information</h2>
		<p>
			Because all information is stored solely on your device, it is used only to provide and
			maintain the App's core functionality.
		</p>
		<ul>
			<li>To store and manage your notes and their relationships</li>
			<li>To support your chosen app settings and preferences</li>
			<li>To provide a functional offline note-taking experience</li>
		</ul>
		<p>We do not sell, rent, trade, transmit, or share your data with any third parties.</p>
	</section>

	<section>
		<h2>4. Third-Party Services</h2>
		<p>
			Zetty does not use third-party analytics, advertising services, tracking tools, cloud storage,
			or external databases. The App does not depend on any third-party service that collects
			personal data.
		</p>
	</section>

	<section>
		<h2>5. Data Security</h2>
		<p>
			All data is stored using Apple's system-level security mechanisms (SwiftData and
			UserDefaults). While Apple provides strong device-level encryption, no digital system is
			completely secure, and we cannot guarantee absolute protection from all potential risks.
		</p>
	</section>

	<section>
		<h2>6. Your Data Rights</h2>
		<p>
			Since Zetty stores all data locally on your device and does not maintain user accounts, you
			maintain full control of your information at all times.
		</p>
		<ul>
			<li>You may delete notes directly within the App.</li>
			<li>Deleting the App will permanently remove all Zetty data from your device.</li>
			<li>We cannot restore deleted data, as no external backups are stored.</li>
		</ul>
		<p>
			If you have questions regarding your data, contact
			<a href="mailto:{email}">{email}</a>.
		</p>
	</section>

	<section>
		<h2>7. Children's Privacy</h2>
		<p>
			Zetty is suitable for all ages, including children under 13. The App does not collect any
			personal information, does not require an account, and does not include any advertising or
			tracking. Since no personal data is collected, Zetty is compliant with child privacy
			regulations such as COPPA.
		</p>
	</section>

	<section>
		<h2>8. Changes to This Policy</h2>
		<p>
			We may update this Privacy Policy from time to time. Updates will be posted on this page with
			a revised effective date.
		</p>
	</section>

	<section>
		<h2>9. Contact Us</h2>
		<p>
			If you have any questions or concerns about this Privacy Policy, please contact
			<a href="mailto:{email}">{email}</a>.
		</p>
	</section>
</article>

<style>
	article {
		max-width: 640px;
		margin: 0 auto;
		padding: 3rem 2rem 5rem;
	}

	.meta {
		font-size: 11px;
		font-family: var(--fm);
		color: var(--ink3);
		letter-spacing: 0.08em;
		margin-bottom: 0.75rem;
	}

	h1 {
		font-size: clamp(1.5rem, 4vw, 2rem);
		font-weight: 500;
		letter-spacing: -0.03em;
		line-height: 1.2;
		margin-bottom: 2.5rem;
		padding-bottom: 1.5rem;
		border-bottom: 0.5px solid var(--bdr);
	}

	section {
		margin-bottom: 2rem;
		padding-bottom: 2rem;
		border-bottom: 0.5px solid var(--bdr);
	}

	section:last-child {
		border-bottom: none;
	}

	h2 {
		font-size: 13px;
		font-weight: 500;
		font-family: var(--fm);
		color: var(--ink2);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		margin-bottom: 0.85rem;
	}

	h3 {
		font-size: 13px;
		font-weight: 500;
		color: var(--ink);
		margin: 1rem 0 0.4rem;
	}

	p {
		font-size: 14px;
		color: var(--ink2);
		line-height: 1.75;
		margin-bottom: 0.65rem;
	}

	ul {
		margin: 0.5rem 0 0.75rem 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	li {
		font-size: 14px;
		color: var(--ink2);
		line-height: 1.6;
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
	}

	li::before {
		content: '—';
		color: var(--ink3);
		font-size: 12px;
		flex-shrink: 0;
	}

	a {
		color: var(--blue);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	@media (max-width: 600px) {
		article {
			padding: 2rem 1rem 4rem;
		}
	}
</style>
