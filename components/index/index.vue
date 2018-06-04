<template>
	<div v-tap='[entry]'  class="lt-full zmiti-index-main-ui " :style="{background:'url('+imgs.indexBg+') no-repeat center bottom',backgroundSize:'cover'}"  :class="{'show':show}">
		<transition name='index'>
			<div class="zmiti-index" v-if='!showIndexMask'>
				<div class="zmiti-title">
					<img @touchstart='imgStart' :src="imgs.title1">
				</div>
				<div class="zmiti-entry" >
					<img :src="imgs.entry" alt="">
				</div>
			</div>
		</transition>

		<transition name='video'>
				<div class="zmiti-video lt-full" v-show='showVideo' >
					<!-- <video x5-playsinline="" controls x-webkit-airplay="true" ref='video'  webkit-playsinline="true" playsinline="true"  :src='vidoeUrl'></video> -->
					<video id="my_video" ref='video'  style="object-fit: fill; width: 100%; height: 100%;" preload="load" playsinline="true" webkit-playsinline="true" x-webkit-airplay="allow" airplay="allow" x5-video-player-type="h5" :x5VideoPlayerFullscreen="fullscreen" x5-video-orientation="portrait" :src="vidoeUrl"></video>
					
				</div>
			</transition>
	</div>
</template>

<script>
	import './index.css';
	import {imgs} from '../lib/assets.js';
	import zmitiUtil from '../lib/util';
	export default {
		props:['obserable','nickname','pv'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				show:true,
				showIndexMask:false,
				showMasks:false,
				showVideo:false,
				fullscreen:true,
				vidoeUrl:'./assets/video/index.mp4'
			}
		},
		components:{
		},
		
		methods:{

			imgStart(e){
				e.preventDefault(); 
			},

			entry(){
				var {obserable} = this;
				this.showIndexMask = true;

				this.showVideo = true;

				setTimeout(()=>{
					this.$refs['video'].addEventListener('play',()=>{
		 				obserable.trigger({
		 					type:"toggleBgMusic",
		 					data:false
		 				})
		 			})

		 			this.$refs['video'].addEventListener('ended',()=>{
		 				obserable.trigger({
		 					type:"toggleBgMusic",
		 					data:true
		 				})
		 			})

		 			this.$refs['video'].addEventListener('pause',()=>{
		 				this.show && this.$refs['video'].play()	
		 			})
					this.$refs['video'].play()
				},200)
			},
			open(){

				zmitiUtil.wxConfig('我是'+this.nickname+"，已获得改革开放40周年勋章，一起来吧！",'勋章编号：No.'+this.pv);
				this.show = false;
				setTimeout(()=>{
					this.$refs['video'].pause()
					obserable.trigger({
	 					type:"toggleBgMusic",
	 					data:true
	 				})
				},400)
				var {obserable} = this;
				obserable.trigger({
					type:'openWebGl'
				})
			}
			
		},
		mounted(){


			var {obserable} = this;

			obserable.on('toggleIndex',(data)=>{
				this.show = data.show;
			})



		}
	}
</script>