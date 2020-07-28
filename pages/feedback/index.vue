<template>
	<view>
		<tabs :tabs="tabs" @tabsItemChange="checkTabs">
			<view class="fb_main">
				<view class="fb_title">问题的种类</view>
				<view class="fb_tips">
					<text>功能建议</text>
					<text>购买遇到问题</text>
					<text>性能问题</text>
					<text>其他</text>
				</view>
				<view class="fb_content">
					<textarea value="" placeholder="请描述一下您遇到的问题" />
					<view class="fb_tool">
						<button @click="handleChoosseImg">+</button>
						<view class="up_img_item" v-for="(item,index) in upimg">
							<upimg :src="item" :index="index" @deleteImg="deleteImg"></upimg>
						</view>
						
					</view>
				</view>
				<view class="form_btn_wrap">
					<button type="warn">√ 提交</button>
				</view>
			</view>
		</tabs>
	</view>
</template>

<script>
	import tabs from "../../components/tabs/tabs.vue"
	import upimg from "../../components/upimg/upimg.vue"
	export default{
		components:{
			tabs,
			upimg
		},
		data(){
			return{
				tabs:[
					{
						isActive:true,
						value:"体验问题"
					},
					{
						isActive:false,
						value:"商品/商家投诉"
					}
				],
				upimg:[
					"../../static/img/_shoucang.png",
					"../../static/img/_shoucang.png",
					"../../static/img/_shoucang.png",
					"../../static/img/_shoucang.png",
					"../../static/img/_shoucang.png",
					"../../static/img/_shoucang.png",
					"../../static/img/_shoucang.png",
					"../../static/img/_shoucang.png",
					"http://tmp/wx9d17b7981cf81e72.o6zAJs0Blttlagf6SLksF_PGHuAY.mk1AK5iCCCQK7931fdf2057e0910fbb474a80b160666.png"
				]
			}
		},
		methods:{
			checkTabs(index){
				this.tabs.forEach((t,i)=>i===index?t.isActive=true:t.isActive=false)
			},
			handleChoosseImg(){
				uni.chooseImage({
					success: (e) => {
						this.upimg.push(e.tempFilePaths)
					}
				})
			},
			deleteImg(index){
				console.log(index,"父组件")
				this.upimg.splice(index,1)
			}
		}
	}
</script>

<style lang="less">
	page{
		background-color: #d8d8d8;
	}
	tabs{
		background-color: #FFFFFF;
	}
	.fb_main{
		padding: 20rpx;
		color: #666;
		.fb_title{}
		.fb_tips{
			display: flex;
			flex-flow: row wrap;
			text{
				background-color: #f0f0f0;
				padding: 10rpx;
				margin: 20rpx 10rpx;
				width: 30%;
				/* margin: 15rpx;
				width: 27vw; */
				text-align: center;
			}
		}
		.fb_content{
			background-color: #FFFFFF;
			margin-top: 20rpx;
			textarea{
				width: 100%;
				/* border: 1rpx solid #777777; */
				
				padding: 20rpx;
			}
			.fb_tool{
				display: flex;
				flex-wrap:wrap;
				padding-bottom: 20rpx;
				/* width: 100%;
				height: 90rpx;
				padding: 20prx; */
				/* position: relative; */
				button{
					margin: 0;
					width: 90rpx;
					height: 90rpx;
					margin-top: 20rpx;
					margin-left: 20rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #CCCCCC;
					font-weight: 700;
					font-size: 40rpx;
					/* position: absolute;
					left: 10rpx; */
				}
				.up_img_item{
					margin-top: 20rpx;
					margin-left: 20rpx;
				}
			}
		}
		.form_btn_wrap{
			margin: 20rpx 0;
			position: relative;
			
			button{
				width:240rpx;
				color: #F1F1F1;
				font-weight: 550;
				position: absolute;
				right: 20rpx;
			}
		}
	}
	
</style>
