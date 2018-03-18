import React, { Component } from 'react';
import { fromJS, is } from 'immutable';
import { Link } from 'react-router-dom';

import './Style/ActivitiesAndInfo.css';

class ActivitiesAndInfo extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	}

	render () {
		return (
			<div className="index-activities">
				{this.props.children}
				<div className="index-activities-content">
					<Link to="/" className="fl">
						<img src={require('../../Images/activity_pic_01.png')} alt=""/>
						<div className="index-activities-info">
							<b>最新活动</b>
							<span>
								2015年的最后一天，「时尚家居」辞旧迎新，于亚非儿酒店举办了别开生面、趣味十足的2015年度总结表彰暨2016年迎新年会！ 2015年是公司飞速发展的一年，日新月异，业绩攀升，这些成绩都离不开「时尚家居」。
							</span>
							<i className="fr">了解更多></i>
						</div>
					</Link>
					<Link to="/" className="fr">
						<img src={require('../../Images/activity_pic_02.png')} alt=""/>
						<div className="index-activities-info">
							<b>3周年庆典</b>
							<span>
								2015年的最后一天，「时尚家居」辞旧迎新，于亚非儿酒店举办了别开生面、趣味十足的2015年度总结表彰暨2016年迎新年会！ 2015年是公司飞速发展的一年，日新月异，业绩攀升，这些成绩都离不开「时尚家居」。
							</span>
							<i className="fr">了解更多></i>
						</div>
					</Link>
				</div>
			</div>
		);
	}
};

export default ActivitiesAndInfo;