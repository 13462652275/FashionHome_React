import React, { Component } from 'react';
import { fromJS, is } from 'immutable';
import { changeIndex } from '../../Redux/Action/Action';
import { dispatch } from '../../Redux/Store/Store';

const style = {
	h3: {
		fontSize: 24,
		padding: '200px 0'
	}
};

class Index extends Component {
	componentWillMount () {
		dispatch(changeIndex(this.props.index));
		this.props.setIndex();
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
	}

	render () {
		return (
			<h3 style={style.h3}>{this.props.title}</h3>
		);
	}
};

export default Index;