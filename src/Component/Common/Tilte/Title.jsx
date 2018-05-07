//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//样式
import './Style/Title.css';


class Title extends Component {
	static propTypes = {
		title: PropTypes.string,
		url: PropTypes.string.isRequired,
		className: PropTypes.string,
		style: PropTypes.object
	};

	shouldComponentUpdate (nextProps, nextState) {
		return false;
	};

	render () {
		return (
			<div style={ this.props.style } className={ this.props.className ? 'title ' + this.props.className : 'title' }>
				<h3>{ this.props.title }</h3>
				<a href={ this.props.url }>More &gt; </a>
			</div>
		);
	};
};

export default Title;