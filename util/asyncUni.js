/** 
	封装uni的api为promise形式
 */
export const getSetting=()=>{
	return new Promise((resolve,reject)=>{
		uni.getSetting({
			success:(result)=>{
				resolve(result)
			},
			fail:(err)=>{
				reject(err)
			}
		});
	})
}

export const chooseAddress=()=>{
	return new Promise((resolve,reject)=>{
		uni.chooseAddress({
			success:(result)=>{
				resolve(result)
			},
			fail:(err)=>{
				reject(err)
			}
		});
	})
}

export const openSetting=()=>{
	return new Promise((resolve,reject)=>{
		uni.openSetting({
			success:(result)=>{
				resolve(result)
			},
			fail:(err)=>{
				reject(err)
			}
		});
	})
}

export const showModal= ({content})=>{
	return new Promise((resolve,reject)=>{
		uni.showModal({
		    title: '提示',
		    content: content,
		    success:  (res)=> {
					resolve(res);
		    },
				fail:(err)=>{
					reject(err);
				}
		});
	})
}