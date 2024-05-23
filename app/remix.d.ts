import type { FunctionComponent, SVGProps } from 'react'
type ReactComponent = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>

declare module '*.svg' {
	export const ReactComponent: ReactComponent
	const src: string
	export default src
}
