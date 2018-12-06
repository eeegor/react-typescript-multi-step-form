/**
 * Component FormSummary
 */

import React from 'react';
import classnames from 'classnames';
import { Label, Button } from '..';
import './FormSummary.scss';

export interface Props {
	className?: string;
	formFields: object;
	label?: string | JSX.Element;
	gotoStep?: (step: number) => void;
}

export const FormSummary = (props: Props): JSX.Element => {
	const { className, label, formFields, gotoStep } = props;

	return (
		<div className={classnames('form-summary', className)}>
			{label && <Label className="form-summary__label" label={label} />}
			<div className="table">
				{Object.keys(formFields).map((formField, index) => (
					<div className="table__row" key={formField}>
						<div className="table__column">
							<div className="table__label">{formField}</div>
							<div className="table__value">
								{formFields[formField]}
							</div>
						</div>
						<div className="table__column table__column--actions">
							<Button
								className="form-summary__edit"
								size="small"
								onClick={() => gotoStep && gotoStep(index + 1)}
							>
								Edit
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
