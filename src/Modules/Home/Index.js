"use strict";

/* Package System */
import React from "react";
import Dashboard from '@modules/Home/Components/Dashboard';
import Activity from '@modules/Home/Components/Activity';
import Online from '@modules/Home/Components/Online';
import Tem from '@modules/Home/Components/Tem';


/* Package Application */

export default class extends React.Component {

	constructor(props) {
		super(props);
		this._isMounted = false;
		this.state = {
		}
	}

	componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount(){
		this._isMounted = false;
	}

	render() {	
		return (
			<React.Fragment>
				
				<section className="sl-section">
				<div className="container">
					 <Dashboard/>
				</div>


				<div className="container">
					 <Activity/>
				</div>

				<div className="container">
					 <Online/>
				</div>
				
				<div className="container">
					 <Tem/>
				</div>
				</section>
			</React.Fragment>
		)
	}
}