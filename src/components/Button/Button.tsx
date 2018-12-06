/**
 * Component Button
 */

import React from 'react';
import classnames from 'classnames';
import './Button.scss';

export interface Props {
	size?: 'large' | 'small';
	type?: 'primary' | 'secondary' | 'success' | 'danger' | 'disabled' | 'muted';
	className?: string;
	children: string | JSX.Element;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: Props): JSX.Element => {
	const { size, className, type, children, onClick } = props;
	const isDisabled = type === 'disabled';
	const cssClasses = classnames(
		'button',
		type && `button--${type}`,
		size && `button--${size}`,
		isDisabled && `button--disabled`,
		className
	);

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
};
