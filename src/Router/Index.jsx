//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { fromJS, is } from 'immutable';
// import { dispatch, getState } from '../Redux/Store/Store';

//样式
import './Style/Router.css';

//工具组件
import IsClickOutside from '../Tool/IsClickOutside';
import Icon from '../Tool/Icon';

//公共组件
import Header from '../Component/Common/Header';
import Footer from '../Component/Common/Footer';

//导航组件
import Index from '../Component/HomePage';
import ProductCenter from '../Component/ProductCenter';
import ClassicCase from '../Component/ClassicCase';
import DesignCenter from '../Component/DesignCenter';
import WalkIntoUs from '../Component/WalkIntoUs';
import VideoInfo from '../Component/VideoInfo';
import ContactUs from '../Component/ContactUs';
import NearStore from '../Component/NearStore';


class RouteConfig extends Component {
	static contextTypes = {
		store: PropTypes.any
	};

	constructor (props, context) {
		const { getState } = context.store;
		super(props, context);
		this.state = {
			routes: [
				{
					path: '/',
					title: '首页',
					icon: '&#xe606;',
					component: Index
				},
				{
					path: '/ProductCenter',
					title: '产品中心',
					icon: '&#xe61a;',
					component: ProductCenter
				},
				{
					path: '/ClassicCase',
					title: '经典案例',
					icon: '&#xe6a6;',
					component: ClassicCase
				},
				{
					path: '/DesignCenter',
					title: '设计中心',
					icon: '&#xe61e;',
					component: DesignCenter
				},
				{
					path: '/WalkIntoUs',
					title: '走进我们',
					icon: '&#xe602;',
					component: WalkIntoUs
				},
				{
					path: '/VideoInfo',
					title: '视频资讯',
					icon: '&#xe63b;',
					component: VideoInfo
				},
				{
					path: '/ContactUs',
					title: '联系我们',
					icon: '&#xe6fe;',
					component: ContactUs
				},
				{
					path: '/NearStore',
					title: '附近店面',
					icon: '&#xe603;',
					component: NearStore
				}
			],
			iconList: [],
			defaultIndex: getState().defaultIndex,
			currentIndex: getState().defaultIndex,
			showNavFlag: false
		};

		this.enterSelected = i => {
			this.setState({ currentIndex: i });
		};

		this.leaveSelected = () => {
			this.setState({ currentIndex: this.state.defaultIndex });
		};

		this.setIndex = () => {
			this.setState({
				defaultIndex: getState().defaultIndex,
				currentIndex: getState().defaultIndex
			});
		};

		this.showOrHidden = () => {
			this.setState({showNavFlag: !this.state.showNavFlag});
		};

		this.clickoutside = () => {
			this.setState({showNavFlag: false});
		};
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<Router>
				<article className="container">
					<Header />
					<IsClickOutside tag="nav" clickoutside={this.clickoutside}>
						<div className="nav-wrapper clearfix">
							<Icon className="nav-icon" color={this.state.showNavFlag ? '#77c111' : '#fff'} onClick={this.showOrHidden}>&#xe600;</Icon>
							<div className="header-icon">
								<Icon color="#fff">{this.state.routes[this.state.currentIndex].icon}</Icon>
								&nbsp;&nbsp;{this.state.routes[this.state.currentIndex].title}
							</div>
							<div className="nav-cn"></div>
							<ul 
								style={{right: this.state.showNavFlag ? '0' : '-71px'}} 
								className="nav-list"
								id="nav-list">
								{
									this.state.routes.map((item, i) => {
										return (
											<li 
												onMouseEnter={this.enterSelected.bind(this, i)} 
												onMouseLeave={this.leaveSelected}
												key={i}>
												<Link 
													to={item.path}
													style={{color: i === this.state.defaultIndex ? '#77c111' : '#fff'}}
													onClick={this.showOrHidden}
													> {item.title} </Link>
											</li>
										);
									})
								}
							</ul>
							<div 
								className="nav-selected" 
								style={{left: this.state.currentIndex * 135 + 'px'}}
								></div>
						</div>
					</IsClickOutside>
					{
						this.state.routes.map((item, i) => {
							return (
								<Route 
									exact 
									path={ item.path } 
									render={props => (
										<item.component 
											{ ...props } 
											index={ i }
											title={ item.title }
											setIndex={ this.setIndex }/>
									)}
									key={ i }/>
							);
						})
					}
					<Footer />
				</article>
			</Router>
		);
	}
};

export default RouteConfig;