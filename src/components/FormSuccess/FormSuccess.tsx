/**
 * Component FormSuccess
 */

import * as React from 'react';
import * as classnames from 'classnames';
import { IconSuccess, Button } from '..';
import './FormSuccess.scss';

export interface Props {
	className?: string;
	onReset?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export class FormSuccess extends React.Component<Props> {
	render(): JSX.Element {
		const { className, onReset } = this.props;

		return (
			<div className={classnames('form-success', className)}>
				<IconSuccess id="success" color="#83c736" />
				<h2>Success!</h2>
				<p>Thank you for submitting</p>
				<Button className="form-success__reset" type="primary" onClick={event => onReset && onReset(event)}>
					Start over
				</Button>
			</div>
		);
	}
}
