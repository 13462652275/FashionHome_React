//基础模块
import React, { Component } from 'react';

//第三方模块
import { fromJS, is } from 'immutable';
import { one } from 'Redux/Action/Action';
import { dispatch } from 'Redux/Store/Store';

//API
import { getSortingList, getSofaData } from 'Api';

//高阶组件
import updateIndex from 'HOC/updateIndex';

//工具组件
import Page from 'Tool/Page';

//公共组件
import HeaderBanner from '../Common/HeaderBanner';

//组件
import Menu from './Menu';
import Sorting from './Sorting';
import SofaList from './SofaList';


class Index extends Component {
	constructor (props) {
		super (props);
		this.state = {
			sortingList: [],
			sofaData: []
		};

		this.requestSofaData = (params = { page: 1, total: 10 }) => {
			getSofaData({ ...params }).then(({ data }) => {
				this.setState({ sofaData: data });
			}, error => {
				console.log(error, 20);
			});
		};
	};

	componentWillMount () {
		dispatch(one(10));
		// this.props.setIndex();

		getSortingList().then(({ data }) => {
			this.setState({ sortingList: data });
		}, error => {
			console.log(21)
		});

		this.requestSofaData();
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<section className="product-center content">
				<HeaderBanner src={ require('../../Images/pro_banner.jpg') } title="产品中心" text="PRODUCT CENTER"/>
				<div className="wrapper">
					<Menu />
					<Sorting data={ this.state.sortingList } requestSofaData={ this.requestSofaData }/>
					<SofaList data={ this.state.sofaData }/>
					<Page pageSize={ 10 } total={ 100 } style={{ marginBottom: 30 }}></Page>
				</div>
			</section>
		);
	};
};

export default updateIndex(Index);