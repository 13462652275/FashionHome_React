//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//第三方模块
import { fromJS, is } from 'immutable';

//API
import { getHotWorkData } from 'Api';

//样式
import './Style/HotWork.css';


class HotWork extends Component {
	constructor (props) {
		super(props);
		this.state = {
			data: []
		};
	};

	componentWillMount () {
		getHotWorkData().then(({ data }) => {
			this.setState({ data });
		}, error => {
			console.log(error);
		});
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<div className="hot-work">
				{ this.props.children }
				<div className="hot-work-list">
					{
						this.state.data.map((item, i) => <HotWorkItem data={ item } key={ i }/>)
					}
				</div>
			</div>
		);
	};
};

class HotWorkItem extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired,
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<div className="hot-work-item">
				<img src={ this.props.data.img } alt={ this.props.data.name }/>
				<a className="hot-work-item-detail" href="/DesignCenter">
					<p>{ this.props.data.name }</p>
					<span>作者：{ this.props.data.author }</span>
				</a>
			</div>
		);
	};
};

export default HotWork;