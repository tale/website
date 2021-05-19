import { Component } from 'preact'
import { usePopperTooltip } from 'react-popper-tooltip'

interface TooltipIconProps {
	description: string
}

export default class TooltipIcon extends Component<TooltipIconProps> {
	render() {
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
					{this.props.description}
				</div>
				)}
				<span class="icon" ref={setTriggerRef}>{this.props.children}</span>
			</>
		)
	}
}
