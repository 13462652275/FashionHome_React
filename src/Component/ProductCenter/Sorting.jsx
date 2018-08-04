//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//第三方模块
import { fromJS, is } from 'immutable';

//样式
import './Style/Sorting.css';


class Sorting extends Component {
	static propTypes = {
		data: PropTypes.array,
		requestSofaData: PropTypes.func
	};

	constructor (props) {
		super(props);
		this.state = { index: 0 };

		this.selected = (i, keyword) => {
			this.setState({ index: i });
			this.props.requestSofaData({ page: 1, total: 10, keyword  });
		}
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<div className="product-sorting">
				<b> 排序分类：</b>
				<ul className="product-sorting-list" >
					{
						this.props.data.map((item, i) => (
							<li key={ i }>
								<span 
									style={{ color: this.state.index === i ? '#77c111' : '#333' }}
									onClick={ this.selected.bind(this, i, item) }
									>{ item }</span>
							</li>
						))
					}
				</ul>
			</div>
		);
	};
};

export default Sorting;