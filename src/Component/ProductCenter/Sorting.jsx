//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//第三方模块
import { fromJS, is } from 'immutable';

//样式
import './Style/Sorting.css';

//工具组件
import MenuSwiper from 'Tool/MenuSwiper';
import IsLoadOver from 'Tool/IsLoadOver';


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
				<IsLoadOver isLoadOver={ this.props.data.length }>
					<MenuSwiper>
						<ul className="product-sorting-list" >
							<li> 排序分类：</li>
							{
								this.props.data.map((item, i) => (
									<li key={i}>
										<span 
											style={{color: this.state.index === i ? '#77c111' : '#333'}}
											onClick={this.selected.bind(this, i, item)}
											>{item}</span>
									</li>
								))
							}
						</ul>
					</MenuSwiper>
				</IsLoadOver>
			</div>
		);
	};
};

export default Sorting;