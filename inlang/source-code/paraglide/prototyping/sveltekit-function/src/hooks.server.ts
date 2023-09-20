import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			const lang = html.replace("%lang%", "de")
			const messages = lang.replace(
				"%paraglide.head%",
				`
			<script type="module">
				window.__paraglide_ssr = {
					multipleParams: {
						en: (params) => \`Hello \${params.name}! You have \${params.count} messages.\`
					}
				}
			</script>
			
			`,
			)
			return messages
		},
	})

	return response
}
