/**
 * App
 */

import * as React from 'react';
import './index.scss';
import './App.scss';

interface Props {}

export class App extends React.Component<Props> {
	render(): JSX.Element {
		return (
			<div className="app">
				<div className="content">
					<div className="container">
						<h1>Welcome</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
							quaerat similique omnis. Quisquam consectetur minus fuga unde, sed
							molestiae nesciunt reiciendis tenetur!
						</p>
						<h2>Welcome</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
							quaerat similique omnis. Quisquam consectetur minus fuga unde, sed
							molestiae nesciunt reiciendis tenetur!
						</p>
						<h3>Welcome</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
							quaerat similique omnis. Quisquam consectetur minus fuga unde, sed
							molestiae nesciunt reiciendis tenetur!
						</p>
						<h4>Welcome</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
							quaerat similique omnis. Quisquam consectetur minus fuga unde, sed
							molestiae nesciunt reiciendis tenetur!
						</p>
						<h5>Welcome</h5>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
							quaerat similique omnis. Quisquam consectetur minus fuga unde, sed
							molestiae nesciunt reiciendis tenetur!
						</p>
						<h6>Welcome</h6>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
							quaerat similique omnis. Quisquam consectetur minus fuga unde, sed
							molestiae nesciunt reiciendis tenetur!
						</p>
					</div>
				</div>
			</div>
		);
	}
}
