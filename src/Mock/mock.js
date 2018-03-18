import axios from '../Api/api';
import MockAdapter from 'axios-mock-adapter';

export default {
	/**
	 * mock bootstrap
	 */
	bootstrap () {
		let mock = new MockAdapter(axios);
		
		mock.onGet('/footerList').reply(200, {
				'家具': [ '古典', '新古典', '现代' ],
				'建材': [ '卫浴', '卧室用品', '架子', '置物台', '餐厅用品', '墙板门框' ],
				'饰品': [ '灯', '靠包', '饰品' ]
			}
		);

		mock.onGet('/bannerList').reply(config => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, [
						{
							img: require('../Images/index_banner01.jpg'),
							url: '/',
							alt: '时尚家居首页'
						},
						{
							img: require('../Images/index_banner02.jpg'),
							url: '/',
							alt: '时尚家居首页'
						},
						{
							img: require('../Images/index_banner03.jpg'),
							url: '/',
							alt: '时尚家居首页'
						},
						{
							img: require('../Images/index_banner04.jpg'),
							url: '/',
							alt: '时尚家居首页'
						}
					]]);
				}, 500);
			});
		});

		mock.onGet('/swiperList').reply(config => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, [
						{
							img: require('../Images/index_classic_01.jpg'),
							url: '/',
							alt: '时尚家居'
						},
						{
							img: require('../Images/index_classic_02.jpg'),
							url: '/',
							alt: '时尚家居'
						},
						{
							img: require('../Images/index_classic_03.jpg'),
							url: '/',
							alt: '时尚家居'
						},
						{
							img: require('../Images/index_classic_04.jpg'),
							url: '/',
							alt: '时尚家居'
						},
						{
							img: require('../Images/index_classic_05.jpg'),
							url: '/',
							alt: '时尚家居'
						},
						{
							img: require('../Images/index_classic_06.jpg'),
							url: '/',
							alt: '时尚家居'
						},
						{
							img: require('../Images/index_classic_07.jpg'),
							url: '/',
							alt: '时尚家居'
						},
						{
							img: require('../Images/index_classic_08.jpg'),
							url: '/',
							alt: '时尚家居'
						},
						{
							img: require('../Images/index_classic_09.jpg'),
							url: '/',
							alt: '时尚家居'
						}
					]]);
				}, 500);
			});
		});

		mock.onGet('/indexProductData').reply(config => {
			const [ furniture, buliding, decoration, furnitureNav, bulidingNav, decorationNav ] = [
				[
					{
						title: '客厅三人沙发',
						img: require('../Images/pc_pic_01.png'),
						url: '/'
					},
					{
						title: '客厅单人沙发',
						img: require('../Images/pc_pic_02.png'),
						url: '/'
					},
					{
						title: '客厅组合沙发',
						img: require('../Images/pc_pic_03.png'),
						url: '/'
					},
					{
						title: '客厅双人沙发',
						img: require('../Images/pc_pic_04.png'),
						url: '/'
					}
				],
				[
					{
						title: '会议室隔板石材',
						img: require('../Images/bm_pic_01.png'),
						url: '/'
					},
					{
						title: '客厅地板',
						img: require('../Images/bm_pic_02.png'),
						url: '/'
					},
					{
						title: '厨房瓷砖',
						img: require('../Images/bm_pic_03.png'),
						url: '/'
					}
				],
				[
					{
						title: '细绒地毯',
						img: require('../Images/dc_pic_02.png'),
						url: '/'
					},
					{
						title: '卧室饰品',
						img: require('../Images/dc_pic_01.png'),
						url: '/'
					},
					{
						title: '卧室灯具',
						img: require('../Images/dc_pic_03.png'),
						url: '/'
					}
				],
				[ '客厅', '卧室', '书房', '餐厅', '办公', '儿童', '房厨', '户外' ],
				[ '地板', '瓷砖', '门窗', '石材', '卫浴', '橱窗', '涂料', '墙纸', '开关' ],
				[ '面料', '灯具', '饰品', '床垫', '床品', '地毯', '窗帘', '装饰画' ]
			];
			furnitureNav.map(item => ({ name: item, data: [ ...furniture ] }));
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, {
						furniture: furnitureNav.map(item => ({ name: item, data: [ ...furniture ] })),
						buliding: bulidingNav.map(item => ({ name: item, data: [ ...buliding ] })),
						decoration: decorationNav.map(item => ({ name: item, data: [ ...decoration ] }))
					}
				]);
				}, 500);
			});
		});

		mock.onGet('/menuList').reply(config => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, [
						{
							title: '家具',
							columns: [
								{
									name: '风格',
									list: ['全部', '古典', '新古典', '现代']
								},
								{
									name: '类型',
									list: ['全部', '沙发', '床', '桌子', '柜子', '椅子', '茶几', '凳子']
								},
								{
									name: '空间',
									list: ['全部', '客厅', '卧室', '书房', '餐厅', '办公', '儿童', '房厨', '户外']
								}
							]
						},
						{
							title: '建材',
							columns: [
								{
									name: '风格',
									list: ['全部', '古典', '新古典', '现代']
								},
								{
									name: '类型',
									list: ['全部', '卫浴', '卧室用品', '架子', '置物台', '餐厅用品', '墙板门框']
								},
								{
									name: '空间',
									list: ['全部', '客厅', '卧室', '书房', '餐厅', '办公', '儿童', '房厨', '户外']
								}
							]
						},
						{
							title: '饰品',
							columns: [
								{
									name: '风格',
									list: ['全部', '古典', '新古典', '现代']
								},
								{
									name: '类型',
									list: ['全部', '灯', '靠包', '饰品', '镜子', '其他']
								},
								{
									name: '空间',
									list: ['全部', '客厅', '卧室', '书房', '餐厅', '办公', '儿童', '房厨', '户外']
								}
							]
						}
					]]);
				}, 500);
			});
		});

		mock.onGet('/sortingList').reply(({ params }) => {
			let list = [
				'沙发',
				'单人沙发',
				'双人沙发',
				'三人沙发',
				'四人沙发',
				'组合沙发',
				'半圆沙发',
				'转角沙发',
				'美人榻'
			];
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, list]);
				}, 500);
			});
		});

		mock.onGet('/sofaData').reply(({ params }) => {
			const url = '/';
			let data = [
				{
					title: '美人榻',
					describe: '客厅卧室单人拼接沙发\r下部特色扣带式链接\r真皮材质',
					img: require('../Images/sofa_01.png'),
					url,
				},
				{
					title: '三人沙发',
					describe: '客厅卧室单人拼接沙发\r下部特色扣带式链接\r真皮材质',
					img: require('../Images/sofa_02.jpg'),
					url,
				},
				{
					title: '转角沙发',
					describe: '客厅卧室单人拼接沙发\r下部特色扣带式链接\r真皮材质',
					img: require('../Images/sofa_03.jpg'),
					url,
				},
				{
					title: '单人沙发',
					describe: '客厅卧室单人拼接沙发\r下部特色扣带式链接\r真皮材质',
					img: require('../Images/sofa_04.jpg'),
					url,
				},
				{
					title: '单人沙发',
					describe: '客厅卧室单人拼接沙发\r下部特色扣带式链接\r真皮材质',
					img: require('../Images/sofa_04.jpg'),
					url,
				},
				{
					title: '组合沙发',
					describe: '客厅卧室单人拼接沙发\r下部特色扣带式链接\r真皮材质',
					img: require('../Images/sofa_05.jpg'),
					url,
				},
				{
					title: '双人沙发',
					describe: '客厅卧室单人拼接沙发\r下部特色扣带式链接\r真皮材质',
					img: require('../Images/sofa_06.jpg'),
					url,
				},
				{
					title: '单人沙发',
					describe: '客厅卧室单人拼接沙发\r下部特色扣带式链接\r真皮材质',
					img: require('../Images/sofa_07.jpg'),
					url,
				},
				{
					title: '组合沙发',
					describe: '客厅卧室单人拼接沙发\r下部特色扣带式链接\r真皮材质',
					img: require('../Images/sofa_08.jpg'),
					url,
				}
			];

			let newArr = [];
			if (params.page !== 1) {
				for (let i = 0, iLength = data.length; i < iLength; i ++) {
					let number = Math.floor(Math.random() * data.length);
					newArr.push({ ...data[number] });
					data.splice(number, 1);
				};
			} else if (params.keyword) {
				newArr = data.filter(item => new RegExp(params.keyword).test(item.title));
			} else {
				newArr = data;
			};

			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, newArr]);
				}, 500);
			});
		});
	}
}