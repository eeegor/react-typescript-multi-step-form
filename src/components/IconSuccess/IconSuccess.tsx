/**
 * Component IconSuccess
 */

import React from 'react';
import classnames from 'classnames';
import './IconSuccess.scss';

export interface Props {
	id: string;
	className?: string;
	color?: string;
}

export const IconSuccess = (props: Props): JSX.Element => {
	const { id, className, color } = props;

	return (
		<div className={classnames('icon-success', className)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="160px"
				height="160px"
				viewBox="0 0 72 72"
			>
				<g fill="none" stroke={color || '#8EC343'} strokeWidth="3">
					<circle
						className="icon-success__circle"
						cx="36"
						cy="36"
						r="34"
						style={{
							strokeDasharray: '240px, 240px',
							strokeDashoffset: '480px',
						}}
					/>
					<path
						className="icon-success__path"
						d="M17.417,37.778l9.93,9.909l25.444-25.393"
						style={{
							strokeDasharray: '50px, 50px',
							strokeDashoffset: '0px',
						}}
					/>
				</g>
			</svg>
		</div>
	);
};
