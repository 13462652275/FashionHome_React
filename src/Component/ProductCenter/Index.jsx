import React, { Component } from 'react';
import { fromJS, is } from 'immutable';
import { changeIndex } from '../../Redux/Action/Action';
import { dispatch } from '../../Redux/Store/Store';

import './Style/Index.css';

import HeaderBanner from '../Common/HeaderBanner';
import Menu from './Menu';

class Index extends Component {
	componentWillMount () {
		dispatch(changeIndex(this.props.index));
		this.props.setIndex();
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
	}

	render () {
		return (
			<div className="product-center content">
				<HeaderBanner 
					src={require('../../Images/pro_banner.jpg')} 
					title="产品中心" 
					text="PRODUCT CENTER"></HeaderBanner>
				<Menu></Menu>
			</div>
		);
	}
};

export default Index;