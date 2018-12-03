/**
 * Component Button
 */

import * as React from 'react';
import * as classnames from 'classnames';
import './Button.scss';

export interface Props {
	size?: 'large' | 'lg' | 'small' | 'sm';
	type?: 'primary' | 'secondary' | 'success' | 'danger' | 'disabled' | 'muted';
	className?: string;
	children: string | JSX.Element;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export class Button extends React.Component<Props> {
	render(): JSX.Element {
		const { size, className, type, children, onClick } = this.props;
		const cssClass = 'button';
		const cssClasses = classnames(
			cssClass,
			type && `button--${type}`,
			size && `button--${size}`,
			className
		);
		const isDisabled = type === 'disabled';

		if (isDisabled) {
			return (
				<button type="button" disabled={true} className={cssClasses}>
					{children}
				</button>
			);
		}

		return (
			<button
				type="button"
				className={cssClasses}
				onClick={event => onClick && onClick(event)}
			>
				{children}
			</button>
		);
	}
}
