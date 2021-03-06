//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//第三方模块
import { fromJS, is } from 'immutable';

//API
import { getHotCompanyList } from 'Api';

//样式
import './Style/HotCompany.css';

//工具组件
import SlideList from 'Tool/SlideList';
import IsLoadOver from 'Tool/IsLoadOver';
import AutoPlayPicture from 'Tool/AutoPlayPicture';


class HotCompany extends Component {
	constructor (props) {
		super(props);
		this.state = {
			data: []
		};
	};

	componentWillMount () {
		getHotCompanyList().then(({ data }) => {
			this.setState({ data });
		}, error => {
			console.log(error);
		});
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		let [ width, slideView, start ] = [ window.innerWidth, 3, true ];
		if (width <= 1200 && width >= 1024) {
			slideView = 2;
		} else if (width <= 1024 && width >= 768) {
			slideView = 1;
		};

		if (width <= 767) start = false;

		return (
			<div className="hot-company">
				{ this.props.children }
				<IsLoadOver isLoadOver={ this.state.data.length }>
					<SlideList className="slide-list-ipad" slideView={ slideView } slideNumber={ this.state.data.length } slideWidth={ 420 } ifStart={ start }>
						<div className="hot-company-list">
							{ this.state.data.map((item, i) => <HotCompanyItem data={ item } key={ i }/>) }
						</div>
					</SlideList>
				</IsLoadOver>
			</div>
		);
	};
};

class HotCompanyItem extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired,
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<div className="hot-company-item">
				<AutoPlayPicture pictures={ this.props.data.production } ratio={ 300 / 360 }/>
				<h3>{ this.props.data.name }</h3>
				<p>{ this.props.data.describe }</p>
				<button className="hot-company-item-attention">查看详情</button>
			</div>
		);
	};
};

export default HotCompany;