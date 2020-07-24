<template>
	<view>
		<view class="revice_address_row">
			<view class="address_btn">
				<button @click="handleChooseAddress2" type="primary" plain>获取收获地址</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			/* 
			1获取用户的收货地址
				1绑定点击事件
				2调用小程序内置 api 获取用户的收货地址
				 
			2获取用户对小程序所授予获取地址的 权限状态 scope
				1假设用户点击获取收货地址的提示框确定 authSetting scope.address 
					scope值true 可以直接调用获取收货地址
				2假设用户从来没有调用过收货地址的api
					scope undefined 可以直接调用获取收货地址
 				3假设用户点击获取收货地址的提示框取消
					scope值false
					1）诱导用户自己打开授权设置页面当用户重新给与获取地址权限的时候
					2）获取收货地址
			 */
			handleChooseAddress(){
				//1
				// const  test = await this.$myUniApi.getSetting()
				// console.log(test.authSetting["scope.address"]);
				/* try{
					this.$myUniApi.getSetting().then((res)=>{
						const aa = res.authSetting["scope.address"];
						return (aa===true || aa === undefined);
					}).then((res)=>{
						console.log("nihao 判断是否有权限，灭有权限诱导用户打开权限",res)
						if(!res){
							return this.$myUniApi.openSetting();
						}else{
							return;
						}
					}).then((res)=>{
						console.log("你不好 获取收货地址选中 ",res)
						return this.$myUniApi.chooseAddress();
					}).then(res=>{
						console.log("你好不好 保存收货地址",res)
					})
				}catch(err){
					console.log(err)
				} */
				// if(scopeAddress===false){
				// 	console.log("判断",scopeAddress)
				// }
				//1.获取用户设置，是否开启收货地址权限
				uni.getSetting({
					success: (res) => {
						//2.获取权限状态 只要发现一些属性名很怪异的时候，使用['xxx.yyy'] 形式来获取属性值
						const scopeAddress = res.authSetting["scope.address"];
						if(scopeAddress===true||scopeAddress===undefined){
							uni.chooseAddress({
								success: (res1) => {
									console.log(res1)
								}
							})
						}else{
							//没有权限 诱导用户打开设置
							// this.$myUniApi.openSetting().then((res)=>{
							// 	this.$myUniApi.chooseAddress()
							// })
							uni.openSetting({
								success: (res2) => {
									uni.chooseAddress({
										success: (res3) => {
											console.log(res3)
										}
									})
								}
							})
						}
					}
				})
			},
			async handleChooseAddress2(){
				try{
					//1.获取权限状态
					const res1 = await this.$myUniApi.getSetting();
					const scopeAddress = res1.authSetting["scope.address"];
					//2.判断权限状态
					if(scopeAddress ===false){
						await this.$myUniApi.openSetting();
					}
					//3.调用获取收获地址的api
					const res2 = await this.$myUniApi.chooseAddress();
					console.log(res2);
				}catch(err){
					// console.log(err)
				}
			}
		}
	}
</script>

<style lang="less">
	.revice_address_row{
		.address_btn{
			padding: 20rpx;
			button{
				width: 60%;
			}
		}
	}
	
</style>
