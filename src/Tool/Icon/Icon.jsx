//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//第三方模块
import { fromJS, is } from 'immutable';

//样式
import './Style/Icon.css';


class Icon extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		size: PropTypes.string,
		color: PropTypes.string,
		className: PropTypes.string,
		onClick: PropTypes.func
	};

	static defaultProps = {
		className: ''
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<i 
				className={ ('iconfont ' + this.props.className).trim() }
				style={{ fontSize: this.props.size + 'px', color: this.props.color }} 
				dangerouslySetInnerHTML={{ __html: this.props.children }} 
				onClick={ this.props.onClick }
				></i>
		);
	};
};

export default Icon;