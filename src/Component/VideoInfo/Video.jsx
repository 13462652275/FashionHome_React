//基础模块
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

//第三方模块
import { fromJS, is } from 'immutable';

//API
import { getVideoList } from 'Api';

//样式
import './Style/Video.css';

//工具组件
import IsLoadOver from 'Tool/IsLoadOver';
import MenuSwiper from 'Tool/MenuSwiper'

// //公共组件
// import  from 'Common/';


class Video extends Component {
	constructor (props) {
		super(props);
		this.state = {
			data: [],
			videoPoster: '',
			videoUrl: '',
			currentIndex: 0
		};

		this.selectVideo = (item, i) => {
			this.setState({ currentIndex: i, videoPoster: item.img, videoUrl: item.video });
		};
	};

	componentWillMount () {
		getVideoList().then(({ data }) => {
			this.setState({ data, videoPoster: data[0].img, videoUrl: data[0].video });
		}, error => {
			console.log(error);
		});
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<div className="video-info-play">
				{ this.props.children }
				<div className="video-info-play-view">
					<IsLoadOver isLoadOver={ this.state.videoUrl }>
						<video poster={ this.state.videoPoster } src={ this.state.videoUrl } controls>
							抱歉，您的浏览器不支持Video，请下载最新版浏览器.
						</video>
					</IsLoadOver>
				</div>
				<IsLoadOver isLoadOver={ this.state.data.length }>
					<MenuSwiper className="video-info-play-swiper">
						<ul className="video-info-play-list">
							{
								this.state.data.map((item, i) => (
									<li onClick={ this.selectVideo.bind(this, item, i) } className={ this.state.currentIndex === i ? 'video-info-play-active' : '' } key={ i }>
										<img src={ item.img } alt=""/>
										<span className="video-info-play-item-title">{ item.title }</span>
									</li>
								))
							}
						</ul>
					</MenuSwiper>
				</IsLoadOver>
			</div>
		);
	};
};

export default Video;