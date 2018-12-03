/**
 * Component FormSummary
 */

import * as React from 'react';
import * as classnames from 'classnames';
import { Label, Button } from '..';
import './FormSummary.scss';

export interface Props {
	className?: string;
	formFields: object;
	label?: string | JSX.Element;
	gotoStep?: (step: number) => void;
}

export class FormSummary extends React.Component<Props> {
	render(): JSX.Element {
		const { className, label, formFields, gotoStep } = this.props;

		return (
			<div className={classnames('form-summary', className)}>
				{label && <Label className="form-summary__label" label={label} />}
				<div className="table">
					{Object.keys(formFields).map((formField, index) => (
						<div className="table__row" key={formField}>
							<div className="table__row__column">
								<div className="table__row__label">{formField}</div>
								<div className="table__row__value">{formFields[formField]}</div>
							</div>
							<div className="table__row__edit">
								<Button
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
	}
}
