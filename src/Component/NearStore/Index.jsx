//基础模块
import React, { Component } from 'react';

//第三方模块
import { fromJS, is } from 'immutable';
import BMap from 'BMap';

//高阶组件
import updateIndex from 'HOC/updateIndex';

//公共组件
import HeaderBanner from 'Common/HeaderBanner';
import Title from 'Common/Title';

//组件
// import Title from 'Common/TiTte';

//样式
import './Style/Index.css';



class Index extends Component {
	componentDidMount () {
		var map = new BMap.Map("map"); // 创建Map实例
		map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
		map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
		map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
		map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<section className="near-store content">
				<HeaderBanner title="附近店面" text="NEAR THE STORE" src={ require('../../Images/near-store-banner.jpg') }/>
				<div className="wrapper">
					<Title title="附近店面" url="/NearStore"/>
					<div id="map"></div>
				</div>
			</section>
		);
	};
};

export default updateIndex(Index);