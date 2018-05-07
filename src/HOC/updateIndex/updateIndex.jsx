//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//第三方模块
import { changeIndex } from 'Redux/Action/Action';
import { dispatch } from 'Redux/Store/Store';
import { fromJS, is } from 'immutable';


function updateIndex (WrappedComponent) {
	class UpdateIndex extends Component {
		static contextTypes = {
			store: PropTypes.any
		};

		constructor (props) {
			super(props);
			this.state = {};
		};

		componentWillMount () {
			dispatch(changeIndex(this.props.index));
			this.props.setIndex();
		};

		shouldComponentUpdate (nextProps, nextState) {
			return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
		};

		render () {
			return <WrappedComponent />;
		};
	};

	//约定高阶组件名字
	UpdateIndex.displayName = `UpdateIndex(${ getDisplayName(WrappedComponent) })`;

	//拷贝原始组件的所有静态方法
	UpdateIndex.staticMethod = WrappedComponent.staticMethod;

	return UpdateIndex;
};

function getDisplayName (WrappedComponent) {
	return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default updateIndex;