import { currentLanguageTag } from "./runtime"

export const onlyText = () => "Only text"

export const oneParam = (params: { name: string }) => `Hello ${params.name}!`

/*@__PURE__*/
export const multipleParams = (params: { name: string; count: number }) => {
	// @ts-expect-error - any blabla
	return multipleParamsStore[currentLanguageTag()](params)
}

const multipleParamsStore = {}
export const _setMultipleParams = (tag: string, fn: any) => {
	// @ts-expect-error - any blabla
	multipleParamsStore[tag] = fn
}
