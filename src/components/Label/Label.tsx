/**
 * Component Label
 */

import * as React from 'react';
import * as classnames from 'classnames';
import './Label.scss';

export interface Props {
	className?: string;
	htmlFor?: string;
	label: string | JSX.Element | undefined;
}

export class Label extends React.Component<Props> {
	render(): JSX.Element | null {
		const { className, label, htmlFor } = this.props;

		if (!label || label === '') {
			return null;
		}

		return (
			<label className={classnames('label', className)} htmlFor={htmlFor}>
				{label}
			</label>
		);
	}
}
