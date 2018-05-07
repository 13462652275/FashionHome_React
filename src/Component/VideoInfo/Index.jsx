//基础模块
import React, { Component } from 'react';
import { fromJS, is } from 'immutable';

//样式
import './Style/Index.css';

//高阶组件
import updateIndex from 'HOC/updateIndex';

//公共组件
import HeaderBanner from '../Common/HeaderBanner';
// import Md5 from 'Tool/Md5';

//组件
import News from './News';
import Knowledge from './Knowledge';
import Video from './Video';


class Index extends Component {
	componentWillMount () {
		// console.log(Md5, Md5('abc'), 11)
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<section className="video-info content">
				<HeaderBanner src={ require('../../Images/video_banner.jpg') } title="视频资讯" text="VIDEO INFORMATION"/>
				<div className="wrapper">
					<h3 className="index-title">
						视频资讯
						<p>打开你的视野&品味品质时尚</p>
					</h3>
					<News>
						<VideoInfoTitle title="公司新闻" subtitle="News"/>
					</News>
					<Knowledge>
						<VideoInfoTitle title="家居知识" subtitle="Knowledge"/>
					</Knowledge>
					<Video>
						<VideoInfoTitle title="品牌视屏" subtitle="Video"/>
					</Video>
				</div>
			</section>
		);
	};
};

class VideoInfoTitle extends Component {
	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<h4 className="video-info-title">
				{ this.props.title }&nbsp;&nbsp;
				<span>{ this.props.subtitle }</span>
			</h4>
		);
	};
};

export default updateIndex(Index);