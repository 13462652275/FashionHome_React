//基础模块
import React, { Component } from 'react';
import { fromJS, is } from 'immutable';

//高阶组件
import updateIndex from 'HOC/updateIndex';

//公共组件
import HeaderBanner from 'Common/HeaderBanner';
import Title from 'Common/Tilte';

//工具组件
import Page from 'Tool/Page';

//组件
import Designer from './Designer';
import HotCompany from './HotCompany';
import HotWork from './HotWork';


class Index extends Component {
	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<section className="design-center content">
				<HeaderBanner title="设计中心" text="DESIGN CENTER" src={ require('../../Images/join_02.png') }/>
				<div className="wrapper">
					<Designer>
						<Title title="设计师" url="/DesignCenter"/>
					</Designer>
					<HotCompany>
						<Title title="热门设计公司" url="/DesignCenter"/>
					</HotCompany>
					<HotWork>
						<Title title="热门作品" url="/DesignCenter"/>
					</HotWork>
					<Page pageSize={ 10 } total={ 100 } style={{ marginBottom: 30 }}></Page>
				</div>
			</section>
		);
	};
};

export default updateIndex(Index);