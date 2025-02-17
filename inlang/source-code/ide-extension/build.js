/**
 * This is the build script for the project.
 */

import { context } from "esbuild"
import { glob } from "glob"

// eslint-disable-next-line no-undef
const isDev = process?.env?.DEV !== undefined
// eslint-disable-next-line no-undef
const isTest = process?.env?.TEST !== undefined

const defaultEntryPoints = [{ in: "./src/main.ts", out: "./main" }]

// Production configuration
/** @type {import("esbuild").BuildOptions} */
let buildOptions = {
	entryPoints: defaultEntryPoints,
	outdir: "./dist/",
	outExtension: { ".js": ".cjs" },
	platform: "node",
	bundle: true,
	minify: true,
	sourcemap: false,
	external: ["vscode"],
}

// Test configuration
if (isTest) {
	const tests = await glob("./src/**/*.e2e.test.ts")

	buildOptions = {
		...buildOptions,
		entryPoints: [
			...defaultEntryPoints,
			{ in: "./src/test.ts", out: "./test" },
			{ in: "./src/suite.ts", out: "./suite" },
			...tests.map((t) => ({ in: t, out: t.split(".").slice(0, -1).join(".") })),
		],
		format: "cjs",
		bundle: false,
		minify: false,
		sourcemap: true,
		external: [],
	}
}

// Dev configuration
if (isDev) {
	buildOptions = {
		...buildOptions,
		minify: false,
		sourcemap: true,
	}
}

const ctx = await context(buildOptions)

if (isDev) {
	await ctx.watch()
	// eslint-disable-next-line no-undef
	console.info("👀 watching for changes...")
} else {
	await ctx.rebuild()
	// eslint-disable-next-line no-undef
	console.info("✅ build complete")
	await ctx.dispose()
}
