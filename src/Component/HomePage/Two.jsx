import React, { Component } from 'react';
import { fromJS, is } from 'immutable';
import { changeIndex } from '../../Redux/Action/Action';
import { dispatch } from '../../Redux/Store/Store';

class Two extends Component {
	componentWillMount () {
		dispatch(changeIndex(this.props.index));
		this.props.setIndex();
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
	}

	render () {
		return (
			<h3>我是Two</h3>
		);
	}
};

export default Two;