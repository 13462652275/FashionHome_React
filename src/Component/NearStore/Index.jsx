//基础模块
import React, { Component } from 'react';

//第三方模块
import { fromJS, is } from 'immutable';

//高阶组件
import updateIndex from 'HOC/updateIndex';

//公共组件
import HeaderBanner from 'Common/HeaderBanner';

//组件
// import  from '';



class Index extends Component {
	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<section className="near-store content">
				<HeaderBanner title="附近店面" text="NEAR THE STORE" src={ require('../../Images/near-store-banner.jpg') }/>
			</section>
		);
	};
};

export default updateIndex(Index);