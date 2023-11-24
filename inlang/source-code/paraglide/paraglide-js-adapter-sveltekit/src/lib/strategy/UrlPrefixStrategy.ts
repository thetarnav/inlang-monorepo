import type { RoutingStrategy } from "./Strategy.js"

export class UrlPrefixStrategy implements RoutingStrategy {
	translatePath(path: string, language: string): string {
		if (this.isExternalPath(path)) {
			return path
		}

		return `/${language}${path}`
	}
	getLanguageFromPath(path: string): string {
		if (this.isExternalPath(path)) {
			throw new Error("Cannot get language from external path.")
		}
		const [language, ...rest] = path.split("/")
		if (!language) throw new Error("No language found in path.")
		return language
	}

	private isExternalPath(path: string): boolean {
		return path.startsWith("http")
	}
}
