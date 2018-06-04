﻿var imgs = {
	play: './assets/images/play.png',
	logo: './assets/images/logo.png',
	indexBg: './assets/images/index-bg.jpg',
	introduceBg: './assets/images/introduce-bg.jpg',
	detailBg: './assets/images/detail-bg.jpg',
	introTitle:'./assets/images/intro-title.png',
	detailTitle:'./assets/images/detail-title.png',
	entry:'./assets/images/entry.png',
	arrow: './assets/images/arrow.png',
	videoPoster:"./assets/images/video-poster.png",
	//mask: './assets/images/mask.png',
	
	msg:'./assets/images/msg.png',
	title1:'./assets/images/title1-1.png',
	zlm:'./assets/images/zlm.jpg',
	head:'./assets/images/head.png',
	edit:'./assets/images/edit.png',
	
}

var texts = {
	zlmIntro: '5月28日，中宣部授予张黎明同志“时代楷模”称号。',
	zlmName: '张黎明',
	zlmIntroContent:[
		'张黎明，国家电网天津滨海供电公司运维检修部配电抢修一班班长、滨海黎明共产党员服务队队长，曾荣获全国优秀共产党员、全国劳动模范、全国五一劳动奖章、全国职工职业道德建设标兵、全国岗位学雷锋标兵等多项荣誉，党的十九大代表。',
		'他爱岗敬业，工作30多年来始终奋战在电力抢修一线，累计巡线8万多公里，完成故障抢修作业近2万次，被誉为电力抢修的“活地图”。',
		'他勇于创新，先后实现技术革新400余项，20多项填补电力行业空白，是知识型、技能型、创新型劳动者的杰出代表。',
		'他甘于奉献，模范践行全心全意为人民服务的根本宗旨，带领黎明共产党员服务队，十年如一日开展学雷锋志愿服务，用爱心搭起了企业与群众的“连心桥”。'
	],
	
}

var aigangjingye = {//爱岗敬业
	title:imgs.detailTitle,
	videoPoster:imgs.videoPoster,
	videoText: '在同事眼中，张黎明不仅是个勤于学技术、精于干专业的技术工，更是一个办事认真敬业、值得信任的“实诚人”。 ',
	image:imgs.zlm,
	videoUrl:'./assets/video/aigangjingye.mp4',
	imageText: '一年冬天，张黎明要在夜间巡查沿线77根电线杆。他蹬着自行车一不小心掉进水渠中，冰水将他的棉裤浸透。线路尚未巡完，上岸后，张黎明忍着逐渐结冰的棉裤散发出的刺骨寒气，跨上自行车，硬是将整条线路逐段不落巡查完才回家换衣服。他说“要是不巡完，我就不放心。'
}
var yongyuchuangxin = { //勇于创新
	title: imgs.detailTitle,
	videoPoster: imgs.videoPoster,
	videoText: '“工作是快乐的。创新让工作更快乐。”张黎明常把这句话挂在嘴边勉励同事、徒弟们。 ',
	image: imgs.zlm,
	videoUrl: './assets/video/aigangjingye.mp4',
	imageText: '2011年，以张黎明名字命名的“张黎明创新工作室”应运而生，这是国网天津市电力公司的第一个职工创新工作室。工作室成立以来，张黎明带领同事们开展技术革新400余项，获得国家专利140余个，20多项成果填补智能电网建设空白。'
}
var comments = [
	{
		headimgurl:imgs.head,
		name: '滨海新区区委宣传部张宁',
		content: '张黎明在看似平凡中彰显了一名共产党员的先进本色。',
	},
	{
		headimgurl: imgs.head,
		name: '国网天津电力公司党建工作部主任及明',
		content: '张黎明所展现出的良好的党性修养产生了辐射效应，带动了一批党员群众向他看齐。'
	}


]



var arr = [];


for (var attr in imgs) {
	arr.push(imgs[attr]);
}


var mainImgList = [
	{
		url:imgs.img1,
		type:'rect'
	},{
		url:imgs.img2,
		type:'circle'
	},{
		url:imgs.img3,
		type:'circle'
	}
];

var musics = {
	music: {
		src: './assets/music/bg2.mp3',
		autoplay: false,
		name: 'bg',
		loop: true
	},
	photo:{
		src:'./assets/music/photo.mp3',
		autoplay:false,
		name:"photo",
		loop:false
	}
};

 (function () {

 	if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
 		handleFontSize();
 	} else {
 		if (document.addEventListener) {
 			document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
 		} else if (document.attachEvent) {
 			document.attachEvent("WeixinJSBridgeReady", handleFontSize);
 			document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
 		}
 	}

 	function handleFontSize() {
 		// 设置网页字体为默认大小
 		WeixinJSBridge.invoke('setFontSizeCallback', {
 			'fontSize': 0
 		});
 		// 重写设置网页字体大小的事件
 		WeixinJSBridge.on('menu:setfont', function () {
 			WeixinJSBridge.invoke('setFontSizeCallback', {
 				'fontSize': 0
 			});
 		});
 	}
 })();