<template>
	<transition name='main'>
	
		<div class="lt-full zmiti-introduce-main-ui " :class="{'show':show}" :style="{background:'url('+imgs.introduceBg+') no-repeat center center',backgroundSize:'cover'}"  ref='page'>

			<div class="zmiti-introduce-main">
				<div class="zmiti-introduce-title">
					<img :src="imgs.introTitle" alt="">
					<div>{{texts.zlmIntro}}</div>
				</div>
				<div class="zmiti-introduce-content">
					<h2 class="zmiti-introduce-name">
						{{texts.zlmName}}
					</h2>
					<div class="zmiti-introduce-wrap" ref='zmiti-introduce-wrap'>
						<div>
							<div v-for='(content,i) in texts.zlmIntroContent' :key="i">
								{{content}}
							</div>
						</div>
					</div>
				</div>
			</div>

			<nav class="zmiti-nav">
				<ul>
					<li>爱岗敬业</li>
					<li>勇于创新</li>
					<li>甘于奉献</li>
					<li>
						<img :src="imgs.msg" alt="">
					</li>
				</ul>
			</nav>

			<div class="zmiti-mask" v-if='showMasks' @touchstart='showMasks = false'>
				<img :src="imgs.arrow">
			</div>
	
		</div>
	
	</transition>
</template>

<script>
	import './index.css';
	import {
		imgs,
	} from '../lib/assets.js';
	import zmitiUtil from '../lib/util';
	import $ from 'jquery';
	import IScroll from 'iscroll';
	export default {
		props: ['obserable', 'pv', 'randomPv', 'nickname', 'headimgurl'],
		name: 'zmitiindex',
		data() {
			return {
				imgs,
				texts,
				showTeam: false,
				showQrcode: false,
				show: false,
				viewW: window.innerWidth,
				viewH: window.innerHeight,
				showMasks: false,
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


			this.scroll = new IScroll(this.$refs['zmiti-introduce-wrap'],{
				scrollbars:true
			});

			setTimeout(() => {
				this.scroll.refresh();
			}, 100);

			 
		}
	
	}
</script>