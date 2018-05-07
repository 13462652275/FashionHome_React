//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//第三方模块
import { fromJS, is } from 'immutable';

//样式
import './Style/AutoPlayPicture.css';


class AutoPlayPicture extends Component {
	static propTypes = {
		pictures: PropTypes.array.isRequired,
		ratio: PropTypes.number.isRequired,// 高 / 宽
		second: PropTypes.number,
		className: PropTypes.string
	};

	static defaultProps = {
		second: 3,
		className: ''
	};

	constructor (props) {
		super(props);
		this.state = {
			currentIndex: 0
		};
		this.autoPlayTime = null;

		this.autoPlay = () => {
			const currentIndex = this.state.currentIndex >= this.props.pictures.length - 1 ? 0 : this.state.currentIndex + 1;
			this.setState({ currentIndex });
			this.autoPlayTime = setTimeout(this.autoPlay, this.props.second * 1000);
		};
	};

	componentWillMount () {
		this.autoPlayTime = setTimeout(this.autoPlay, this.props.second * 1000);
	};

	componentWillUnmount () {
		clearTimeout(this.autoPlayTime);
	};

	shouldComponentUpdate (nextProps, nextState) {
		return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
	};

	render () {
		return (
			<div className={ ('auto-play-picture ' + this.props.className).trim() } style={{ paddingBottom: this.props.ratio * 100 + '%' }}>
				{
					this.props.pictures.map((item, i) => (
						<img style={{ opacity: this.state.currentIndex === i ? 1 : 0 }} src={ item } key={ i } alt=""/>
					))
				}
			</div>
		);
	};
};

export default AutoPlayPicture;