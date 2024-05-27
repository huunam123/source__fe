"use strict";

/* Package System */
import React from "react";
// import DB from '@mobule/Home/Components/DB';
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
					{/* <DB></DB> */}
				</div>
				</section>
			</React.Fragment>
		)
	}
}