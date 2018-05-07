//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//第三方模块
import { fromJS, is } from 'immutable';

//API
import { getCelebrityBrandingList } from 'Api';

//样式
import './Style/CelebrityBranding.css';

//工具组件
import SlideList from 'Tool/SlideList';
import IsLoadOver from 'Tool/IsLoadOver';
import AutoPlayPicture from 'Tool/AutoPlayPicture';
import Icon from 'Tool/Icon';


class CelebrityBranding extends Component {
	constructor (props) {
		super(props);
		this.state = {
			data: []
		};
	};

	componentWillMount () {
		getCelebrityBrandingList().then(({ data }) => {
			this.setState({ data });
		}, error => {
			console.log(error);
		});
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		let start = true;
		if (window.innerWidth <= 768) start = false;

		return (
			<div className="celebrity-branding">
				{ this.props.children }
				<IsLoadOver isLoadOver={ this.state.data.length }>
					<SlideList slideView={ 3 } slideNumber={ this.state.data.length } slideWidth={ 400 } ifStart={ start }>
						<div className="celebrity-branding-list">
							{ this.state.data.map((item, i) => <DesignerItem data={ item } key={ i }/>) }
						</div>
					</SlideList>
				</IsLoadOver>
			</div>
		);
	};
};

class DesignerItem extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired,
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<div className="celebrity-branding-item">
				<AutoPlayPicture pictures={ this.props.data.imgs } ratio={ 240 / 360 }/>
				<h3>{ this.props.data.name }</h3>
				<p className="celebrity-branding-item-title">{ this.props.data.title }</p>
				<p className="celebrity-branding-item-describe">{ this.props.data.describe }</p>
				<button className="celebrity-branding-item-attention">
					<Icon>&#xe640;</Icon>
					关注
				</button>
			</div>
		);
	};
};


export default CelebrityBranding;