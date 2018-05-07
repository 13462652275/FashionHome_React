//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//第三方模块
import { fromJS, is } from 'immutable';

//API
import {  } from 'Api';

//样式
import './Style/';

//高阶组件
import  from 'HOC/';

//工具组件
import  from 'Tool/';

//公共组件
import  from 'Common/';

//组件
import  from '';


class moban extends Component {
	static propTypes = {
		string: PropTypes.string,
		number: PropTypes.number,
		bool: PropTypes.bool,
		array: PropTypes.array,
		object: PropTypes.object,
		func:  PropTypes.func,
		isRequired: PropTypes.isRequired,
		stringIsRequired: PropTypes.string.isRequired,
		any: PropTypes.any,// 任意类型的数据
		node: PropTypes.node, //任何可被渲染的元素（包括数字、字符串、子元素或数组）
		element: PropTypes.element, // 一个 React 元素
		optionalMessage: PropTypes.instanceOf(Message),// 你也可以声明属性为某个类的实例，这里使用 JS 的instanceof 操作符实现。
		oneOf: PropTypes.oneOf(['News', 'Photos']),// 你也可以限制你的属性值是某个特定值之一
		oneOfType: PropTypes.oneOfType([ // 限制它为列举类型之一的对象
			PropTypes.string,
			PropTypes.number,
			PropTypes.instanceOf(Message)
		]),
		arrayOf: PropTypes.arrayOf(PropTypes.number),// 一个指定元素类型的数组
		objectOf: PropTypes.objectOf(PropTypes.number),// 一个指定类型的对象
		objectWithShape: PropTypes.shape({// 一个指定属性及其类型的对象
			color: PropTypes.string,
			fontSize: PropTypes.number
		}),
		className: PropTypes.string,
		style: PropTypes.object,
	};

	static defaultProps = {
		number: 1,
		className: ''
	};

	constructor (props) {
		super(props);
		this.state = {};
	};

	componentWillMount () {

	};

	componentDidMount () {
		
	};

	componentWillUpdate (nextProps, nextState) {
		//该生命周期不可调setState，否则会递归卡死。
	};

	componentDidUpdate (nextProps, nextState) {
		
	};

	componentWillUnmount () {
		
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<article className="">
				
			</article>
		);
	};
};

export default moban;