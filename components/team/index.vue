<template>
	<transition name="team">
		<div v-tap='[hideTeam]' v-if='showTeam' class="lt-full zmiti-team-main-ui" :style="{background:'url('+imgs.teamBg+') no-repeat center center',backgroundSize:'cover'}">
			<div class="zmiti-team-main">
				<div>
					<aside>
						<div>出</div>
						<div>品</div>
						<div>人</div>
					</aside> 
					<aside class="zmiti-chupin">
						<span>陈凯星、</span> <span>冯瑛冰、</span><span>余孝忠、</span><span>余孝忠</span>
					</aside>
				</div>
				<div>
					<aside>
						<div>监</div>
						<div><label for="">品</label></div>
						<div><label for="">人</label></div>
						<div>制</div>
					</aside> 
					<aside>
						<span>陈凯星、</span> <span>冯瑛冰、</span><span>余孝忠</span>
					</aside>
				</div>

				<div>
					<aside>
						<div>监</div>
						<div><label for="">品</label></div>
						<div><label for="">人</label></div>
						<div>制</div>
					</aside> 
					<aside>
						<span>陈凯星、</span> <span>冯瑛冰、</span><span>余孝忠</span>
					</aside>
				</div>

				<div>
					<aside>
						<div>监</div>
						<div><label for="">品</label></div>
						<div><label for="">人</label></div>
						<div>制</div>
					</aside> 
					<aside>
						<span>陈凯星、</span> <span>冯瑛冰、</span><span>余孝忠</span>
					</aside>
				</div>

				<div>
					麟腾传媒技术支持
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import './index.css';
	import {imgs} from '../lib/assets.js';
	import zmitiUtil from '../lib/util';
	export default {
		props:['obserable'],
		name:'zmitiindex',
		data(){
			return{
				imgs,
				show:true,
				showTeam:false,
			}
		},
		components:{
		},
		
		methods:{

			imgStart(e){
				e.preventDefault(); 
			},
			hideTeam(){
				this.showTeam = false;
			}

			
		},
		mounted(){

			this.obserable.on('showTeam',()=>{
				this.showTeam = true;
			})
		


		}
	}
</script>