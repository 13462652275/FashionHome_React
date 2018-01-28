import React, { Component } from 'react';
import { fromJS, is } from 'immutable';

import './Style/Sorting.css';

class Sorting extends Component {
	constructor (props) {
		super(props);
		this.state = {
			navWidth: '100%',
			maxDistance: 0,
			clientX: 0,
			currentDistance: 0,
			animation: {
				transition: 'none',
				marginLeft: 0
			},
			index: 0
		}

		this.animation = (transition, marginLeft) => {
			this.setState({ animation: { transition, marginLeft } });
		}

		this.touchStart = e => {
			this.setState({ clientX: e.changedTouches[0].clientX });
		}

		this.touchMove = e => {
			const distance = e.changedTouches[0].clientX - this.state.clientX;
			this.animation('none', this.state.currentDistance + distance);
		}

		this.touchEnd = e => {
			let marginLeft = this.state.animation.marginLeft;
			if (- marginLeft > this.state.maxDistance) {
				marginLeft = - this.state.maxDistance;
				this.animation('margin-left 0.7s', marginLeft);
			} else if (marginLeft > 0) {
				marginLeft = 0;
				this.animation('margin-left 0.7s', marginLeft);
			}
			this.setState({ currentDistance: marginLeft });
		}

		this.selected = (i, keyword) => {
			this.setState({ index: i });
			this.props.requestSofaData({ page: 1, total: 10, keyword  });
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	}

	componentWillMount () {
		const navWidth = this.props.data.length * 114 + 126;
		if (window.innerWidth < navWidth) {
			this.setState({
				navWidth,
				maxDistance: navWidth > window.innerWidth ? navWidth - window.innerWidth : 0
			});
		}
	}

	componentDidUpdate (nextProps) {
		const navWidth = nextProps.data.length * 114 + 126;
		this.setState({
			navWidth,
			maxDistance: navWidth > window.innerWidth ? navWidth - window.innerWidth : 0
		});
	}

	render () {
		return (
			<div className="product-sorting wrapper">
				<ul 
					className="product-sorting-list" 
					style={{width: this.state.navWidth, ...this.state.animation}}
					onTouchStart={this.touchStart}
					onTouchMove={this.touchMove}
					onTouchEnd={this.touchEnd}>
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
			</div>
		);
	}
};

export default Sorting;