import React, { Component } from 'react';
import { fromJS, is } from 'immutable';
import PropTypes from 'prop-types';

class moban extends Component {
	static propTypes = {
		one: PropTypes.string,
		two: PropTypes.number,
		three: PropTypes.bool,
		four: PropTypes.array,
		five: PropTypes.object,
		six:  PropTypes.func,
		seven: PropTypes.isRequired,
		eight: PropTypes.node, //任何可被渲染的元素（包括数字、字符串、子元素或数组）
		nine: PropTypes.element, // 一个 React 元素
		ten: PropTypes.oneOfType([ // 限制它为列举类型之一的对象
			PropTypes.string,
			PropTypes.number,
			PropTypes.instanceOf(Message)
		]),
	}

	//为props设置默认值
	static defaultProps = {
		one: 1
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
			<div className="">
				
			</div>
		);
	}
}

export default moban;