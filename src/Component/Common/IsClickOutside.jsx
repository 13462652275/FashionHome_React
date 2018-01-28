import React, { Component } from 'react';
import { fromJS, is } from 'immutable';
import PropTypes from 'prop-types';

class IsClickOutside extends Component {
	static propTypes = {
		tag: PropTypes.string.isRequired,
		clickoutside: PropTypes.func
	}

	constructor (props) {
		super(props);
		this.isOutside = event => {
			let [ isChild, node ] = [ false, event.target ];
			while (node.id !== 'root') {
				if (is(fromJS(node), fromJS(this.refs.tag))) {
					isChild = true;
					break;
				};
				node = node.parentNode;
			};
			if (!isChild && this.props.clickoutside) {
				this.props.clickoutside();
			};
		}
	}

	componentWillMount () {
		document.addEventListener('click', this.isOutside);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	}

	componentWillunmount () {
		document.removeEventListener('click', this.isOutside);
	}

	render () {
		return (
			<this.props.tag ref="tag" onClick={this.isOutside}>
				{
					this.props.children
				}
			</this.props.tag>
		);
	}
};

export default IsClickOutside;