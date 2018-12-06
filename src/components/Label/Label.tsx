/**
 * Component Label
 */

import React from 'react';
import classnames from 'classnames';
import './Label.scss';

export interface Props {
	className?: string;
	htmlFor?: string;
	label: string | JSX.Element | undefined;
}

export const Label = (props: Props): JSX.Element | null => {
	const { className, label, htmlFor } = props;

	if (!label || label === '') {
		return null;
	}

	return (
		<label className={classnames('label', className)} htmlFor={htmlFor}>
			{label}
		</label>
	);
};
