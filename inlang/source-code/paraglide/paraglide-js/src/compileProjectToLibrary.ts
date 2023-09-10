import type { InlangProject } from "@inlang/sdk"

/**
 * Compiles an inlang project into the importable paraglide-js library.
 */
export const compileProjectToLibrary = (args: { inlang: InlangProject }): string => {
	console.info(args.inlang)
	return ``
}
