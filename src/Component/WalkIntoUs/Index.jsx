//基础模块
import React, { Component } from 'react';
import { fromJS, is } from 'immutable';
// import { changeIndex } from '../../Redux/Action/Action';
// import { dispatch } from '../../Redux/Store/Store';

//高阶组件
import updateIndex from 'HOC/updateIndex';

//公共组件
import HeaderBanner from 'Common/HeaderBanner';
import Title from 'Common/Title';

//组件
import CelebrityBranding from './CelebrityBranding';
import CelebrityLife from './CelebrityLife';


class Index extends Component {
	componentWillMount () {
		// dispatch(changeIndex(this.props.index));
		// this.props.setIndex();
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<section className="walk-into-us content">
				<HeaderBanner title="走进我们" text="WALK INTO US" src={ require('../../Images/walk-banner.jpg') }/>
				<div className="wrapper">
					<CelebrityBranding>
						<Title title="明星品牌" url="/WalkIntoUs"/>
					</CelebrityBranding>
					<CelebrityLife>
						<Title title="明星生活" url="/WalkIntoUs"/>
					</CelebrityLife>
				</div>
			</section>
		);
	};
};

export default updateIndex(Index);