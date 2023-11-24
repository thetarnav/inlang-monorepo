export interface RoutingStrategy {
	translatePath(path: string, language: string): string
	getLanguageFromPath(path: string): string
}
