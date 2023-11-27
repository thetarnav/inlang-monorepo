import { availableLanguageTags, sourceLanguageTag } from "./src/paraglide/runtime.js"

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: [...availableLanguageTags],
		defaultLocale: sourceLanguageTag,
	},
}

export default nextConfig
