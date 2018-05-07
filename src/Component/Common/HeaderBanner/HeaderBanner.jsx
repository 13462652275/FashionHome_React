//基础模块
import React, { Component } from 'react';

//样式
import './Style/HeaderBanner.css';


class HeaderBanner extends Component {
	shouldComponentUpdate (nextProps, nextState) {
		return false;
	};

	render () {
		return (
			<div className="header-banner">
				<img src={this.props.src} alt={this.props.title}/>
				<h2 className="header-banner-title">
					{this.props.title}
					<p>{this.props.text}</p>
				</h2>
			</div>
		);
	};
};

export default HeaderBanner;