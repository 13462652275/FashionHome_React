import React, { Component } from 'react';
import { fromJS, is } from 'immutable';
import PropTypes from 'prop-types';

import './Style/SofaList.css';

class SofaList extends Component {
	static propTypes = {
		data: PropTypes.array
	}

	constructor (props) {
		super(props);
		this.state = {};
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	}

	render () {
		return (
			<ul className="product-sofa-list wrapper">
				{
					this.props.data.map(item => (
						<li key={item.img}>
							<img src={item.img} width="100%" alt={item.title}/>
							<p>{item.title}</p>
						</li>
					))
				}
			</ul>
		);
	}
}

export default SofaList;