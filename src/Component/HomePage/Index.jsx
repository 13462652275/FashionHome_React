//基础模块
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { changeIndex } from 'Redux/Action/Action';
// import { dispatch } from 'Redux/Store/Store';

//第三方模块
import { fromJS, is } from 'immutable';

//API
import { getBannerList, getSwiperList } from 'Api';

//样式
import './Style/Index.css';

//高阶组件
import updateIndex from 'HOC/updateIndex';

//组件
import Banner from './Banner';
import ProductCenter from './ProductCenter';
import DesignCenter from './DesignCenter';
import ClassicCase from './ClassicCase';
import ActivitiesAndInfo from './ActivitiesAndInfo';
import ServiceSupport from './ServiceSupport';


class Index extends Component {
	constructor (props) {
		super(props);
		this.state = {
			bannerList: [],
			swiperList: [],
			x: 0
		}
	};

	componentWillMount () {
		// dispatch(changeIndex(this.props.index));
		// this.props.setIndex();

		this.timeID = setInterval(() => {
			this.setState({ x: this.state.x + 1 });
		}, 3000);

		getBannerList().then(({ data }) => {
			this.setState({ bannerList: data });
		});

		getSwiperList().then(({ data }) => {
			this.setState({ swiperList: data });
		});
	};

	componentWillUnmount () {
		clearTimeout(this.timeID);
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<section className="home-page content">
				<Banner bannerList={ this.state.bannerList }>
					<BannerInfo className="banner-info-pc"/>
				</Banner>
				<BannerInfo className="banner-info-phone"/>
				<ProductCenter>
					<Title title="产品中心" content="属于你的独一无二&专属时尚定制"/>
				</ProductCenter>
				<DesignCenter>
					<Title title="设计中心" content="用镜头寻找你心中的家&时尚家具"/>
				</DesignCenter>
				<ClassicCase swiperList={ this.state.swiperList }>
					<Title title="经典案例" content="只有专属于你下一个&更辉煌"/>
				</ClassicCase>
				<ActivitiesAndInfo>
					<Title title="活动与资讯" content="最新鲜的行内资讯&打造最时尚之家"/>
				</ActivitiesAndInfo>
				<ServiceSupport>
					<Title title="服务支持" content="细微之处&彰显企业魅力"/>
				</ServiceSupport>
			</section>
		);
	};
};

class BannerInfo extends Component {
	shouldComponentUpdate () {
		return false;
	};

	render () {
		let [ imgUrl, containerClass ] = [ '', 'banner-info' ];
		if (window.innerWidth > 1200) {
			imgUrl = require('../../Images/index_banner_logo.png');
		} else {
			imgUrl = require('../../Images/logo.png');
		};
		containerClass = this.props.className ? containerClass + ' ' + this.props.className : containerClass;
		return (
			<div className={ containerClass }>
				<img className="banner-info-logo" src={ imgUrl } alt=""/>
				<p className="banner_explain">
					<span>FASHION HOME </span>
					品牌家具成立于2013年，多年来以设计和生产个性化的家具和室内装饰品而著名，
					<br/>
					他们敢于向日常生活挑战，重视每一个细节。
				</p>
				<img className="banner-info-divider" width="100%" src={ require('../../Images/index_banner_pic01.png') } alt=""/>
				<Link className="details" to="/">查看详情</Link>
			</div>
		);
	};
};

class Title extends Component {
	shouldComponentUpdate (nextProps, nextState) {
		return false;
	};

	render () {
		return (
			<h3 className="index-title">
				{ this.props.title }
				<p>{ this.props.content }</p>
			</h3>
		);
	};
};

export default updateIndex(Index);