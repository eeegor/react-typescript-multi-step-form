/**
 * Component FormStep
 */

import * as React from 'react';
import * as classnames from 'classnames';
import { Form } from './Form';
import './FormStep.scss';

export interface Props {
	className?: string;
	children?: React.ReactNode;
	id: string;
	onSubmit: (form: React.FormEvent<HTMLFormElement>) => void;
}

export class FormStep extends React.Component<Props> {
	render(): JSX.Element {
		const { id, children, className, onSubmit } = this.props;

		return (
			<Form
				id={id}
				className={classnames('form-step', className)}
				onSubmit={form => onSubmit && onSubmit(form)}
			>
				{children}
			</Form>
		);
	}
}
