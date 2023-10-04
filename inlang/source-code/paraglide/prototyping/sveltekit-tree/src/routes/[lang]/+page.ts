import type { PageLoad } from "./$types"

export const load: PageLoad = async (args) => {
	console.log(args.route.id)
	return {
		component: (await selectComponent(args.params.lang)).default,
	}
}

const selectComponent = (id: string) => {
	switch (id) {
		case "de":
			return import("./page.de.svelte")
		case "en":
			return import("./page.en.svelte")
		default:
			throw "Invalid id"
	}
}
