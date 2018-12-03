/**
 * Component IconSuccess
 */

import * as React from 'react';
import * as classnames from 'classnames';
import './IconSuccess.scss';

export interface Props {
	id: string;
	className?: string;
	color?: string;
}

export class IconSuccess extends React.Component<Props> {
	render(): JSX.Element {
		const { id, className, color } = this.props;

		return (
			<svg
				id={id}
				className={classnames('icon-success', className)}
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 130.2 130.2"
				height="160"
				width="160"
			>
				<circle
					className="icon-success__circle"
					fill="none"
					stroke={color || '#333'}
					strokeWidth="6"
					strokeMiterlimit="10"
					cx="65.1"
					cy="65.1"
					r="62.1"
				/>
				<polyline
					className="icon-success__check"
					fill="none"
					stroke={color || '#333'}
					strokeWidth="6"
					strokeLinecap="round"
					strokeMiterlimit="10"
					points="100.2,40.2 51.5,88.8 29.8,67.5 "
				/>
			</svg>
		);
	}
}
