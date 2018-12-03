/**
 * Component Info
 */

import * as React from 'react';
import * as classnames from 'classnames';
import './Info.scss';

export interface Props {
	className?: string;
	label: string | JSX.Element | undefined;
}

export class Info extends React.Component<Props> {
	render(): JSX.Element | null {
		const { className, label } = this.props;

		if (!label || label === '') {
			return null;
		}

		return <small className={classnames('info', className)}>{label}</small>;
	}
}
