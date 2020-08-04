<template>
	<view class="main">
		<swiper class="swiper">
			<swiper-item class="swiper_item"
				v-for="(item,index) of itemList"
				
			>
				<view class="swiper_item_child" 
					v-for="(item2,index2) of item"
				>
					<image :src="item2.image_src" mode="widthFix"></image>
					<text>测试Swiper</text>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			itemList:{
				type:Array,
				value:[]
			}
		},
		data() {
			return {
				
			};
		},
		onLoad() {
			console.log(this.itemList)
		},
		methods:{
			
		},
		computed:{
			
		}
	}
</script>

<style lang="less">
	.swiper{
		width: 100%;
		.swiper_item{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			.swiper_item_child{
				width: 20%;
				image{
					width: 100%;
				}
				text{
					text-align: center;
					font-size: 20rpx;
					
				}
			}
		}
	}
</style>
