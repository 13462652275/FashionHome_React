//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//第三方模块
import { fromJS, is } from 'immutable';


class IsClickOutside extends Component {
	static propTypes = {
		tag: PropTypes.string.isRequired,
		clickoutside: PropTypes.func,
		className: PropTypes.string,
	};

	constructor (props) {
		super(props);
		this.isOutside = event => {
			let [ isChild, node ] = [ false, event.target ];
			while (node && node.id !== 'root') {
				if (is(fromJS(node), fromJS(this.refs.tag))) {
					isChild = true;
					break;
				};
				node = node.parentNode;
			};
			if (!isChild && this.props.clickoutside) {
				this.props.clickoutside();
			};
		};
	};

	componentWillMount () {
		document.addEventListener('click', this.isOutside);
	};

	componentWillunmount () {
		document.removeEventListener('click', this.isOutside);
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<this.props.tag className={ this.props.className } ref="tag" onClick={ this.isOutside }>
				{ this.props.children }
			</this.props.tag>
		);
	};
};

export default IsClickOutside;