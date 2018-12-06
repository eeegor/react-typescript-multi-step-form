/**
 * Component FormControls
 */

import React from 'react';
import classnames from 'classnames';
import { IconBack, FormProgress } from '..';
import './FormControls.scss';

export interface Props {
	className?: string;
	maxSteps: number;
	currentStep: number;
	onBack: (event: React.MouseEvent<HTMLElement>) => void;
}

export const FormControls = (props: Props): JSX.Element => {
	const { className, onBack, maxSteps, currentStep } = props;

	return (
		<div className={classnames('form-controls', className)}>
			<div
				className="form-controls__back"
				onClick={event => currentStep !== 1 && onBack && onBack(event)}
			>
				<IconBack
					id="icon-back"
					color={currentStep === 1 ? '#eee' : '#2e3642'}
				/>
			</div>
			<FormProgress maxSteps={maxSteps} currentStep={currentStep} />
		</div>
	);
};
