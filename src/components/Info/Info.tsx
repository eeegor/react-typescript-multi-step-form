/**
 * Component Info
 */

import React from 'react';
import classnames from 'classnames';
import './Info.scss';

export interface Props {
	className?: string;
	label: string | JSX.Element | undefined;
}

export const Info = (props: Props): JSX.Element | null => {
	const { className, label } = props;

	if (!label || label === '') {
		return null;
	}

	return <small className={classnames('info', className)}>{label}</small>;
};
