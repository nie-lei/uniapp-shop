<template>
	<view class="search_input">
	  <navigator url="../../pages/search/index" open-type="navigate">搜索</navigator>
	</view>
</template>

<script>
</script>

<style>
	.search_input{
	  height: 90rpx;
	  padding: 10rpx;
	  /* 使用主题颜色 */
	  background-color: var(--themeColor);
	}
	.search_input navigator{
	  height: 100%;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  background-color: #fff;
	  border-radius: 15rpx;
	  color: #666;
	}
</style>
