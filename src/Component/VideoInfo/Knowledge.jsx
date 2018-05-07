//基础模块
import React, { Component } from 'react';

//第三方模块
import { fromJS, is } from 'immutable';

//样式
import './Style/Knowledge.css';


class Knowledge extends Component {
	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<div className="video-info-knowledge">
				{ this.props.children }
				<div className="video-info-knowledge-left">
					<div className="video-info-knowledge-big">
						<img src={ require('../../Images/video_21.png') } alt=""/>
					</div>
					<div className="video-info-knowledge-small">
						<img src={ require('../../Images/video_24.png') } alt=""/>
					</div>
				</div>
				<div className="video-info-knowledge-right">
					<div className="video-info-knowledge-small">
						<img src={ require('../../Images/video_32.png') } alt=""/>
					</div>
					<div className="video-info-knowledge-big">
						<img src={ require('../../Images/video_28.png') } alt=""/>
					</div>
				</div>
			</div>
		);
	};
};

export default Knowledge;