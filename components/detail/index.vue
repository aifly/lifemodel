<template>
	<transition name='main'>
	
		<div class="lt-full zmiti-detail-main-ui " :class="{'show':show}"  ref='page'>
			<div :style="{background:'url('+imgs.detailBg+') no-repeat center top',backgroundSize:'cover'}">
				<h1></h1>
				<div class="zmiti-detail-title">
					<img :src="data.title" alt="">
				</div>

				<div v-if='data.videoPoster' class="zmiti-video-C" :style="{background:'url('+data.videoPoster+') no-repeat center'}">
					<video :style="{opacity:showVideo?1:0}" :src="data.videoUrl" x5-playsinline="" ref="video" controls x-webkit-airplay="true"  webkit-playsinline="true" playsinline="true" > 
					</video>
				</div>
				<div class="zmiti-video-text">
					{{data.videoText}}
				</div>
				<div class="zmiti-image">
					<img :src="data.image" alt="">
				</div>

				<div class="zmiti-image-text">
					{{data.imageText}}
				</div>

				<div class="zmiti-comment">
					<h2>
						<div>精选留言</div>
						<div>
							<img :src="imgs.edit" alt="">
							<span>写留言</span>
						</div>
					</h2>
					
					<div v-for="(comment,i) in comments" :key="i" class="zmiti-comment-item">
						<div>
							<img :src="comment.headimgurl" alt="">
						</div>
						<div>
							<div>{{comment.name}}</div>
							<div>{{comment.content}}</div>
						</div>
					</div>
					
					<div class="zmiti-more">
						查看更多
					</div>
					
				</div>
			</div>
		</div>
	
	</transition>
</template>

<script>
	import './index.css';
	import {
		imgs
	} from '../lib/assets.js';
	import $ from 'jquery';
	import zmitiUtil from '../lib/util';
	import IScroll from 'iscroll';
	export default {
	
		props: ['obserable', 'pv', 'randomPv', 'nickname', 'headimgurl'],
	
		name: 'zmitiindex',
	
		data() {
	
			return {
				imgs,
				texts,
				comments,
				showTeam: false,
				showQrcode: false,
				showVideo:false,
				show: false,
				viewW: window.innerWidth,
				viewH: window.innerHeight,
				showMasks: false,
				data:{

				}
			}
		},
	
		components: {},
		methods: {
			restart() {
				window.location.href = window.location.href.split('?')[0];
			},
			share() {
				this.showMasks = true;
			},
		},
	
		mounted() {
			window.s = this;
			this.scroll = new IScroll(this.$refs['page'],{});
			setTimeout(() => {
				this.scroll.refresh()
			}, 100);

			this.data = window.aigangjingye;
		}
	
	}
</script>