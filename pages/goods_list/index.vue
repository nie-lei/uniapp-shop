<template>
	<view>
		<search-input></search-input>
		<tabs :tabs="tabs" @tabsItemChange="tabsChange">
			<block v-if="tabs[0].isActive">综合</block>
			<block v-if="tabs[1].isActive">销量</block>
			<block v-if="tabs[2].isActive">价格</block>
		</tabs>
	</view>
</template>

<script>
	import searchInput from "../../components/searchInput/searchInput.vue"
	import tabs from "../../components/tabs/tabs.vue"
	export default{
		data(){
			return{
				tabs:[
					{
						id:0,
						value:"综合",
						isActive:true
					},
					{
						id:1,
						value:"销量",
						isActive:false
					},
					{
						id:2,
						value:"价格",
						isActive:false
					}
				]
			}
		},
		methods:{
			tabsChange(index){
				this.tabs.forEach(res=>{
					if(res.id===index){
						res.isActive=true
					}else{
						res.isActive=false
					}
				})
			}
		},
		onLoad(options) {
			console.log(options)
		},
		components:{
			searchInput,
			tabs
		}
	}
</script>

<style>
	
</style>
