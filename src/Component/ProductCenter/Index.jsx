import React, { Component } from 'react';
import { fromJS, is } from 'immutable';
import { changeIndex } from '../../Redux/Action/Action';
import { dispatch } from '../../Redux/Store/Store';
import { getSortingList, getSofaData } from '../../Api/api';


import HeaderBanner from '../Common/HeaderBanner';
import Menu from './Menu';
import Sorting from './Sorting';
import SofaList from './SofaList';
import Page from '../Common/Page';

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
	}

	componentWillMount () {
		dispatch(changeIndex(this.props.index));
		this.props.setIndex();

		getSortingList().then(({ data }) => {
			this.setState({ sortingList: data });
		}, error => {
			console.log(21)
		});

		this.requestSofaData();
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
					text="PRODUCT CENTER"
					></HeaderBanner>
				<Menu></Menu>
				<Sorting data={this.state.sortingList} requestSofaData={this.requestSofaData}></Sorting>
				<SofaList data={this.state.sofaData}></SofaList>
				<div className="wrapper">
					<Page></Page>
				</div>
			</div>
		);
	}
};

export default Index;