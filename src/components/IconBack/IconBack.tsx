/**
 * Component IconBack
 */

import * as React from 'react';
import * as classnames from 'classnames';

export interface Props {
	id: string;
	className?: string;
	color?: string;
}

export class IconBack extends React.Component<Props> {
	render(): JSX.Element {
		const { id, className, color } = this.props;

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
	}
}
