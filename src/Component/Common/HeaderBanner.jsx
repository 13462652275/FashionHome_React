import React, { Component } from 'react';

class HeaderBanner extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render () {
		return (
			<div className="header-banner">
				<img src={this.props.src} alt=""/>
				<div className="header-banner-content wrapper">
					<h2 className="header-banner-title">
						{this.props.title}
						<p>{this.props.text}</p>
					</h2>
				</div>
			</div>
		);
	}
}

export default HeaderBanner;