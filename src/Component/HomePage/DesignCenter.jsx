import React, { Component } from 'react';
import { fromJS, is } from 'immutable';

import './Style/DesignCenter.css';

class DesignCenter extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	}

	render () {
		return (
			<div className="index-design">
				{this.props.children}
				<div className="index-design-bg">
					<video 
						className="index-design-video" 
						src={require("../../Video/video_Smania.mp4")}
						poster={require("../../Video/video_Smania.jpg")} 
						controls>
						抱歉，您的浏览器不支持Video，请下载最新版浏览器.
					</video>
				</div>
			</div>
		);
	}
};

export default DesignCenter;