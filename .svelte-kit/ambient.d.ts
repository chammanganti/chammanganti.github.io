
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const SHLVL: string;
	export const SSH_AUTH_SOCK: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const TMPDIR: string;
	export const NVM_BIN: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const COLORFGBG: string;
	export const HOMEBREW_PREFIX: string;
	export const PAGER: string;
	export const COLORTERM: string;
	export const LDFLAGS: string;
	export const MallocNanoZone: string;
	export const TERM_PROGRAM: string;
	export const INIT_CWD: string;
	export const ZSH: string;
	export const LC_TERMINAL_VERSION: string;
	export const VSCODE_INJECTION: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const ZDOTDIR: string;
	export const GOPATH: string;
	export const ITERM_SESSION_ID: string;
	export const ITERM_PROFILE: string;
	export const TERM: string;
	export const VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
	export const COMMAND_MODE: string;
	export const XPC_SERVICE_NAME: string;
	export const VSCODE_PROFILE_INITIALIZED: string;
	export const CURSOR_TRACE_ID: string;
	export const LC_TERMINAL: string;
	export const SHELL: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const TERM_SESSION_ID: string;
	export const HOMEBREW_REPOSITORY: string;
	export const LS_COLORS: string;
	export const LANG: string;
	export const CURSOR_CLI: string;
	export const SAM_CLI_TELEMETRY: string;
	export const _: string;
	export const LESS: string;
	export const RBENV_SHELL: string;
	export const USER_ZDOTDIR: string;
	export const NVM_DIR: string;
	export const INFOPATH: string;
	export const npm_config_user_agent: string;
	export const CURSOR_CLI_MODE: string;
	export const NVM_CD_FLAGS: string;
	export const GIT_ASKPASS: string;
	export const XPC_FLAGS: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const __CFBundleIdentifier: string;
	export const TERM_PROGRAM_VERSION: string;
	export const PWD: string;
	export const TERMINFO_DIRS: string;
	export const TERM_FEATURES: string;
	export const CPPFLAGS: string;
	export const USER: string;
	export const OLDPWD: string;
	export const HOMEBREW_CELLAR: string;
	export const LSCOLORS: string;
	export const LOGNAME: string;
	export const PATH: string;
	export const NODE_ENV: string;
	export const HOME: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		SHLVL: string;
		SSH_AUTH_SOCK: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		TMPDIR: string;
		NVM_BIN: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		COLORFGBG: string;
		HOMEBREW_PREFIX: string;
		PAGER: string;
		COLORTERM: string;
		LDFLAGS: string;
		MallocNanoZone: string;
		TERM_PROGRAM: string;
		INIT_CWD: string;
		ZSH: string;
		LC_TERMINAL_VERSION: string;
		VSCODE_INJECTION: string;
		__CF_USER_TEXT_ENCODING: string;
		ZDOTDIR: string;
		GOPATH: string;
		ITERM_SESSION_ID: string;
		ITERM_PROFILE: string;
		TERM: string;
		VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
		COMMAND_MODE: string;
		XPC_SERVICE_NAME: string;
		VSCODE_PROFILE_INITIALIZED: string;
		CURSOR_TRACE_ID: string;
		LC_TERMINAL: string;
		SHELL: string;
		VSCODE_GIT_IPC_HANDLE: string;
		TERM_SESSION_ID: string;
		HOMEBREW_REPOSITORY: string;
		LS_COLORS: string;
		LANG: string;
		CURSOR_CLI: string;
		SAM_CLI_TELEMETRY: string;
		_: string;
		LESS: string;
		RBENV_SHELL: string;
		USER_ZDOTDIR: string;
		NVM_DIR: string;
		INFOPATH: string;
		npm_config_user_agent: string;
		CURSOR_CLI_MODE: string;
		NVM_CD_FLAGS: string;
		GIT_ASKPASS: string;
		XPC_FLAGS: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		__CFBundleIdentifier: string;
		TERM_PROGRAM_VERSION: string;
		PWD: string;
		TERMINFO_DIRS: string;
		TERM_FEATURES: string;
		CPPFLAGS: string;
		USER: string;
		OLDPWD: string;
		HOMEBREW_CELLAR: string;
		LSCOLORS: string;
		LOGNAME: string;
		PATH: string;
		NODE_ENV: string;
		HOME: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
