/**
 * Component FormProgress
 */

import React from 'react';
import classnames from 'classnames';
import './FormProgress.scss';

export interface Props {
	maxSteps: number;
	currentStep: number;
	className?: string;
}

export const FormProgress = (props: Props): JSX.Element => {
	const { className, maxSteps, currentStep } = props;

	return (
		<div className={classnames('form-progress', className)}>
			<div
				className="form-progress__indicator-bar"
				style={{
					width: `${(100 / (maxSteps - 1)) * (currentStep - 1)}%`,
				}}
			/>
			<div className="form-progress__background-bar" />
		</div>
	);
};
