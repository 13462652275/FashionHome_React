//基础模块
import React, { Component } from 'react';

//第三方模块
import { fromJS, is } from 'immutable';

//API
import { getNewsData } from 'Api';

//样式
import './Style/News.css';


class News extends Component {
	constructor (props) {
		super(props);
		this.state = {
			data: {}
		};
	};

	componentWillMount () {
		getNewsData().then(({ data }) => {
			this.setState({ data });
		}, error => {
			console.log(error);
		});
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		let children = null;
		if (Object.keys(this.state.data).length) {
			children = (
				<div className="video-info-news">
					{ this.props.children }
					<div className="video-info-news-left">
						<a href="/VideoInfo" className="video-info-news-item video-info-news-left-first">
							<img src={ this.state.data.leftTop.img } alt=""/>
							<p className="video-info-news-title">{ this.state.data.leftTop.title }</p>
							<p className="video-info-news-content">{ this.state.data.leftTop.content }</p>
						</a>
						<a href="/VideoInfo" className="video-info-news-item video-info-news-left-second">
							<img src={ this.state.data.leftBottom.img } alt=""/>
							<p className="video-info-news-title">{ this.state.data.leftBottom.title }</p>
							<p className="video-info-news-content">{ this.state.data.leftBottom.content }</p>
						</a>
					</div>
					<div className="video-info-news-right">
						<a href="/VideoInfo" className="video-info-news-item video-info-news-right-first">
							<img src={ this.state.data.right.img } alt=""/>
							<p className="video-info-news-title">{ this.state.data.right.title }</p>
							<p className="video-info-news-content">{ this.state.data.right.content }</p>
						</a>
						<a href="/VideoInfo" className="video-info-news-more">查看全部新闻 >></a>
					</div>
				</div>
			);
		};

		return children;
	};
};

export default News;