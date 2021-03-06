//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fromJS, is } from 'immutable';

//样式
import './Style/SofaList.css';


class SofaList extends Component {
	static propTypes = {
		data: PropTypes.array
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<ul className="product-sofa-list">
				{
					this.props.data.map((item, i) => (
						<li key={i}>
							<div className="product-sofa-content">
								<img src={item.img} width="100%" alt={item.title}/>
								<Link to='/ProductCenter'>
									<div className="product-sofa-list-title">{item.title}</div>
									<div className="product-sofa-list-detail">
										<div className="product-sofa-list-detail-text">
											<p style={{ fontSize: 18, fontWeight: 'bold'}}>{item.title}</p>
												{
													item.describe.split('\r').map(text => (<p key={text}>{text}</p>))
												}
											<p>......</p>
										</div>
									</div>
								</Link>
							</div>
						</li>
					))
				}
			</ul>
		);
	};
};

export default SofaList;