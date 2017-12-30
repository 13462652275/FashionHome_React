import React, { Component } from 'react';
import { fromJS, is } from 'immutable';

class ProductCenter extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	}

	componentWillMount () {

	}

	render () {
		return (
			<div className="">
				
			</div>
		);
	}
}

export default ProductCenter;