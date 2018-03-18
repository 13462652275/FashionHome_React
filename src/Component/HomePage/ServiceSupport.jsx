import React, { Component } from 'react';
import { fromJS, is } from 'immutable';
import { Link } from 'react-router-dom';

import './Style/ServiceSupport.css';

class ServiceSupport extends Component {
	constructor(props) {
		super(props);
		this.state = {
			indexServiceList: [
				{
					iconCode: '&#xe698;',
					title: '团队',
					text: '强大的电子商务团队，自建完善的电商平台，为您提供完美的用户体验'
				},
				{
					iconCode: '&#xe685;',
					title: '报价',
					text: '24小时零距离，专业团队为您提供最方便便捷的服务'
				},
				{
					iconCode: '&#xe608;',
					title: '物流',
					text: '公司自有物流，一站式服务，程序化管理，六星级服务到您家'
				},
				{
					iconCode: '&#xe636;',
					title: '销售',
					text: '专业的销售顾问，在短时间内捕捉您的需求'
				},
				{
					iconCode: '&#xe60b;',
					title: '设计',
					text: '公司有专业的设计团队，为您提供品质家园'
				},
				{
					iconCode: '&#xe6cf;',
					title: '加盟',
					text: 'Fanshion Home欢迎您的加盟'
				}
			]
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	}

	render () {
		return (
			<div className="index-service wrapper">
				{this.props.children}
				<div className="index-service-content">
					{
						this.state.indexServiceList.map((item, i) => {
							return (
								<div className="index-service-item-box" key={i}>
									<Link to="/">
										<span className="iconfont" dangerouslySetInnerHTML={{__html: item.iconCode}}></span>
									</Link>
									<h6>{item.title}</h6>
									<p className="one">{item.text}</p>
								</div>
							);
						})
					}
				</div>
			</div>
		);
	}
};

export default ServiceSupport;