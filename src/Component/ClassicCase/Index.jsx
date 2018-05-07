//基础模块
import React, { Component } from 'react';
import { fromJS, is } from 'immutable';
// import { changeIndex } from 'Redux/Action/Action';
// import { dispatch } from 'Redux/Store/Store';

//API
import { getCaseData } from 'Api';

//高阶组件
import updateIndex from 'HOC/updateIndex';

//工具组件
import Page from 'Tool/Page';

//公共组件
import HeaderBanner from '../Common/HeaderBanner';

//组件
import CaseItem from './CaseItem';


class Index extends Component {
	constructor (props) {
		super(props);
		this.state = {
			caseDataList: []
		};
	};

	componentWillMount () {
		// dispatch(changeIndex(this.props.index));
		// this.props.setIndex();

		getCaseData().then(({ data }) => {
			let caseDataList = [];
			for (let i = 0, iLength = data.length; i < iLength; i += 3) {
				caseDataList.push({
					big: data[i],
					small: [ data[i + 1],  data[i + 2] ]
				});
			};
			this.setState({ caseDataList });
		}, error => {
			console.log(error);
		});
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<section className="classic-case content">
				<HeaderBanner src={ require('../../Images/sutra_case_02.jpg') } title="经典案例" text="CLASSIC CASE"/>
				<div className="wrapper">
					{
						this.state.caseDataList.map((item, i) => (<CaseItem layout={i % 2 === 0 ? 'left' : 'right'} data={item} key={i}/>))
					}
					<Page pageSize={ 10 } total={ 100 } style={{ margin: '20px 0' }}></Page>
				</div>
			</section>
		);
	};
};

export default updateIndex(Index);