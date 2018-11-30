/**
 * Component FormStep
 */

import * as React from 'react';
import './FormStep.scss';
import { Form } from './Form';

export interface Props {
	className?: string;
	children?: React.ReactNode;
	onSubmit?: (form: React.FormEvent<HTMLFormElement>) => void;
}

export interface State {}

export class FormStep extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}

	render(): JSX.Element {
		const { children, className, onSubmit } = this.props;

		return (
			<Form className="form-step" onSubmit={form => onSubmit && onSubmit(form)}>
				{children}
			</Form>
		);
	}
}
