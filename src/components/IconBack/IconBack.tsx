/**
 * Component IconBack
 */

import React from 'react';
import classnames from 'classnames';
import './IconBack.scss';

export interface Props {
	id: string;
	className?: string;
	color?: string;
}

export const IconBack = (props: Props): JSX.Element => {
	const { id, className, color } = props;

	return (
		<svg
			id={id}
			className={classnames('icon-back', className)}
			version="1.1"
			viewBox="0 0 512 512"
			height="36"
			width="36"
			xmlSpace="preserve"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<polygon
				fill={color || '#333'}
				points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "
			/>
		</svg>
	);
};
