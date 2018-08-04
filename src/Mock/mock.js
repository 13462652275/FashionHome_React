import axios from 'Api';
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
			const url = '/ProductCenter';
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

		mock.onGet('/caseData').reply(({ params }) => {
			const url = '/ClassicCase';
			let data = [
				{
					title: '郑州东区配送成功安装案例 [时尚家居]',
					img: require('../Images/classicCase_con01.jpg'),
					url
				},
				{
					title: '新密花园项目配送安装成功案例 [时尚家居]',
					img: require('../Images/classicCase_con02.jpg'),
					url
				},
				{
					title: '河南紫辰院项目产品配送安装成功案例 [时尚家居]',
					img: require('../Images/classicCase_con03.jpg'),
					url
				},
				{
					title: '郑州航空港壹号项目产品配送安装成功案例 [时尚家居]',
					img: require('../Images/classicCase_con04.jpg'),
					url
				},
				{
					title: '河南泛海国际配送安装成功案例[时尚家居]',
					img: require('../Images/classicCase_con05.jpg'),
					url
				},
				{
					title: '新郑卓越前海壹号项目产品配送安装成功案例 [时尚家居]',
					img: require('../Images/classicCase_con06.jpg'),
					url
				},
				{
					title: '郑州龙湖配送安装成功案例 [时尚家居]',
					img: require('../Images/classicCase_con07.jpg'),
					url
				},
				{
					title: '南阳华侨城吨水岸二批安装成功案例 [时尚家居]',
					img: require('../Images/classicCase_con08.jpg'),
					url
				},
				{
					title: '洛阳大华西郊别墅安装成功案例[时尚家居]',
					img: require('../Images/classicCase_con09.jpg'),
					url
				},
				{
					title: '中牟万科如园配送安装成功案例 [时尚家居]',
					img: require('../Images/classicCase_con10.jpg'),
					url
				},
				{
					title: '洛阳绿城香樟园别墅配送安装成功案例 [时尚家居]',
					img: require('../Images/classicCase_con11.jpg'),
					url
				},
				{
					title: '开封东庭人家高档别墅配送安装成功案例 [时尚家居]',
					img: require('../Images/classicCase_con12.jpg'),
					url
				}
			];
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, data]);
				}, 500);
			});
		});

		mock.onGet('/designersList').reply(({ params }) => {
			let data = [
				{
					name: '张芳',
					describe: '室内设计师 现代简约 新古典 后现代',
					portrait: require('../Images/designer-img01.png'),
					production: [
						require('../Images/designer-img01-work01.jpg'),
						require('../Images/designer-img01-work02.jpg')
					],
				},
				{
					name: '吴龙',
					describe: '室内设计师 现代简约 新古典 后现代',
					portrait: require('../Images/designer-img02.png'),
					production: [
						require('../Images/designer-img02-work01.jpg'),
						require('../Images/designer-img02-work02.jpg')
					],
				},
				{
					name: '田雯',
					describe: '室内设计师 现代简约 新古典 后现代',
					portrait: require('../Images/designer-img03.png'),
					production: [
						require('../Images/designer-img03-work01.jpg'),
						require('../Images/designer-img03-work02.jpg')
					],
				},
				{
					name: '李琐',
					describe: '室内设计师 现代简约 新古典 后现代',
					portrait: require('../Images/designer-img04.png'),
					production: [
						require('../Images/designer-img01-work01.jpg'),
						require('../Images/designer-img01-work02.jpg')
					],
				},
			];
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, data]);
				}, 500);
			});
		});

		mock.onGet('/hotCompanyList').reply(({ params }) => {
			let data = [
				{
					name: '大野国际装饰公司',
					describe: '设计师5位 作品12个',
					production: [
						require('../Images/hot-design01.jpg'),
						require('../Images/hot-design02.jpg')
					],
				},
				{
					name: '超越家居公司',
					describe: '设计师4位 作品10个',
					production: [
						require('../Images/hot-design03.jpg'),
						require('../Images/hot-design04.jpg')
					],
				},
				{
					name: '红星装饰公司',
					describe: '设计师6位 作品13个',
					production: [
						require('../Images/hot-design05.jpg'),
						require('../Images/hot-design06.jpg')
					],
				},
				{
					name: '超星家具公司',
					describe: '设计师5位 作品11个',
					production: [
						require('../Images/hot-design01.jpg'),
						require('../Images/hot-design02.jpg')
					],
				},
			];
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, data]);
				}, 500);
			});
		});

		mock.onGet('/hotWorkData').reply(({ params }) => {
			const url = '/DesignCenter';
			let data = [
				{
					name: '外滩九里',
					author: '佚名',
					url,
					img: require('../Images/design_21.png')
				},
				{
					name: '内外无界',
					author: '佚名',
					url,
					img: require('../Images/design_24.png')
				},
				{
					name: '云溪大宅',
					author: '佚名',
					url,
					img: require('../Images/design_27.png')
				},
				{
					name: '富春居',
					author: '佚名',
					url,
					img: require('../Images/design_31.png')
				},
				{
					name: '恒晟国际',
					author: '佚名',
					url,
					img: require('../Images/design_32.png')
				},
				{
					name: '不能忘记的家',
					author: '佚名',
					url,
					img: require('../Images/design_33.png')
				},
			];
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, data]);
				}, 500);
			});
		});

		mock.onGet('/celebrityBrandingList').reply(({ params }) => {
			let data = [
				{
					name: 'Lineatre',
					title: '卫浴届的劳斯莱斯Lineatre，如美人出浴',
					describe: 'Lineatre，利奈德莱，成立于1983年，以其古典奢华风格享誉全球，被誉为卫浴领域的“劳斯莱斯”',
					imgs: [
						require('../Images/bornFree01.jpg'),
						require('../Images/bornFree02.jpg')
					],
				},
				{
					name: 'Bruno Zampa',
					title: '贴心品质是 Bruno Zampa的追求',
					describe: 'Bruno Zampa保留材质、色彩的大致风格，仍然可以在细节处，很强烈地感受传统的历史开放、创新',
					imgs: [
						require('../Images/bornFree03.jpg'),
						require('../Images/bornFree04.jpg')
					],
				},
				{
					name: 'Ceppi Style',
					title: '难掩的皇家贵气 Ceppi Style值得人为之着迷',
					describe: '迷恋手工制作，每一个细节都彰显工艺气息的国家来说，价格永远不是最重要的，最重要的是精雕细',
					imgs: [
						require('../Images/bornFree05.jpg'),
						require('../Images/bornFree06.jpg')
					],
				},
				{
					name: 'Lineatre',
					title: '卫浴届的劳斯莱斯Lineatre，如美人出浴',
					describe: 'Lineatre，利奈德莱，成立于1983年，以其古典奢华风格享誉全球，被誉为卫浴领域的“劳斯莱斯”',
					imgs: [
						require('../Images/bornFree01.jpg'),
						require('../Images/bornFree02.jpg')
					],
				}
			];
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, data]);
				}, 500);
			});
		});

		mock.onGet('/newsData').reply(({ params }) => {
			const url = '/VideoInfo';
			let data = {
				leftTop: {
					title: '时尚家居受邀参与第十一届河南省文化创意产业博览会。',
					content: '本届文博会将紧紧围绕“创新、协调、绿色、开放、共享”的发展理念，以“激发文化活力，引领产业创新”为主题，全面展现我国优秀传统文化传承创新。',
					img: require('../Images/video_09.png'),
					url
				},
				leftBottom: {
					title: '时尚家居成功举行“最美秋天”秋季旅游活动。',
					content: '时尚家居一直秉承着“开心工作、快乐生活”的理念，此次旅游活动持续一周，员工们领略了秋季独有的美丽，丰富了员工生活。',
					img: require('../Images/video_17.png'),
					url
				},
				right: {
					title: '时尚家居招商大会暨行业交流会议圆满落幕。',
					content: '本次招商会议旨在让时尚家居品牌走出去，以企业的高品质产品和良好的业内口碑，扩大品牌的影响力，并通过行业交流，实现企业的创新，完善企业的理念。',
					img: require('../Images/video_12.png'),
					url
				}
			};
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, data]);
				}, 500);
			});
		});

		mock.onGet('/videoList').reply(({ params }) => {
			let data = [
				{
					title: '时尚家居丨品味',
					img: require('../Video/video_Alchymia.jpg'),
					video: require('../Video/video_Alchymia.mov')
				},
				{
					title: '时尚家居丨探索',
					img: require('../Video/video_Baxter2.jpg'),
					video: require('../Video/video_Baxter2.mov')
				},
				{
					title: '时尚家居丨品味',
					img: require('../Video/video_GOLD.jpg'),
					video: require('../Video/video_GOLD.mov')
				},
				{
					title: '时尚家居丨尚居',
					img: require('../Video/video_Alchymia.jpg'),
					video: require('../Video/video_Alchymia.mov')
				}
			];
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, data]);
				}, 500);
			});
		});
	}
}