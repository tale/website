import React, { ReactNode } from 'react'
import { usePopperTooltip } from 'react-popper-tooltip'

interface TooltipIconProps {
	description: string
	children: ReactNode
}

export default function TooltipIcon(props: TooltipIconProps) {
	const {
		getTooltipProps,
		setTooltipRef,
		setTriggerRef,
		visible,
	} = usePopperTooltip({ placement: 'top', offset: [0, 12] });

	return (
		<>
			{visible && (
			<div ref={setTooltipRef} {...getTooltipProps({ className: 'tooltip' })}>
				{props.description}
			</div>
			)}
			<span className="icon" ref={setTriggerRef}>{props.children}</span>
		</>
	)
}
