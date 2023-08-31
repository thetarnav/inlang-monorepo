import type { InlangConfig } from "@inlang/config"
import type { NodeishFilesystem } from "@inlang-git/fs"

// export async function tryAutoGenProjectConfig(args: { fs; sourceLanguagetag; languageTags }): any {
// 	// Maybe<ProjectConfigFile>
// 	fs.writeFile(generateProjectConfig({ sourceLanguagetag, languageTags }))
// }

export async function createProjectConfig(args: {
	nodeishFs: NodeishFilesystem
	filePath?: string
	sourceLanguagetag: InlangConfig["sourceLanguageTag"]
	languageTags: InlangConfig["languageTags"]
}): Promise<void> {
	const newConfig: InlangConfig = {
		sourceLanguageTag: args.sourceLanguagetag,
		languageTags: args.languageTags,
		packages: [],
		settings: {},
	}

	await args.nodeishFs.writeFile(
		args.filePath || "./project.inlang.test.json",
		JSON.stringify(newConfig, undefined, 4) + "\n",
	)
}
