//基础模块
import React, { Component } from 'react';

//第三方模块
import { fromJS, is } from 'immutable';

//高阶组件
import updateIndex from 'HOC/updateIndex';

//组件
import HeaderInfo from './HeaderInfo';
import Service from './Service';


class Index extends Component {
	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<section className="contact-us content">
				<HeaderInfo/>
				<Service/>
			</section>
		);
	};
};

export default updateIndex(Index);