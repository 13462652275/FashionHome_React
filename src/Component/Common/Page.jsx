import React, { Component } from 'react';
import { fromJS, is } from 'immutable';
import PropTypes from 'prop-types';

import './Style/Page.css';

class Page extends Component {
	static propTypes = {
		current: PropTypes.number,
		pageSize: PropTypes.number,
		total: PropTypes.number,
		onChange:  PropTypes.func
	}

	static defaultProps = {
		current: 1,
		pageSize: 10,
		total: 0
	}

	constructor (props) {
		super(props);
		this.state = {};
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	}

	componentWillMount () {

	}

	render () {
		return (
			<div className="page">
				{this.props.current}
			</div>
		);
	}
}

export default Page;