/**
 * Component FormSuccess
 */

import React from 'react';
import classnames from 'classnames';
import { IconSuccess, Button } from '..';
import './FormSuccess.scss';

export interface Props {
	className?: string;
	onReset?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const FormSuccess = (props: Props): JSX.Element => {
	const { className, onReset } = props;

	return (
		<div className={classnames('form-success', className)}>
			<div className="form-success__container">
				<IconSuccess id="success" color="#83c736" />
				<h2>Success!</h2>
				<p>Thank you for submitting</p>
				<Button
					className="form-success__reset"
					type="primary"
					onClick={event => onReset && onReset(event)}
				>
					Start over
				</Button>
			</div>
		</div>
	);
};
