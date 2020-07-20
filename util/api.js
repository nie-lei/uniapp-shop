// 封装promise，公共请求方法
const BASE_URL = "https://api-hmugo-web.itheima.net/api/public/v1";
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method:options.method || 'GET',
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title:"请求失败"
				})
				reject(err)
			}
		})
	})
}